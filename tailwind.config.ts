import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "bg-color": "#F3F9FD",
        "bg-color-2": "#FFFFFF",
        'azure': '#007fed',
        'azure-hover': '#1993fd',
      },

      spacing: {
        'copy-lg': '775px',
        'blue-cta': '470px',
        '1.5xl': '605px',
        '1.75xl': '655px',
        'md-2': '470px',
        '18': '75px',
        '22': '86px',
        'slide': '484px',
      },
    },
  },
  plugins: [],


  
};
export default config;
