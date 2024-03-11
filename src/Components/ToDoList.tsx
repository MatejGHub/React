import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, setTodos }: any) => {
  return (
    <ul className="ul-container">
      {todos.map((todo: any, index: any) => {
        return (
          <ToDoItem key={index} todo={todo} todos={todos} setTodos={setTodos} />
        );
      })}
    </ul>
  );
};

export default ToDoList;
