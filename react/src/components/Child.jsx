import React from 'react'

const Child = ({send}) => {
  return (
    <button onClick={()=>send("hello from child")}>
        send data
    </button>
  )
}

export default Child