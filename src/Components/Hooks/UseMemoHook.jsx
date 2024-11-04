import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    // The UseMemo hook in react is used to optimise the performance of your
    // components by memoizing the result of expensive caluclations.
    // it allows you to cache the result of the function.
    
    const [Bool, setBool] = useState(false)
    const [amount, setAmount] = useState(1000)

    const expensiveFunction = () => {
        console.log('expensive funciton')
        const data = []
        for(let i = 0; i<=amount; i++){
            if(i%2 == 0){
                console.log(i)
                data.push(i)
            }
        }
        return data
    }

    const caluclationData = useMemo(()=> expensiveFunction(), [amount])
  
    return (
    <>
        <h2>UseMemoHook</h2>
        <h4>CurrentValue : {Bool ? 'true' : 'False'}</h4>
        <button className='btn btn-primary'
        onClick={()=>{setBool(prevstate => !prevstate)}}
        >Click change</button>
        <button className='btn btn-info'
        onClick={()=>{setAmount(prevstate => prevstate + 100)}}
        >Add Data</button>
        <div>
            {caluclationData && caluclationData.map((val) => (
                <p>{val}</p>
            ))}
        </div>
    </>
  )
}

export default UseMemoHook