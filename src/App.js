import React, { useState } from "react"
import "./App.css"
import { useSpring, animated, interpolate } from "react-spring"

function App() {
  const [moveTo, setMoveTo] = useState(0)
  const { yRotation } = useSpring(
    { 
      yRotation: moveTo, 
      from: { yRotation: 0 } ,
      config: {
        mass: 75,
        clamp: true
      }
    })

  return (
    <div style={{ perspective: "1000px" }}>
      <animated.div
        onClick={() => setMoveTo(180)}
        style={{
          top: 200,
          left: 100,
          width: "150px",
          height: "150px",
          position: "fixed",
          backgroundColor: "#F7F3E3",
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: "150px",
          fontSize: "5rem",
          borderRadius: "7px",
          backfaceVisibility: "hidden",
          border: "1px solid darkgrey",
          transform: yRotation.interpolate(
            (yRotation) => `rotateY(${yRotation}deg) translate3d(-75px, 0px, 0px)`
          ),
        }}
      >
        1
      </animated.div>
      <animated.div
        style={{
          zIndex: -100,
          top: 200,
          left: 250,
          width: "150px",
          height: "150px",
          position: "fixed",
          backgroundColor: "#F7F3E3",
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: "150px",
          fontSize: "5rem",
          borderRadius: "7px",
          backfaceVisibility: "hidden",
          border: "1px solid darkgrey",
          transform: yRotation.interpolate(
            (yRotation) => `translate3d(-75px, 0px, 0px)`
          ),
        }}
      >
        2
      </animated.div>
      <animated.div
        style={{
          top: 200,
          left: 100,
          zIndex: -100,
          width: "150px",
          height: "150px",
          position: "fixed",
          backgroundColor: "#F7F3E3",
          textAlign: "center",
          verticalAlign: "middle",
          lineHeight: "150px",
          fontSize: "5rem",
          borderRadius: "7px",
          border: "1px solid darkgrey",
          transform: yRotation.interpolate(
            (yRotation) => `rotateY(${180 + yRotation}deg) translate3d(75px, 0px, 0px)`
          ),
        }}
      >
        ?
      </animated.div>
    </div>
  )
}

export default App
