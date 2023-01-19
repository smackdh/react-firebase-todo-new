import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const addTaskHandler = () => {
    console.log("Test");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title"></label>
      <input
        id="title"
        type="text"
        onChange={titleChangeHandler}
        value={title}
      />
      <button onClick={addTaskHandler} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Form;
