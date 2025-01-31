import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Enable JSX parsing
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This maps @ to the src folder
    },
  }
})
