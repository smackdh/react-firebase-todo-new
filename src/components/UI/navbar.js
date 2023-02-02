import { Link, Navigate } from "react-router-dom";
// import { auth } from "../firebase/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navStyle = {
    height: "50px",
    padding: "16px",
    borderBottom: "2px solid black",
  };

  return (
    <div style={navStyle}>
      <Link to="/account">Account Page</Link>
    </div>
  );
};

export default Navbar;
