import React from "react";
import { useState } from "react";

const Form = ({ todos, setTodos }: { todos: any[]; setTodos: any }) => {
  const [input, setInput] = useState("");
  // handleSubmit function ADD NEW TASK to TODOS array
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input === "") {
      return;
    } else {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  return (
    <form className="todoinput-container" onSubmit={handleSubmit}>
      <input
        className="todoinput-input"
        placeholder="Add a task..."
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="todoinput-button">
        Add
      </button>
    </form>
  );
};

export default Form;
