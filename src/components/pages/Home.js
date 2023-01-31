import React, { useState, useEffect } from "react";

import Header from "../UI/header";
import Form from "./components/form/form";
import List from "./components/list/list";

import { db } from "./components/firebase/firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });

      setTodoList(todosArr.reverse());
    });
    return () => unsubscribe;
  }, []);
  return (
    <>
      <Header />
      <div className="main-container">
        <Form />
        <List
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          todoList={todoList}
        />
      </div>
    </>
  );
};

export default Home;
