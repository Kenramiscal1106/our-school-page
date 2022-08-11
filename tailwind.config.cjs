/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        default: "Poppins, sans-serif",
      },
      colors: {
        "blue-accent": "#003A6A",
        secondary: "#242424",
      },
      boxShadow: {
        card: "0px 14px 85px rgba(176, 125, 14, 0.14), 0px 4.22059px 25.625px rgba(176, 125, 14, 0.0912224), 0px 1.75302px 10.6433px rgba(176, 125, 14, 0.07), 0px 0.634032px 3.84948px rgba(176, 125, 14, 0.0487776)",
      },
    },
  },
};
