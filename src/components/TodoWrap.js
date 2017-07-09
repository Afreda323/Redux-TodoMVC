import React, { Component } from "react";
import Todo from "./Todo";
class TodoWrap extends Component {
  render() {
    const todos = this.props.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onCheck={() => this.props.handleCheck(todo.id)}
          handleDelete={() => this.props.handleDelete(todo.id)}
          onEdit={(text) => this.props.handleEdit(text, todo.id)}
        />
      );
    });
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos}
        </ul>
      </section>
    );
  }
}

export default TodoWrap;
