const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your color palette
        primary: {
          DEFAULT: "#FF9800", // Light Primary color
          dark: "#F57C00", // Dark Primary color
          light: "#FFE0B2", // Light Primary color
        },
        accent: "#FF5252", // Accent Color
        texts: {
          primary: "#212121", // Primary Text color
          secondary: "#757575", // Secondary Text color
        },
        divider: "#BDBDBD", // Divider Color
      },
      
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
    // themes: {
    //   dark: {
    //     colors: {
    //       primary: {
    //         DEFAULT: "#f57c00", // Dark Primary color
    //         foreground: "#212121", // Text/Icon color
    //       },
    //       secondary: {
    //         DEFAULT: "#757575", // Secondary Text color
    //       },
    //       accent: "#FF5252", // Accent Color
    //       divider: "#BDBDBD", // Divider Color
    //       background: "#212121", // Background color
    //     },
    //   },
    //   light: {
    //     colors: {
    //       primary: {
    //         DEFAULT: "#FF9800", // Light Primary color
    //         foreground: "#212121", // Text/Icon color
    //       },
    //       secondary: {
    //         DEFAULT: "#757575", // Secondary Text color
    //       },
    //       accent: "#FF5252", // Accent Color
    //       divider: "#BDBDBD", // Divider Color
    //       background: "#FFE0B2", // Background color
    //       // Define other custom colors if needed
    //     },
    //   },
    // },
  },
  darkMode: "class",
  plugins: [nextui( 
  )],
};
