import React from 'react'

// const Profile = (props) => { //object passing
const Profile = ({name,age,skills}) => { //destructure

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