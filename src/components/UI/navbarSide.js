import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { RiAccountCircleFill, RiTaskLine } from "react-icons/ri";

const NavbarSide = () => {
  const location = useLocation().pathname;
  const { logOut, user } = UserAuth();

  return (
    <div className="navbarSide">
      {!user ? (
        <Link to="/signin">
          <BiLogIn />
          Sign In
        </Link>
      ) : (
        <div className="navbarSide-menu">
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
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarSide;
