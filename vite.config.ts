import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: './src',
      insertTypesEntry: true,
      exclude: ['**/*.story.tsx', '**/*.stories.tsx', '**/*.spec.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format, name) => `${name}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        globals: {
          'react-dom': 'ReactDom',
          react: 'React',
        },
      },
    },
  },
});
