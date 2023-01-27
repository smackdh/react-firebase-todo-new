import React from "react";

const Todo = ({ key, todo }) => {
  return (
    <li>
      <h2>{todo.text}</h2>
    </li>
  );
};

export default Todo;
