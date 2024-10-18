import React, {useState} from 'react'

const UseStateConter = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    const handleIncrement = () => {
        setCount(count + 1)
    }


    // Rules of Hooks 
    // - always keep hooks at top level
    // - dont write hooks inside conditions, loops, functions
    

  return (
    <>
        <h2>UseStateConter</h2>
        <h3>Count: {count}</h3>
        <button className='btn btn-primary me-2'
        onClick={handleIncrement}
        >Increment</button>
        <button className='btn btn-danger'>Decrement</button>
    </>
  )
}

export default UseStateConter