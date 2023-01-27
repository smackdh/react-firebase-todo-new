import React from "react";
import Todo from "../todo/todo";

const list = ({ toggleComplete, todoList }) => {
  return (
    <ul>
      {todoList.map((todo, index) => {
        return <Todo toggleComplete={toggleComplete} key={index} todo={todo} />;
      })}
    </ul>
  );
};
export default list;
