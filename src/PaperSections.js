import React, { Fragment, useState } from "react"
import PaperSection from "./PaperSection"
import "./App.css"


function PaperSections({ sections, sectionSize }) {
  const [currentSection, setCurrentSection] = useState(0)
 
  const runningTotalLookup = sections.reduce((lookup, _, index) => {
    lookup[index] = sections.slice(0, index + 1).reduce((sum, curr) => sum + curr)
    return lookup
  }, {})

  function onClick(){
    if (currentSection < sections.length - 1) {
      setCurrentSection(prevCurrentSection => prevCurrentSection + 1)
    }
  }

  const paperSections = sections.map((section, index) => {
    if (index < currentSection - 1) return null
    return <PaperSection
      left={100 + (index * sectionSize)}
      top={100}
      size={sectionSize}  
      mass={5}
      frontText={currentSection === index + 1 ? runningTotalLookup[index] : section}
      backText={runningTotalLookup[index + 1]}
      currentSection={currentSection}
      section={index + 1}
      key={index}
  />
  })

  return (
    <Fragment>
      <div style={{ perspective: "1000px" }}>
        {paperSections.slice().reverse()}
      </div>
      <button onClick={onClick}>reduce (AKA left-fold)</button>
    </Fragment>
  )
}

export default PaperSections
