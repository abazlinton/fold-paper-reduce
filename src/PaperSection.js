import React, { useState } from "react"
import "./App.css"
import { useSpring, animated } from "react-spring"

function PaperSection({ left, top, mass, size }) {
  const [moveTo, setMoveTo] = useState(0)
  const { yRotation } = useSpring({
    yRotation: moveTo,
    from: { yRotation: 0 },
    config: {
      mass: mass,
      clamp: true,
    },
  })

  return (
    <div style={{ perspective: "1000px" }}>
      <animated.div
        onClick={() => setMoveTo(180)}
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
              `rotateY(${yRotation}deg) translate3d(-${size / 2}px, 0px, 0px)`
          ),
        }}
      >
        1
      </animated.div>
      <animated.div
        style={{
          top: top,
          left: left,
          zIndex: -100,
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
          transform: yRotation.interpolate(
            (yRotation) =>
              `rotateY(${180 + yRotation}deg) translate3d(${
                size / 2
              }px, 0px, 0px)`
          ),
        }}
      >
        ?
      </animated.div>
    </div>
  )
}

export default PaperSection
