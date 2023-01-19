import React, { useState } from "react";

const Form = (todo) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const addTodoHandler = () => {
    console.log("Test");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Add a Todo</label>
      <input
        id="title"
        type="text"
        onChange={titleChangeHandler}
        value={title}
      />
      <button onClick={addTodoHandler} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Form;
