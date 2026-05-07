/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: '#0f172a', // dark blue/slate
                accent: '#38bdf8', // sky blue
                glow: '#0ea5e9'
            },
            backgroundSize: {
                '300%': '300%',
            },
            animation: {
                'blob': 'blob 7s infinite',
                'typing': 'typing 3s steps(40, end), blink .75s step-end infinite',
                'gradient': 'gradient 8s ease infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                typing: {
                    from: { width: '0' },
                    to: { width: '100%' }
                },
                blink: {
                    'from, to': { borderColor: 'transparent' },
                    '50%': { borderColor: 'white' }
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            }
        },
    },
    plugins: [],
}
