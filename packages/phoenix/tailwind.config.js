module.exports = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "phoenix",
    }),
  ],
};
