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
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      },
      colors: {
        "border-gray": "#9ca3af",
        "blue-100": "#a3c3ff",
        "blue-110": "#5d9dff",
        "blue-120": "#3a8aff",
        "blue-130": "#1777ff",
        "blue-140": "#157ee4",
        "blue-150": "#136dcb",
        "blue-160": "#115cb2",
        "blue-170": "#80b0ff",
        "blue-180": "#0f4b99",
        "blue-190": "#0d3b80",
      },
    },
  },
  plugins: [],
};
