import React from 'react'

const FuncComp = (props) => {
    const {courseName, duration} = props
  return (
    <div>
        <h2>FuncComp</h2>
        <h4>CourseName : {courseName} and duration is {duration}</h4>
    </div>
  )
}

export default FuncComp