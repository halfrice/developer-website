import Typography from "typography"

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: "25px",
  headerFontFamily: ["Open Sans", "sans-serif"],
  headerWeight: "600",
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  bodyWeight: "400",
  scaleRatio: 2,
  blockMarginBottom: "6px",
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
