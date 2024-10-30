/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        login:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        container:
          "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
      },
      colors: {
        "border-gray": "#9ca3af",
      },
    },
  },
  plugins: [],
};
