/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-transparent":
        "linear-gradient(to right,rgba(250 250 250 / 80%) ,rgba(250 250 250 / 50%) ,rgba(250 250 250 / 30%))"
      },
      animation: {
        pingOnce: "pingOnce 0.3s cubic-bezier(0, 0, 0.2, 1)"
      }
    },
  },
  plugins: [],
};
