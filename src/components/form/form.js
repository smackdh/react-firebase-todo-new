import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <label HtmlFor="title"></label>
      <input
        id="title"
        type="text"
        onChange={titleChangeHandler}
        value={title}
      />
      <button type="submit"></button>
    </form>
  );
};

export default Form;
