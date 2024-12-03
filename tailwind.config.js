/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "fondo-sticker": "url('../src/img/fond2.jpg')",
            },
            screens: {
                phone: "320px",

                tablet: "640px",

                laptop: "1024px",

                desktop: "1280px",
            },
        },
    },
    plugins: [],
};
