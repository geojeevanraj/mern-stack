import React from 'react'
import User from './components/User'

const App = () => {
  return (
    <>
      <User name="Geo" department="AIML"
      skills = {["HTML", "CSS", "JS"]} />
    </>
  )
}

export default App
