import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar";
import Footer from "./components/UI/footer";
import Account from "./components/pages/Account";
import Signin from "./components/pages/Signin";
import Home from "./components/pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
        <Footer />
      </AuthContextProvider>
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
