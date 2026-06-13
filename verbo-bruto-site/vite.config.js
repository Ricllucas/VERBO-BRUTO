import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: true,
    hmr: {
      host: '1a162a3a-5174.preview.verdent.ai',
      protocol: 'wss',
      clientPort: 443,
    },
  },
})
