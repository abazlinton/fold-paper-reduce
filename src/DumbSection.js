import React from "react"

function DumbSection({left, top, size, visibility, displayText} ){
  return (
    <div
      style={{
        top: top,
        left: left,
        width: size,
        height: size,
        position: "fixed",
        backgroundColor: "#F7F3E3",
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: `${size}px`,
        fontSize: "5rem",
        borderRadius: "7px",
        border: "1px solid darkgrey",
        visibility: visibility,
      }}
    >{displayText}</div>
  )
}

export default DumbSection
