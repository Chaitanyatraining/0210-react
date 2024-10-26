import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    const data = useRef()
    const timerRef = useRef(null)
    const intervalRef = useRef(null)

    const startTimer = () => {
        let seconds = 0;

        intervalRef.current = setInterval(()=>{
            seconds++
            timerRef.current.textContent = `Timer: ${seconds} seconds`
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(data.current.value)
    // }

    // useEffect(() => {
    //     data.current.focus()
    // }, [])

    return (
        <div>
            <p ref={timerRef}>Timer: 0 seconds</p>
            <button className='btn btn-primary' onClick={startTimer}>Start</button>
            <button className='btn btn-danger' onClick={stopTimer}>Stop</button>
            {/* 
            useState will re-render when the content change and update the UI.

        useref - it doesn't notify when its content changes. Mutating the 
        (.current) property doesn't cause a re-render.
        */}

            <h2>UseRefHook</h2>
            {/* <form>
                <input type="text" ref={data} />
                <button className='btn btn-primary'
                onClick={(e)=>{handleSubmit(e)}}
                >Submit</button>
            </form> */}
        </div>
    )
}

export default UseRefHook