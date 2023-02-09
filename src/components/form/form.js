import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import "./form.css";

const Form = () => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid input");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        id="input"
        type="text"
        onChange={inputChangeHandler}
        value={input}
      />
      <button className="fantasy-button" onClick={createTodo} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Form;
