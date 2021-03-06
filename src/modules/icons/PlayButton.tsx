import React from "react"

const PlayButton = ({ ...props }) => {
  return (
    <svg
      width="45"
      height="52"
      viewBox="0 0 45 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1.75129L43 26L1 50.2487L1 1.75129Z"
        stroke="#EFF3F5"
        stroke-width="2"
      />
    </svg>
  )
}

export default PlayButton
