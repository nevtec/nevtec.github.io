const RELATIVE_UNIT_BASE = 16;
const MAX_WIDTH = '1255px';

const breakpoints = {
  tablet: 960,
  phone: 768,
  smallPhone: 540,
};

const generateBreakpoint = (width, cssMarkup) => `
  @media (max-width: ${width / RELATIVE_UNIT_BASE}em) {
    ${cssMarkup};
  }
`;

const theme = {
  setContainer: () => `
    max-width: ${MAX_WIDTH};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  colors: {
    whiteDefault: "#fff",
    blueDefault: "#1e8bc3",
    grayText: "#808080",
    grayTittle: "rgba(255,255,255,.5)",
    writeHove: "#000",
    bgMenu: "#000",
    bgBtnMenu: "#000000ad",

    fbColor: "#3b5998",
    twColor: "#1da1f2",
    instaColor: "#e95950",
    behaColor: "#053eff",
    dribbbColor: "#ea4c89",

  },

  fonts: {
    montBold: "montserratBold",
    montLight: "montserratLight",
    montMedium: "montserratMedium",
    montRegular: "montserratRegular",
    montSemibold: "montserratSemibold",
  },

  generateBreakpoint,
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => generateBreakpoint(breakpoints[label], args);
    return acc;
  }, {}),

}

export default theme