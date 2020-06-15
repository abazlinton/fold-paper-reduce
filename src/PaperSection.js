import React from "react"
import "./App.css"
import { useSpring, animated } from "react-spring"

function PaperSection({
  left,
  top,
  frontText,
  backText,
  mass,
  size,
  section,
  currentSection,
}) {
  let targetYRotation = 0
  if (section <= currentSection) {
    targetYRotation = 180
  }
  const { yRotation } = useSpring({
    yRotation: targetYRotation,
    from: { yRotation: 0 },
    config: {
      mass: mass,
      clamp: true,
    },
  })

  return (
    <div>
      <animated.div
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
          backfaceVisibility: "hidden",
          border: "1px solid darkgrey",
          transform: yRotation.interpolate(
            (yRotation) =>
              `rotateY(${180 + yRotation}deg) 
               translate3d(${size / 2}px, 0px, 0px)`
          ),
        }}
      >
        {backText}
      </animated.div>
      <animated.div
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
          backfaceVisibility: "hidden",
          border: "1px solid darkgrey",
          transform: yRotation.interpolate(
            (yRotation) =>
              `rotateY(${yRotation}deg) 
               translate3d(-${size / 2}px, 0px, 0px)`
          ),
        }}
      >
        {frontText}
      </animated.div>
    </div>
  )
}

export default PaperSection
