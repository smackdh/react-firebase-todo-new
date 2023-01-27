import React from "react";

const Todo = ({ todo, toggleComplete }) => {
  return (
    <li>
      <input
        onChange={() => toggleComplete(todo)}
        type="checkbox"
        checked={todo.completed ? "checked" : ""}
      />
      <h2 onClick={() => toggleComplete(todo)}>{todo.text}</h2>
    </li>
  );
};

export default Todo;
