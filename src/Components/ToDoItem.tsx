import React from "react";
import "./ToDoItem.css";
import "./ToDoList.css";
import XImage from "../Images/X.png";
import { useState } from "react";

const ToDoItem = ({ todo, todos, setTodos }: any) => {
  // useState to manage the state of the task(unfinished/finished)
  const [isFinished, setFinished] = useState(false);
  const finishTask = () => {
    setFinished(!isFinished);
  };

  let sortedTodos = todos.slice().sort((a: any, b: any) => {
    return Number(a.isFinished) - Number(b.isFinished);
  });

  //Function to delete a task
  const deleteTask = (todo: any) => {
    if (isFinished === true) {
      setTodos(
        todos.filter((todoItem: any) => {
          return todoItem !== todo;
        })
      );
    } else if (isFinished === false) {
      alert("You have to finish the task first!");
    }
  };

  return (
    <li
      onClick={finishTask}
      className={`li-element ${isFinished ? "finished" : ""}`}
    >
      {todo}
      <button onClick={() => deleteTask(todo)} className="x-delete-btn">
        <img className="x-img" src={XImage} alt="X-Img" />
      </button>
    </li>
  );
};

export default ToDoItem;
