import React, { useState, useEffect } from "react";
import Todo from "../todo/todo";
import "./list.css";

const List = ({ toggleComplete, todoList, deleteTodo }) => {
  const [todosLeft, setTodosLeft] = useState(0);
  const incompleteTodos = [];

  useEffect(() => {
    todoList.forEach((todo) => {
      if (todo.completed !== true) {
        incompleteTodos.push(todo);
      } else {
        return;
      }
    });
    return setTodosLeft(incompleteTodos.length);
  }, [incompleteTodos]);

  return (
    <>
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
      <p>
        {todosLeft !== 0
          ? `You have ${todosLeft} todos left!`
          : `Nothing to do here`}
      </p>
    </>
  );
};
export default List;
