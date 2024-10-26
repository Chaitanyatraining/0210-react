import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (currentState, action) => {
        console.log(action)
        switch(action.type){
            case "INCREMENT":
                return currentState + action.payload
            case "DECREMENT":
                return currentState - action.payload
            default: 
            return currentState
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)
    
    // dispatch => action => reducer => state

  return (
    <div>
        <h2>UseReducer</h2>
        <h4>Count: {count}</h4>
        <button onClick={() => {dispatch({type:'INCREMENT', payload:10})}} className='btn btn-primary me-2'>Increment</button>
        <button onClick={() => {dispatch('DECREMENT')}} className='btn btn-danger me-2'>Decrement</button>
    </div>

  )
}

export default UseReducer