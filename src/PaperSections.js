import React, { Fragment, useState } from "react"
import PaperSection from "./PaperSection"

function PaperSections() {
  const [currentSection, setCurrentSection] = useState(0)
  const [sections, setSections] = useState([1, 2, 3, 4, 5])

  function onClick(){
    console.log(currentSection)
    const nextSections = sections.slice()
    if (currentSection > 0) {
      nextSections[currentSection] = nextSections.slice(currentSection - 1, currentSection + 1).reduce((sum, cur) => sum + cur)
      setSections(nextSections)
    }
    setCurrentSection(prevCurrentSection => prevCurrentSection + 1)
  }

  const paperSections = sections.map((section, index) => {
    if (index < currentSection - 1) return null
    return <PaperSection
    left={100 + (index * 150)}
    top={100}
    size={150}
    mass={400}
    frontText={section}
    backText="?"
    currentSection={currentSection}
    section={index + 1}
  />
  })

  return (
    <Fragment>
      <button onClick={onClick}>YO</button>
      <div style={{ perspective: "1000px" }}>
        {paperSections.slice().reverse()}
      </div>
    </Fragment>
  )
}

export default PaperSections
