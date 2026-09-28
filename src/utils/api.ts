export const API_URL = import.meta.env.VITE_API_URL || '';

export function assetUrl(src?: string): string {
  if (!src) return '';
  if (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith('blob:')
  ) {
    return src;
  }
  if (src.startsWith('/uploads/')) {
    return `${API_URL}${src}`;
  }
  return src;
}
