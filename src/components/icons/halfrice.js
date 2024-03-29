import React from "react"
import theme from "../../styles/theme.yaml"

const { colors } = theme

const IconHalfrice = () => (
  <svg
    id="logo"
    width="128px"
    height="128px"
    version="1.1"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Halfrice</title>
    <path
      id="n"
      d="m43 35 43 58m0-78h0v78h-0zm-43 21h0v78h-0z"
      stroke={colors.lightSlate}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="14"
    />
    <circle
      id="circle"
      cx="64"
      cy="64"
      r="56"
      fill="none"
      stroke={colors.darkSlate}
      strokeLinecap="round"
      strokeWidth="14"
    />
  </svg>
)

export default IconHalfrice
