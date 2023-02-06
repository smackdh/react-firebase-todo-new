import { Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar";
import Footer from "./components/UI/footer";
import Account from "./components/pages/Account";
import Signin from "./components/pages/Signin";
import Home from "./components/pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import NavbarSide from "./components/UI/navbarSide";

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="wrapper">
          <Navbar />
          <div className="mid-wrapper">
            <NavbarSide />
            <Routes>
              <Route
                path="/home"
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
          </div>
          <Footer />
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
