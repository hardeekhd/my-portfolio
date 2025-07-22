/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        accent: '#eab308',
        'bg-dark': '#050414',              // 🟣 dark base background
        'purple-glow': '#8245ec',          // 🟣 for hover/glow effects
      },
      boxShadow: {
        custom: '0 4px 14px rgba(0, 0, 0, 0.2)',
        glow: '0 0 40px rgba(130, 69, 236, 0.5)', // 🟣 custom glow
      },
      blur: {
        '3xl': '72px',
        '4xl': '120px',
      },
      zIndex: {
        '-1': '-1',
        '60': '60',
        '70': '70',
      },
    },
  },
  plugins: [],
};
