/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2A82C3",
        text: "#262626",
        border: "#2A6BB2",
        item: "#274F9B",
        input: "#D6D6D6",
        label: "#818181",
        black: "#2A2A2A",
        gray: "#A0A0A0",
      },
      boxShadow: {
        "3xl": " 0px 4px 16px rgba(0, 0, 0, 0.25)",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      transitionProperty: {
        transition: "0.3s all linear",
      },

      fontFamily: {
        regular: "Vansans",
        vbold: "Vansans-bold",
        black: "Vansans-black",
        vlight: "Vansans-light",
        vmedium: "Vansans-m",
      },
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
