const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = {
 content: ["./src/**/*.{js,jsx}"],
 darkMode: "class",
 theme: {
   // rest of the code
 },
 plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
 let allColors = flattenColorPalette(theme("colors"));
 let newVars = Object.fromEntries(
   Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
 );
 addBase({
   ":root": newVars,
 });
}