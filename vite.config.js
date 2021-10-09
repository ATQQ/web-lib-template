const path = require('path');
const typescript = require('@rollup/plugin-typescript');
const { defineConfig } = require('vite');

const libName = 'LibName';
const bundlePrefix = 'index';

// 入口
const entry = path.resolve(__dirname, 'src/index.ts');

module.exports = defineConfig({
  plugins: [
    typescript({
      target: 'es5',
      include: ['src/**/*.ts'],
      esModuleInterop: true,
      module: 'esnext',
    }),
  ],
  build: {
    sourcemap: true,
    outDir: 'dist',
    minify: !process.env.dev,
    lib: {
      entry,
      name: libName,
      formats: ['umd', 'cjs', 'es'],
      fileName: (format) => {
        if (format === 'umd') {
          return `${bundlePrefix}.min.js`;
        }
        return `${bundlePrefix}.${format}.js`;
      },
    },
    rollupOptions: {
      input: entry,
      output: {
        exports: 'auto',
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
});
