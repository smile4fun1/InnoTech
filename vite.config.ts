import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          components: [
            './src/components/Features.tsx',
            './src/components/InteractivePortfolio.tsx',
            './src/components/ProcessTimeline.tsx',
            './src/components/TechnologyStack.tsx',
            './src/components/InteractiveProductDemo.tsx',
            './src/components/AwardsRecognition.tsx',
            './src/components/Testimonials.tsx',
            './src/components/CallToAction.tsx',
          ],
        },
      },
    },
  },
})
