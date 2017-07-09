import React, { Component } from "react";

const Footer = ({
  total,
  filterCompleted,
  filterActive,
  filterAll,
  clearCompleted,
  active
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{total}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a className={active === "" ? "selected" : ""} onClick={filterAll}>
            All
          </a>
        </li>
        <li>
          <a
            className={active === "active" ? "selected" : ""}
            onClick={filterActive}>
            Active
          </a>
        </li>
        <li>
          <a
            className={active === "completed" ? "selected" : ""}
            onClick={filterCompleted}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
