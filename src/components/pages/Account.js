import { UserAuth } from "../../context/AuthContext";
const Account = () => {
  const { logOut, user } = UserAuth();

  const signOutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome, {user?.displayName}</h1>
      <button onClick={signOutHandler}>Logout</button>
    </div>
  );
};

export default Account;
