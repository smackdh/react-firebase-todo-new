import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

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
        <h1>Welcome, {user.displayName.split(" ")[0]}</h1>
      ) : (
        ""
      )}
      {user?.displayName ? (
        <button className="fantasy-button" onClick={signOutHandler}>
          Logout
        </button>
      ) : (
        navigate("/signin")
      )}
    </div>
  );
};

export default Account;
