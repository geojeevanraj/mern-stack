import React from 'react'

const State = () => {
    const [count, setCount] = React.useState(0);
  return (
    <div>
        <h1>useState example</h1>
        <p>Current count: {count}</p>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  )
}

export default State