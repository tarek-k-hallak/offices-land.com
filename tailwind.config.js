const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        fontFamily: {
            primary: 'Tajawal',
        },
        container: {
            padding: {
                DEFAULT: '1.5rem',
                // lg: '3rem',
            },
        },
        screens: {
            xxs: '0',
            xs: '410px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                primary: '#224284',
                accent: '#858d9a',
                minorBackground: '#1B1C24',
                majorBackground:'#15161C',
                hover: '#8F1F20',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
    
};
