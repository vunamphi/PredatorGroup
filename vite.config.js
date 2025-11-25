import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
<<<<<<< HEAD
            input: ['resources/css/app.css', 'resources/js/app.js',
                'resources/css/layout/main.css', 'resources/js/layout/main.js'
=======
            input: [
                'resources/css/app.css', 'resources/js/app.js',
                'resources/css/layout/main.css', 'resources/js/layout/main.js',
                'resources/css/admin/main.css', 'resources/js/admin/main.js'
>>>>>>> 0a0b0f5e852948a3bd0bc9ad9c3794c312c95a8b
            ],
            refresh: true,
        }),
        tailwindcss(),
        vue(),
    ],
<<<<<<< HEAD
});
=======
});
>>>>>>> 0a0b0f5e852948a3bd0bc9ad9c3794c312c95a8b
