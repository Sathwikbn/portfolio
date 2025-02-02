import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		},
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
							return 'react-vendor';
						}
						if (id.includes('framer-motion')) {
							return 'animation-vendor';
						}
						if (id.includes('lucide-react')) {
							return 'ui-vendor';
						}
						return 'vendor';
					}
				}
			}
		}
	},
	optimizeDeps: {
		include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
	}
});