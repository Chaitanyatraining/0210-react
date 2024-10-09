import React, { Component } from 'react'

class ClassComp extends Component {
    constructor(props){
        super(props)
    }

  render() {
    console.log(this.props)

    return (
      <div>
        <h2>ClassComp</h2>
        <h4>CourseName : {this.props.courseName} and duration is {this.props.duration}</h4>
      </div>
    )
  }
}

export default ClassComp