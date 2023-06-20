import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/course-work/sdaem/' : '/',
  define: {
    'import.meta.env.SITE_URL': JSON.stringify(
      // в import.meta.env.SITE_URL будем добавлять адрес сайта в зависимости от того, находимя ли в девелопмент моде или в продакшн
      process.env.NODE_ENV === 'production' ? '/course-work/sdaem/' : '/'
    ),
  },
  plugins: [react(), legacy()],
});
