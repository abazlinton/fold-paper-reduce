import React from "react"
import { useSpring, animated } from "react-spring"

const  PaperSection = function({
  left,
  top,
  frontText,
  backText,
  mass,
  size,
  section,
  currentSection
}) {

  let targetYRotation = 0
  if (currentSection >= section){
    targetYRotation = 180
  }
  const { yRotation } = useSpring({
    to: { yRotation: targetYRotation },
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
          position: "absolute",
          backgroundColor: "#F7F3E3",
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: `${size}px`,
          fontSize: "4rem",
          borderRadius: "10px",
          backfaceVisibility: "hidden",
          borderRight: "2px solid lightgrey",
          transform: yRotation.interpolate(
            (yRotation) =>
              `rotateY(${180 + yRotation}deg) 
               translate3d(${size / 2}px, 0px, 1px)`
          ),
          // Safari: Have to push backface 1px into the screen so clear which is behind
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
          position: "absolute",
          backgroundColor: "#F7F3E3",
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: `${size}px`,
          fontSize: "4rem",
          borderRadius: "10px",
          backfaceVisibility: "hidden",
          borderRight: "2px solid darkgrey",
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
