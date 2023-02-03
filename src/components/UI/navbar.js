import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { RiAccountCircleFill, RiTaskLine } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation().pathname;
  const { logOut, user } = UserAuth();

  return (
    <div className="navbar">
      {!user ? (
        <Link to="/signin">
          <BiLogIn />
          Sign In
        </Link>
      ) : (
        <div className="navbar-menu">
          <Link className="todos-link" to="/home">
            <RiTaskLine />
            Todos
          </Link>
          <Link to="/account">
            <RiAccountCircleFill />
            Account Page
          </Link>
          <Link onClick={logOut} to="/signin">
            <BiLogOut />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
