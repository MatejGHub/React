import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ToDoInput from "./Components/ToDoInput";
import ToDoItem from "./Components/ToDoItem";
import { useState } from "react";

function App() {
  // useState to manage INPUT and TODOS
  const [todos, setTodos] = useState([] as string[]);

  return (
    <div className="App">
      <Header />
      <ToDoInput todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
