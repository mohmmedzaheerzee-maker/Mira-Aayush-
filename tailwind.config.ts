import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0B3D2E",
          light: "#125440",
          dark: "#07261D",
        },
        leaf: {
          DEFAULT: "#3F8F3A",
          light: "#52B24C",
          dark: "#2C6928",
        },
        cream: {
          DEFAULT: "#F6F0DF",
          light: "#FDFBF5",
          dark: "#EDE4C9",
          muted: "#E5DAC0",
        },
        gold: {
          DEFAULT: "#C9A24A",
          light: "#DFBE6C",
          dark: "#A38031",
        },
        ink: {
          DEFAULT: "#14231B",
          light: "#2B3F34",
          muted: "#51665A",
        },
        "medical-red": {
          DEFAULT: "#C8102E",
          hover: "#A30D25",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Cinzel", "Cormorant Garamond", "Georgia", "serif"],
        tagline: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "Manrope", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        tamil: ["var(--font-noto-tamil)", "Noto Sans Tamil", "sans-serif"],
        sinhala: ["var(--font-noto-sinhala)", "Noto Sans Sinhala", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(11, 61, 46, 0.08)',
        'elevated': '0 20px 40px -15px rgba(11, 61, 46, 0.15)',
        'gold-glow': '0 0 25px rgba(201, 162, 74, 0.25)',
        'card-hover': '0 25px 50px -12px rgba(11, 61, 46, 0.22)',
      },
      borderRadius: {
        'card': '20px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'leaf-drift': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(8deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'leaf-drift': 'leaf-drift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
