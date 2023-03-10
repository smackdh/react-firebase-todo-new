import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { RiAccountCircleFill, RiTaskLine } from "react-icons/ri";
import "./navbarSide.css";

const NavbarSide = ({ isShown }) => {
  const { logOut } = UserAuth();

  return (
    <nav className={`navbarSide ${isShown ? "" : "hidden"}`}>
      <div className="navbarSide-menu">
        <Link className="" to="/todos">
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
    </nav>
  );
};

export default NavbarSide;
