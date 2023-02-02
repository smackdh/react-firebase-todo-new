import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const location = useLocation().pathname;
  const { logOut, user } = UserAuth();

  return (
    <div className="navbar">
      {!user ? (
        <Link to="/signin">Sign In</Link>
      ) : (
        <div>
          <Link to="/account">Account Page</Link>
          <Link onClick={logOut} to="/signin">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
