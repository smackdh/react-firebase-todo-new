import React, { useState, useEffect } from "react";
import Todo from "../todo/todo";

const List = ({ toggleComplete, todoList, deleteTodo }) => {
  const [todosLeft, setTodosLeft] = useState(0);

  useEffect(() => {
    const todos = todoList.length;
    return setTodosLeft(todos);
  }, [todoList.length]);

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
