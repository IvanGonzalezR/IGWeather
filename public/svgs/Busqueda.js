import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 30 30"
    {...props}
  >
    <circle
      cx={13}
      cy={13}
      r={9}
      style={{
        fill: "none",
        stroke: "#969696",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="m26 26-6.563-6.563"
      style={{
        fill: "none",
        stroke: "#969696",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
    />
  </svg>
)
export default SvgComponent