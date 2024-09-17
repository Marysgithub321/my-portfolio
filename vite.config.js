import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    // Brotli Compression
    compression({
      algorithm: 'brotliCompress', // Use Brotli for modern browsers
      ext: '.br', // Brotli extension
      deleteOriginFile: false, // Keep original uncompressed files
    }),
    // Gzip Compression as Fallback
    compression({
      algorithm: 'gzip', // Gzip for older browsers
      ext: '.gz', // Gzip extension
      deleteOriginFile: false, // Keep original uncompressed files
    }),
  ],
});
