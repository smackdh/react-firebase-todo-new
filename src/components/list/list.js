import React from "react";
import Todo from "../todo/todo";

const list = (todoList) => {
  return (
    <ul>
    {todoList.map((todo, index) => {
      <Todo key={index} todo={todo}/>
    })}
    </ul>

  )
}
export default list;
