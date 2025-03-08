module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,vue}', // Adjust the paths according to your project structure
    ],
    theme: {
        extend: {
        colors: {
            'main': '#e002a2',
            'second': '#47019d',
            'three': '#e00256',
            'black': '#212121',
            'white': '#ffffff',
            'gray': '#808080e2'
        }
        },
    },
    plugins: [],
}