import React from "react";
import "./Footer.css";

const Footer = ({ todos = [] }: any) => {
  let totalTodos = todos.length;

  return (
    <footer className="footer">
      <div className="todos-left">
        Total Todos: <span>{totalTodos}</span>
      </div>
    </footer>
  );
};

export default Footer;
