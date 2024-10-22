import React, { useContext } from 'react'
import CompB from './CompB'
import { userContext } from './UseContextHook'

const CompA = () => {

  return (
    <div>
        <h2>CompA</h2>
        <CompB  />
    </div>
  )
}

export default CompA