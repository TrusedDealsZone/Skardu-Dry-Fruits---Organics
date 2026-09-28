# Skardu Dry Fruits And Organics | Premium Dry Fruits & Organic Store

A full-stack modern e-commerce web application with Cash on Delivery (COD) only payment, Customer Accounts, and a complete Admin Management Portal.

## 🚀 Quick Start (How to Run)

### Option 1: One-Click Startup
Double click `start.bat` in this folder. It will install dependencies, launch both backend and frontend, and open the site in your browser.

### Option 2: Manual Terminal Commands

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Backend Server (Port 5000)**:
   ```bash
   npm run server
   ```

3. **Start Frontend Dev Server (Port 5173)**:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   **http://localhost:5173**

---

## 👑 Admin Panel Access & Login

- Click the **"Admin"** button in the top right navbar (or the floating shield button on bottom right).
- **Admin Email / Username**: use the existing admin account in MongoDB (the included seed data uses `skardu@dryfruits.com`; `admin` is also accepted by the login route)
- **Admin Password**: use the admin password configured for that account. The seed script can create the fallback admin password `admin123` only when the default admin account does not already exist.

### What the Admin Can Do:
1. **Edit Products**:
   - Change Product Name
   - Change Base Price in PKR (`Rs.`)
   - Change Compare / Original Price
   - Change Pack Weights & Prices (e.g. 250g, 500g, 1kg)
   - Change Category (`Dry Fruits` or `Organic Products`)
   - Change Product Image (Upload directly from your PC or paste an image URL)
   - Change Stock Status & Stock Count
   - Change Description & Health Benefits
2. **Add New Products**:
   - Add any new dry fruit or organic item anytime.
3. **Delete Products**:
   - Remove products with 1-click.
4. **Manage Customer COD Orders**:
   - View all incoming customer orders with recipient name, phone, address, and city.
   - Update order status: `Pending` → `Confirmed` → `Shipped` → `Delivered` → `Cancelled`.
   - Direct click to open WhatsApp chat with the customer to confirm their delivery!
5. **Website & Hero Banner Settings**:
   - Change Store Name & Tagline.
   - Change WhatsApp Contact Number.
   - Change Delivery Fee & Free Delivery Threshold in PKR.
   - Change Announcement Bar text.
   - Change Hero Banner Headline, Subtitle, Badge, and Background image.

---

## ☁️ Production Deployment (Vercel + Render)

### Render (Backend)
- Start command: `npm run start`
- Set `NODE_ENV=production`
- Set `MONGODB_URI` to the private MongoDB Atlas connection string.
- Set `JWT_SECRET` to a long random private value.
- Set `CLIENT_URL` to the Vercel frontend URL (multiple origins can be comma-separated).

### Vercel (Frontend)
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Add public environment variable `VITE_API_URL` with the Render backend URL, for example:
  `https://your-service.onrender.com`
- Do not put MongoDB credentials or `JWT_SECRET` in any `VITE_*` variable.

The frontend uses `VITE_API_URL` for authentication, products, settings, categories, reviews, checkout, tracking, admin orders, uploads, and admin updates. Uploaded `/uploads/...` image paths are automatically resolved against the Render backend.

## 🛍️ Customer Features

- **Categories**: Browse between **Dry Fruits** and **Organic Products**.
- **Live Search**: Instant keyword search for nuts, dates, honey, salajeet, etc.
- **Dynamic Weight Selector**: Switch between 250g, 500g, 1kg with instant price calculation in PKR.
- **Cash on Delivery Checkout**: Smooth Pakistani checkout form with customer name, WhatsApp number, city, and address.
- **Order Tracking**: Enter Order ID (e.g. `COD-1001`) or phone number to see live delivery timeline.
- **Customer Sign Up / Sign In**: Save delivery details and view order history.
- **Direct WhatsApp Order**: 1-click to chat and order directly on WhatsApp.
