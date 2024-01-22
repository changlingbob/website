import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ssr } from 'vike/plugin';
import path from 'path';

const commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString();

export default ({ mode }) => {
  const isDevelopment = mode === 'development';
  const base = isDevelopment ? '/' : '/website/';
  return defineConfig({
    base,
    root: 'src',
    mode,
    publicDir: 'assets',
    plugins: [
      react({
        exclude: /test/,
        include: [/\*\*\/\*\.tsx?/, '**/*.scss'],
      }),
      ssr({ prerender: { noExtraDir: true } }),
    ],
    build: {
      outDir: '../www',
      minify: !isDevelopment,
    },
    css: {
      modules: {
        localsConvention: 'dashesOnly',
      },
    },
    resolve: {
      alias: [
        {
          find: '@assets',
          replacement: path.resolve(__dirname, 'src/assets'),
        },
        {
          find: '@content',
          replacement: path.resolve(__dirname, 'src/content'),
        },
        {
          find: '@theme',
          replacement: path.resolve(__dirname, 'src/theme'),
        },
        { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
        {
          find: '@renderer',
          replacement: path.resolve(__dirname, 'src/renderer'),
        },
        {
          find: '@components',
          replacement: path.resolve(__dirname, 'src/components'),
        },
        {
          find: '@utils',
          replacement: path.resolve(__dirname, 'src/utils'),
        },
      ],
    },

    server: {
      port: 3077,
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
    },
    define: {
      APP_CONFIG: {
        GIT_HASH: commitHash,
        BASE_URL: base,
        MODE: mode,
        HOST: isDevelopment
          ? 'localhost:3069'
          : 'https://greg-skinner.github.io',
      },
    },
  });
};
