import React, { useState, useEffect } from "react";
import { db } from "./components/firebase/firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Form from "./components/form/form";
import List from "./components/list/list";
import Footer from "./components/UI/footer";
import Header from "./components/UI/header";

// import List from "./components/list/list"
function App() {
  const [todoList, setTodoList] = useState([]);
  // const [input, setInput] = useState("");

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
      <Footer />
    </>
  );
}

export default App;

// https://medium.com/geekculture/ill-be-building-a-todo-app-with-one-of-the-most-popular-web-application-frameworks-react-and-75ffe4b32dc4

// 1. Import Task List
// 2. In Task List, Import Task
// 3. Give Form Props to Task
// 4. Add Task to List
// 5. Render List Under Form
// 6. Add push to Firebase
// 7. useEffect to render fireabse list
// 8. Add Remove Option
// 9. Add Check Option
// 10. Add Validation
// 12. Add Styling - PAPER Style? Black white yellow ish? Or Pixel Style?
