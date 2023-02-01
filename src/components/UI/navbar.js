import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const Navbar = () => {
  const { user, logOut } = UserAuth();

  const signOutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user?.displayName ? (
        <button onClick={signOutHandler}>Logout</button>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;
