import React, { Component } from "react";
import Header from "./Header";
import TodoWrap from "./TodoWrap";
import Footer from "./Footer";
import * as actions from "../actions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    filter: null,
    active: ""
  };
  filter = () => {
    switch (this.state.filter) {
      case "completed":
        return this.props.todos.filter(todo => todo.completed === true);
      case "active":
        return this.props.todos.filter(todo => todo.completed === false);
      default:
        return this.props.todos;
    }
  };
  renderTotal = () => {
    return this.props.todos.filter(todo => todo.completed === false).length;
  };
  handleCheck = id => {
    this.props.check(id);
  };
  handleDelete = id => {
    this.props.deleteTodo(id);
  };
  handleEdit = (text, id) => {
    this.props.editTodo(text, id);
  };
  render() {
    let todos = this.filter();
    return (
      <div>
        <section className="todoapp">
          <Header />
          <TodoWrap
            todos={todos}
            handleCheck={this.handleCheck}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
          <Footer
            total={this.renderTotal()}
            active={this.state.active}
            filterAll={() => this.setState({ filter: null, active: "" })}
            filterActive={() =>
              this.setState({ filter: "active", active: "active" })}
            filterCompleted={() =>
              this.setState({ filter: "completed", active: "completed" })}
            clearCompleted={this.props.clearCompleted}
          />
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>
            Created by <a href="http://antfreda.com">Anthony Freda</a>
          </p>
          <p>
            Part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}
export default connect(mapStateToProps, actions)(App);
