import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to = '/state'>useState</Link>
        </li>
      </ul>
      {/* <User name="Geo" department="AIML" skills={["HTML", "CSS", "JS"]} /> */}
    </div>
  )
}

export default Home