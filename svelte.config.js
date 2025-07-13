import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'


/** @type {import('vite').UserConfig} */
export default {
  plugins: [svelte()],
  lib: {
    build: {
      entry: './src/index.ts',
      name: 'Dueterium',
      fileName: 'dueterium',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  }
}

