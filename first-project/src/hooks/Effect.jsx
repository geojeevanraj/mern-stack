import React, { use } from 'react'
import { useEffect } from 'react';

const Effect = () => {
    const [count, setCount] = React.useState(0);
    // useEffect(() => {
    //     console.log("from UseEffect");
    // }, [count]);  // runs on every render when count changes
    useEffect(() => {
        console.log("component mounted");
        return () => {
            console.log("component unmounted");
        }
    }, []); // runs only once when component mounts
  return (
    <div>Effect
        <h1>Count</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  )
}

export default Effect