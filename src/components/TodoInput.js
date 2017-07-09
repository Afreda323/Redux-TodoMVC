import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
class TodoInput extends Component {
  state = {
    text: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />
      </form>
    );
  }
}

export default connect(null, { addTodo })(TodoInput);
