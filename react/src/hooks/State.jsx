import React from 'react'
import { useState } from 'react'

const State = () => { 
    const [count, setCount] = useState(0)
    const [like, likeCount] = useState(0)
  return (
    <>
    <div>
        <h3>UseState Example</h3>
        <h2>count: {count}</h2>
        <button onClick = {()=>setCount(count+1)} >Increment</button>
    </div>
        <div>
            <h3>Like Unlike</h3>
            <h3>Like : {like} </h3>
            <button onClick={() => likeCount(like+1)}>👍</button>
            <button onClick={() => likeCount(like-1)}>👎</button>
        </div>
    </>
    )  

}

export default State