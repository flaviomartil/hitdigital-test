/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',  // Habilitar modo escuro
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBackground: "#1A202C", // Cor de fundo para modo escuro
        darkForeground: "#718096", // Cor do texto para modo escuro
      },
    },
  },
  plugins: [],
};