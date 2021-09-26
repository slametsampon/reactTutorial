import React, { Component } from "react"

class InputTodo extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add todo..."
          name="title"
        />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo;