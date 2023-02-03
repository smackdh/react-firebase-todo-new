import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <>
      <li>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          name="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <label htmlFor="checkbox"></label>
        <h2
          className={todo.completed ? "task-completed" : ""}
          onClick={() => toggleComplete(todo)}
        >
          {todo.text}
        </h2>
        <button className="fantasy-button" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Todo;
