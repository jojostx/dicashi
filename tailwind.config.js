const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        'source/**/*.blade.php',
        'source/**/*.md',
        'source/**/*.html',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            fontFamily: {
                dm: 'DM Sans',
                fraun: 'Fraunces',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};