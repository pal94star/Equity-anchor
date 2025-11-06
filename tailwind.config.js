/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5a6",
        primary700: "#0c8a8b",
        accent: "#10b981",
        skybg: "#eef6fb",
      },
      borderRadius: { "2xl":"1rem" }
    },
  },
  plugins: [],
};
