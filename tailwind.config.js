/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"], // Custom Poppins font
        sans: ["ui-sans-serif", "system-ui"], // Tailwind's default sans-serif font/ Add 'Open Sans' to the sans family
      },
    },
  },
  plugins: [],
};
