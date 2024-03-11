import React, { useEffect, useState } from "react";
import "./ToDoInput.css";
import Form from "./Form";
import ToDoList from "./ToDoList";

const ToDoInput = ({ todos, setTodos }: any) => {
  const [isFinished, setFinished] = useState(false);

  // useEffect to log the TODOS array in console
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // RETURN form and list of tasks
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default ToDoInput;
