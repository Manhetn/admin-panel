import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@layouts': 'src/layouts/index.ts',
      '@styles': 'src/styles/index.scss',
      '@mixins': 'src/styles/mixins.scss',
      '@variables': 'src/styles/variables.scss',
      '@pages': 'src/pages/index.ts',
      '@common': 'src/components/common/index.ts',
      '@ui': 'src/components/ui',
      '@icons': 'src/components/common/icons.tsx',
      '@interfaces': 'src/core/interfaces/index.ts',
      '@services': 'src/core/services/index.ts',
      '@configs': 'src/core/configs/index.ts',
      '@utils': 'src/core/utils/index.ts',
      '@consts': 'src/core/consts/index.ts',
      '@store': 'src/core/store/index.ts',
      '@hooks': 'src/core/hooks/index.ts',
      '@types': 'src/core/types/index.ts',
    },
  },
});
