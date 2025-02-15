// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // مسیرهایی که باید توسط Tailwind بررسی شوند
    ],
    theme: {
        extend: {
            colors: {
                primary: 'oklch(61.35% 0.114 264.99)', // رنگ سفارشی
                secondary: '#ff5733', // رنگ سفارشی
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // فونت سفارشی
            },
        },
    },
    plugins: [],
})
