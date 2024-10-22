import React, { useEffect, useState } from 'react'

const UnmountingComp = () => {
    const [count, setCount] = useState(5)

    useEffect(() => {
        const timer = setInterval(()=>{
            setCount(prevsCount => prevsCount + 1)
        }, 1000)

        // cleanup function
        // unmounting phase

        return() => {
            console.log('unmounting executed')
            clearInterval(timer)
        }
    }, [])

  return (
    <div>
        <h2>UnmountingComp</h2>
        <h4>Count: {count}</h4>
    </div>
  )
}

export default UnmountingComp