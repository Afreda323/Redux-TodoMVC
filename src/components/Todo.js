import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    text: this.props.text
  };
  handleDC = () => {
    this.setState({ edit: true }, () => {
      this.nameInput.focus();
    });
  };
  handleSubmit = () => {
    this.props.onEdit(this.state.text);
    this.setState({ edit: false });
  };
  render() {
    const { completed, text, onCheck, handleDelete } = this.props;

    let className =
      completed === true
        ? "completed"
        : this.state.edit === true ? "editing" : "";
    const checked = completed ? true : "";

    return (
      <li className={className} onDoubleClick={this.handleDC}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onCheck}
            defaultChecked={checked}
          />
          <label>
            {text}
          </label>
          <button className="destroy" onClick={handleDelete} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="edit"
            value={this.state.text}
            onChange={e => this.setState({ text: e.target.value })}
            ref={input => {
              this.nameInput = input;
            }}
          />
        </form>
      </li>
    );
  }
}

export default Todo;
