import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { RiAccountCircleFill, RiTaskLine } from "react-icons/ri";

const Navbar = ({ isShown, setIsShown }) => {
  // const [isShown, setIsShown] = useState(false);
  const { logOut, user } = UserAuth();

  const toggleArmory = () => {
    setIsShown(!isShown);
    console.log(isShown);
  };

  return (
    <div className="navbar">
      {!user ? (
        <Link to="/signin">
          <BiLogIn />
          Sign In
        </Link>
      ) : (
        <div className="navbar-menu">
          <button className="armory-toggle" onClick={toggleArmory}>
            <RiTaskLine />
            {`${isShown}`}
          </button>
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

export default Navbar;
