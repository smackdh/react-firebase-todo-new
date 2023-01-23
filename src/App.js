import React, { useState, useEffect } from 'react'
import database from "./components/firebase/firebase";
import {ref} from "firebase/database"
import Form from "./components/form/form";

function App() {
  const [todoList, setTodoList] = useState("")

  useEffect(() => {
    const todoRef = ref(database,'items');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      console.log(todos);
    })

  }, [todoList])



  return (
    <div>
      <Form />
    </div>
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
