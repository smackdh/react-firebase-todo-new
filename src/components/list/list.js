import React from "react";
import Todo from "../todo/todo";

const list = ({ toggleComplete, todoList, deleteTodo }) => {
  return (
    <ul>
      {todoList.map((todo, index) => {
        return (
          <Todo
            toggleComplete={toggleComplete}
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
export default list;
