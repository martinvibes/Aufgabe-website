/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        regular: "72px",
        p20: "20px",
        p12: "12px",
      },
      margin: {
        regular: "72px",
      },
      colors: {
        navBtn: "#0075FF",
        btnHover: "#FC9902 ",
        trustedH1: "#ACABAB ",
        solutionBg: "#FAFAFA ",
        midBlack: "#111011 ",
        lightGray: "#E0E0E0 ",
        footerColor: "#191C3C ",
        linear1: "#0075ff",
        linear2: "#191c3c",
      },
      width: {
        heroBtnW: "158px",
        heroH1: "696px",
        solution: "388px",
        chooseUsW: "489px",
        chooseUs: "1116px",
        faqW: "967px",
        contactForm: "908px",
      },
      height: {
        heroBtnH: "52px",
        heroSide: "500px",
        trustedH: "185px",
        solutionInH: "356px",
        solutionH: "613px",
      },
      fontSize: {
        font20: "20px",
        font24: "24px",
        font32: "32px",
        font40: "40px",
      },
    },
  },
  plugins: [],
};
