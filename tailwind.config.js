/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(146.31deg, #DAA952 0%, #FDE16F 48.84%, #E1B457 100%)",
        "gradient-main":
          "linear-gradient(167.87deg, #000917 0%, #103E4B 52.4%, #000917 100%);",
      },
    },
  },
  plugins: [],
};
