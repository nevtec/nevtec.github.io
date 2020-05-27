const MAX_WIDTH = '1255px';

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

  breakpoints: {
    tablet: "1114px",
  },

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
}

export default theme