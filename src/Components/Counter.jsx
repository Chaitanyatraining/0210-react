import React, { Component } from 'react'
import FuncComp from '../FuncComp'

class Counter extends Component {

    constructor(){
        super()

        // creating the state within constructor
        // this.state = {
        //     count: 0,
        //     users: []
        // }
    }

    state = {
        count: 0
    }

    // never update the state directly

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <h1>count :{this.state.count}</h1>
        <button onClick={() => {this.handleIncrement()}}>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>

        <FuncComp count={this.state.count} increment={this.handleIncrement} />
      </div>
    )
  }
}

export default Counter