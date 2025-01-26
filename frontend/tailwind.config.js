/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./templates/**/*.html", "./static/js/**/*.js"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      wide: "1920px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        ubuntu: ["Ubuntu"],
      },
      fontSize: {
        //screen >= 320px <= 1920px:

        "fluid-p": "clamp(1rem, 0.8875rem + 0.5625vw, 1.5625rem)", //16px-25px
        "fluid-h1": "clamp(2.125rem, 0.725rem + 7vw, 9.125rem)", //34px-146px
        "fluid-h2": "clamp(1rem, 0.5rem + 2.5vw, 3.5rem)", //16px-50px
        "fluid-h3": "clamp(1.5rem, 1.3rem + 1vw, 2.5rem)", //24px-40px
        "fluid-h4": "clamp(0.75rem, 0.45rem + 1.5vw, 2.25rem)", //12px-36px
        "fluid-h5": "clamp()", //px-px
        "fluid-h6": "clamp()", //px-px
        "fluid-10-22": "clamp(0.625rem, 0.475rem + 0.75vw, 1.375rem)",
        "fluid-12-20": "clamp(0.75rem, 0.65rem + 0.5vw, 1.25rem)",
        "fluid-12-24": "clamp(0.75rem, 0.6rem + 0.75vw, 1.5rem)",
        //screen >= 1920px <= 2560px:

        "fluid-wide-p": "clamp(1.5625rem, -1.25rem + 2.3438vw, 2.5rem)", //25px-40px
        "fluid-wide-h2": "clamp()", //px-px
        "fluid-wide-h3": "clamp(2.5rem, -0.5rem + 2.5vw, 3.5rem)", //40px-56px
        "fluid-wide-h4": "clamp()", //px-px
        "fluid-wide-h5": "clamp()", //px-px
        "fluid-wide-h6": "clamp()", //px-px
      },
      width: {
        eighty: "80%",
        "fluid-100-300": "clamp(6.25rem, 4.4643rem + 8.9286vw, 18.75rem)",

        //screen >= 320px <= 1920px:
        "fluid-28-40": "clamp(1.75rem, 1.6rem + 0.75vw, 2.5rem)",
        "fluid-32-64": "clamp(2rem, 1.6rem + 2vw, 4rem)",
        "fluid-48-112": "clamp(3rem, 2.2rem + 4vw, 7rem)",
        //screen >= 1920px <= 2560px:
      },
      // height: {
      //   //screen >= 320px <= 1920px:
      //   //screen >= 1920px <= 2560px:
      // },
      margin: {
        "fluid-13-48": "clamp(0.8125rem, 0.5rem + 1.5625vw, 3rem)",

        //screen >= 320px <= 1920px:

        "fluid-8-16": "clamp(0.5rem, 0.4rem + 0.5vw, 1rem)",
        "fluid-16-48": "clamp(1rem, 0.5997rem + 2.0013vw, 3rem)",
        //screen >= 1920px <= 2560px:
      },
      padding: {
        "fluid-4-8_8-20":
          "clamp(0.25rem, 0.2143rem + 0.1786vw, 0.5rem) clamp(0.5rem, 0.3929rem + 0.5357vw, 1.25rem)",

        //screen >= 320px <= 1920px:
        "fluid-8-24": "clamp(0.5rem, 0.3rem + 1vw, 1.5rem)", //INFO: Recheck
        //screen >= 1920px <= 2560px:
      },
      borderWidth: {
        //screen >= 320px <= 1920px:
        "fluid-2-5": "clamp(0.125rem, 0.0875rem + 0.1875vw, 0.3125rem)", //INFO: Recheck
        //screen >= 1920px <= 2560px:
      },
      borderRadius: {
        //screen >= 320px <= 1920px:
        "fluid-16-32": "clamp(1rem, 0.8rem + 1vw, 2rem)", //INFO: Recheck
        //screen >= 1920px <= 2560px:
      },
      gap: {
        //screen >= 320px <= 1920px:
        "fluid-8-16": "clamp(0.5rem, 0.4rem + 0.5vw, 1rem)", //INFO: Recheck
        "fluid-16-48": "clamp(1rem, 0.6rem + 2vw, 3rem)", //INFO: was 20-54
        //screen >= 1920px <= 2560px:
      },
      colors: {
        aero: {
          DEFAULT: "#00c2df",
          100: "#ccf3f9",
          200: "#99e7f2",
          300: "#66daec",
          400: "#33cee5",
          500: "#00c2df",
          600: "#009bb2",
          700: "#007486",
          800: "#004e59",
          900: "#00272d",
        },
        "aero-opacity": {
          DEFAULT: "rgba(0, 194, 223, 1)", // #00c2df
          100: "rgba(0, 194, 223, 0.1)",
          200: "rgba(0, 194, 223, 0.2)",
          300: "rgba(0, 194, 223, 0.3)",
          400: "rgba(0, 194, 223, 0.4)",
          500: "rgba(0, 194, 223, 0.5)",
          600: "rgba(0, 194, 223, 0.6)",
          700: "rgba(0, 194, 223, 0.7)",
          800: "rgba(0, 194, 223, 0.8)",
          900: "rgba(0, 194, 223, 0.9)",
        },
        jet: {
          DEFAULT: "#313131",
          100: "#d6d6d6",
          200: "#adadad",
          300: "#838383",
          400: "#5a5a5a",
          500: "#313131",
          600: "#272727",
          700: "#1d1d1d",
          800: "#141414",
          900: "#0a0a0a",
        },
        "jet-opacity": {
          DEFAULT: "rgba(49, 49, 49, 1)", // #313131
          100: "rgba(49, 49, 49, 0.1)",
          200: "rgba(49, 49, 49, 0.2)",
          300: "rgba(49, 49, 49, 0.3)",
          400: "rgba(49, 49, 49, 0.4)",
          500: "rgba(49, 49, 49, 0.5)",
          600: "rgba(49, 49, 49, 0.6)",
          700: "rgba(49, 49, 49, 0.7)",
          800: "rgba(49, 49, 49, 0.8)",
          900: "rgba(49, 49, 49, 0.9)",
        },
        "anti-flash_white": {
          DEFAULT: "#ececec",
          100: "#fbfbfb",
          200: "#f7f7f7",
          300: "#f4f4f4",
          400: "#f0f0f0",
          500: "#ececec",
          600: "#bdbdbd",
          700: "#8e8e8e",
          800: "#5e5e5e",
          900: "#2f2f2f",
        },
        "anti-flash_white-opacity": {
          DEFAULT: "rgba(236, 236, 236, 1)", // #ececec
          100: "rgba(236, 236, 236, 0.1)",
          200: "rgba(236, 236, 236, 0.2)",
          300: "rgba(236, 236, 236, 0.3)",
          400: "rgba(236, 236, 236, 0.4)",
          500: "rgba(236, 236, 236, 0.5)",
          600: "rgba(236, 236, 236, 0.6)",
          700: "rgba(236, 236, 236, 0.7)",
          800: "rgba(236, 236, 236, 0.8)",
          900: "rgba(236, 236, 236, 0.9)",
        },
        onyx: {
          DEFAULT: "#3d3d3d",
          100: "#0c0c0c",
          200: "#181818",
          300: "#252525",
          400: "#313131",
          500: "#3d3d3d",
          600: "#646464",
          700: "#8b8b8b",
          800: "#b1b1b1",
          900: "#d8d8d8",
        },
        "onyx-opacity": {
          DEFAULT: "rgba(61, 61, 61, 1)", // #3d3d3d
          100: "rgba(61, 61, 61, 0.1)",
          200: "rgba(61, 61, 61, 0.2)",
          300: "rgba(61, 61, 61, 0.3)",
          400: "rgba(61, 61, 61, 0.4)",
          500: "rgba(61, 61, 61, 0.5)",
          600: "rgba(61, 61, 61, 0.6)",
          700: "rgba(61, 61, 61, 0.7)",
          800: "rgba(61, 61, 61, 0.8)",
          900: "rgba(61, 61, 61, 0.9)",
        },
        outer_space: {
          DEFAULT: "#474747",
          100: "#0e0e0e",
          200: "#1d1d1d",
          300: "#2b2b2b",
          400: "#393939",
          500: "#474747",
          600: "#6c6c6c",
          700: "#919191",
          800: "#b6b6b6",
          900: "#dadada",
        },
        "outer_space-opacity": {
          DEFAULT: "rgba(71, 71, 71, 1)", // #474747
          100: "rgba(71, 71, 71, 0.1)",
          200: "rgba(71, 71, 71, 0.2)",
          300: "rgba(71, 71, 71, 0.3)",
          400: "rgba(71, 71, 71, 0.4)",
          500: "rgba(71, 71, 71, 0.5)",
          600: "rgba(71, 71, 71, 0.6)",
          700: "rgba(71, 71, 71, 0.7)",
          800: "rgba(71, 71, 71, 0.8)",
          900: "rgba(71, 71, 71, 0.9)",
        },
      },
      boxShadow: {
        aero: {
          DEFAULT: "0px 0px 15px rgba(0, 194, 223, 1)",
          100: "0px 0px 15px rgba(0, 194, 223, 0.1)",
          200: "0px 0px 15px rgba(0, 194, 223, 0.2)",
          300: "0px 0px 15px rgba(0, 194, 223, 0.3)",
          400: "0px 0px 15px rgba(0, 194, 223, 0.4)",
          500: "0px 0px 15px rgba(0, 194, 223, 0.5)",
          600: "0px 0px 15px rgba(0, 194, 223, 0.6)",
          700: "0px 0px 15px rgba(0, 194, 223, 0.7)",
          800: "0px 0px 15px rgba(0, 194, 223, 0.8)",
          900: "0px 0px 15px rgba(0, 194, 223, 0.9)",
        },
        jet: {
          DEFAULT: "0px 0px 15px rgba(49, 49, 49, 1)",
          100: "0px 0px 15px rgba(49, 49, 49, 0.1)",
          200: "0px 0px 15px rgba(49, 49, 49, 0.2)",
          300: "0px 0px 15px rgba(49, 49, 49, 0.3)",
          400: "0px 0px 15px rgba(49, 49, 49, 0.4)",
          500: "0px 0px 15px rgba(49, 49, 49, 0.5)",
          600: "0px 0px 15px rgba(49, 49, 49, 0.6)",
          700: "0px 0px 15px rgba(49, 49, 49, 0.7)",
          800: "0px 0px 15px rgba(49, 49, 49, 0.8)",
          900: "0px 0px 15px rgba(49, 49, 49, 0.9)",
        },
        "anti-flash_white": {
          DEFAULT: "0px 0px 15px rgba(236, 236, 236, 1)",
          100: "0px 0px 15px rgba(236, 236, 236, 0.1)",
          200: "0px 0px 15px rgba(236, 236, 236, 0.2)",
          300: "0px 0px 15px rgba(236, 236, 236, 0.3)",
          400: "0px 0px 15px rgba(236, 236, 236, 0.4)",
          500: "0px 0px 15px rgba(236, 236, 236, 0.5)",
          600: "0px 0px 15px rgba(236, 236, 236, 0.6)",
          700: "0px 0px 15px rgba(236, 236, 236, 0.7)",
          800: "0px 0px 15px rgba(236, 236, 236, 0.8)",
          900: "0px 0px 15px rgba(236, 236, 236, 0.9)",
        },
      },
      dropShadow: {
        "aero-000": "0px 0px 15px rgba(0, 194, 223, 1)",
        "aero-100": "0px 0px 15px rgba(0, 194, 223, 0.1)",
        "aero-200": "0px 0px 15px rgba(0, 194, 223, 0.2)",
        "aero-300": "0px 0px 15px rgba(0, 194, 223, 0.3)",
        "aero-400": "0px 0px 15px rgba(0, 194, 223, 0.4)",
        "aero-500": "0px 0px 15px rgba(0, 194, 223, 0.5)",
        "aero-600": "0px 0px 15px rgba(0, 194, 223, 0.6)",
        "aero-700": "0px 0px 15px rgba(0, 194, 223, 0.7)",
        "aero-800": "0px 0px 15px rgba(0, 194, 223, 0.8)",
        "aero-900": "0px 0px 15px rgba(0, 194, 223, 0.9)",

        "jet-000": "0px 0px 15px rgba(49, 49, 49, 1)",
        "jet-100": "0px 0px 15px rgba(49, 49, 49, 0.1)",
        "jet-200": "0px 0px 15px rgba(49, 49, 49, 0.2)",
        "jet-300": "0px 0px 15px rgba(49, 49, 49, 0.3)",
        "jet-400": "0px 0px 15px rgba(49, 49, 49, 0.4)",
        "jet-500": "0px 0px 15px rgba(49, 49, 49, 0.5)",
        "jet-600": "0px 0px 15px rgba(49, 49, 49, 0.6)",
        "jet-700": "0px 0px 15px rgba(49, 49, 49, 0.7)",
        "jet-800": "0px 0px 15px rgba(49, 49, 49, 0.8)",
        "jet-900": "0px 0px 15px rgba(49, 49, 49, 0.9)",

        "anti-flash_white-000": "0px 0px 15px rgba(236, 236, 236, 1)",
        "anti-flash_white-100": "0px 0px 15px rgba(236, 236, 236, 0.1)",
        "anti-flash_white-200": "0px 0px 15px rgba(236, 236, 236, 0.2)",
        "anti-flash_white-300": "0px 0px 15px rgba(236, 236, 236, 0.3)",
        "anti-flash_white-400": "0px 0px 15px rgba(236, 236, 236, 0.4)",
        "anti-flash_white-500": "0px 0px 15px rgba(236, 236, 236, 0.5)",
        "anti-flash_white-600": "0px 0px 15px rgba(236, 236, 236, 0.6)",
        "anti-flash_white-700": "0px 0px 15px rgba(236, 236, 236, 0.7)",
        "anti-flash_white-800": "0px 0px 15px rgba(236, 236, 236, 0.8)",
        "anti-flash_white-900": "0px 0px 15px rgba(236, 236, 236, 0.9)",
      },
      animation: {
        bounceLow: "bounceLow 1s infinite",
        wiggle: "wiggle 0.5s infinite",
        stretchContract: "stretchContract 2s ease-in-out infinite",
      },
      keyframes: {
        bounceLow: {
          "0%, 100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        stretchContract: {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(0.9)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".cta-btn": {
          margin: theme("margin.fluid-13-48"),
          display: "inline-block",
          padding: theme("padding.fluid-4-8_8-20"),
          borderRadius: "9999px",
          boxShadow: theme("boxShadow.anti-flash_white.500"),
          backgroundColor: theme("colors.aero.DEFAULT"),
          lineHeight: 1.5,
          fontWeight: 500,
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "300ms",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          "&:hover": {
            scale: "1.1",
          },
          "&:active": {
            backgroundColor: theme("colors.aero-opacity.800"),
          },
        },
        ".vitality-logo": {
          aspectRatio: "auto",
          margin: "0 auto",
          width: theme("width.fluid-100-300"),
        },
      });
    }),
  ],
};
