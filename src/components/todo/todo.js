import React from 'react';


const Todo = ({key, todo}) => {
  return (
    <li>
        <h1>{todo.text}</h1>
    </li>
  );
};

export default Todo;
