import React, { Component } from "react"
import s from "./app.component.css"
import { hot } from 'react-hot-loader'
class App extends Component {

  state = {
    count: 0
  }

  addCount = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  decrement = () => {
    this.setState(state => ({count: state.count - 1}))
  }
  
  render() {
    return (
      <div> 
        <h1 >Hello World </h1>
        <div>
         Count: {this.state.count}
        </div>
        <div>
          <button onClick={this.addCount}>+</button>
        </div>
      </div>
    )
  }
}
// const hotFunction = hot(module)
export default hot(module)(App)