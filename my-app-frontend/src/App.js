import React, { useEffect } from "react";
import "./App.css";

function App() {

  /* Fetches the data from the backend and logging it to the console. */
  useEffect(() => {
    fetch("http://localhost:9292/todos")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  function handleAddTodo(e) {
    e.preventDefault();
  }

  /* Sends a DELETE request to the server, which deletes the todo with the given id */
  function handleDeleteTodo() {
    fetch(`http://localhost:9292/todos/${id}`, {
      method: "DELETE",
    });
  }

  /* Sends a PATCH request to the server, which updates the todo with the given id */
  function handleUpdateTodo(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/todos/${id}`, {
      method: "PATCH",
    })
  }

  return (
    <div>
      <h1>Todo List</h1>
    </div>
  );
}

export default App;
