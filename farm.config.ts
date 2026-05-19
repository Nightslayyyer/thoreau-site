import { defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import postcss from '@farmfe/js-plugin-postcss';

export default defineConfig({
  // This hooks PostCSS (and Tailwind) into Farm's core build process
  plugins: [postcss()],
  // This handles your Vue components
  vitePlugins: [vue()]
});
