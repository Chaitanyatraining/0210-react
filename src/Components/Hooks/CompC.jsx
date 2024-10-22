import React, { useContext } from 'react'
import { userContext } from './UseContextHook'

const CompC = () => {
    const userData = useContext(userContext)

  return (
    <div>
        <h4>CompC {userData.name}</h4>
    </div>
  )
}

export default CompC