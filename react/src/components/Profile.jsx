import React from 'react'
import { userContext } from '../App'

// const Profile = (props) => { //object passing
const Profile = ({age,skills}) => { //destructure
  const name = useContext(userContext)
  return (
    <div>
        <h1>I am {name} {20}</h1>
        <ul>
            {skills.map((skill)=> (
               <li>{skill}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default Profile