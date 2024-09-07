/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all relevant files for Tailwind's purge process
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#001f3f',  // Custom dark blue color
        'light-gray': '#d3d3d3', // Custom light gray color
        'customGray': '#545454', // Add your custom gray color
      },
    },
  },
  plugins: [],
};

