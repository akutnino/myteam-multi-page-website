import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production';

	return {
		base: '/myteam-multi-page-website/',
		plugins: [
			react({
				babel: {
					plugins: [['babel-plugin-react-compiler']],
				},
			}),
		],
		build: {
			sourcemap: !isProduction,
		},
	};
});
