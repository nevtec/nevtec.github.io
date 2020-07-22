const MAX_WIDTH = "1255px";

const breakpoints = {
  desktop: 960,
  tablet: 768,
  phone: 540,
}

const generateBreakpoint = (width, cssMarkup) => `
  @media (max-width: ${width}px) {
    ${cssMarkup};
  }
`

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
    bgMenu: "#121212",
    bgBtnMenu: "#000000ad",
    lineColor: "#ffffff6e",
    linelight: "#7575758c",
    bgWorks: "#111111",
    retina: " #0000009c",
    clientsBg: "#e6e6e6",
    grafit: "#555555",
    brForm: "#0000008f",
    btnHover: "#246b90",

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
    acc[label] = (...args) => generateBreakpoint(breakpoints[label], args)
    return acc
  }, {}),
}

export default theme;
