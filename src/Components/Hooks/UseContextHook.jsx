import React from 'react'
import CompA from './CompA'

export const userContext = React.createContext()

const UseContextHook = () => {
    // we need to create a context
    // provider which provides the data
    // consumer which receives
  
    return (
        <div>
            <h2>UseContextHook</h2>
            <userContext.Provider value={{name:'chaitanya'}}>
                <CompA />
            </userContext.Provider>
        </div>
    )
}

export default UseContextHook