import React, { Fragment, useState } from "react"
import PaperSection from "./PaperSection"
import DumbSection from "./DumbSection"

function PaperSections() {
  const [currentSection, setCurrentSection] = useState(0)
  return (
    <Fragment>
      <button onClick={() => setCurrentSection(prevCurrentSection => prevCurrentSection + 1)}>YO</button>
      <div style={{ perspective: "1000px" }}>
      <DumbSection
        left={175}
        top={100}
        size={150}
        displayText="2"
      />
      <DumbSection
        left={325}
        top={100}
        size={150}
        displayText="3"
      />
      <PaperSection
        left={100}
        top={100}
        mass={40}
        size={150}
        section={2}
        currentSection={currentSection}
        frontText="1"
        backText="?"
      />
      </div>
      
     
    </Fragment>
  )
}

export default PaperSections
