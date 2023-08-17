import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: 'src/main.js',
                index: 'src/index.html',
                base: 'src/pages/anotherPage.html', // HTML file for the about page
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
