import express from 'express';
import multer from 'multer';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
import { requireAdmin } from '../middleware/auth.js';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  timeout: 120000
});

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp|gif|svg/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);

    if (ext && mime) {
      return cb(null, true);
    }

    cb(new Error('Only image files (JPEG, PNG, WebP, SVG) are allowed'));
  }
});

const router = express.Router();

// UPLOAD IMAGE (ADMIN ONLY)
router.post('/', requireAdmin, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'skardu-dry-fruits-organics',
          resource_type: 'image'
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      stream.end(Buffer.from(req.file.buffer));
    });

    res.json({
      message: 'Image uploaded successfully',
      url: uploadResult.secure_url,
      filename: uploadResult.public_id
    });
  } catch (err) {
    console.error('Cloudinary upload error:', err);

    res.status(500).json({
      error: 'Failed to upload image'
    });
  }
});

export default router;
