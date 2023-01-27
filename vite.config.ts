import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const PATH_SRC = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '~/': `${PATH_SRC}/`,
    },
  },
});
