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
      {user?.displayName ? <h1>`Welcome {user.displayName}</h1> : ""}
      {user?.displayName ? (
        <button onClick={signOutHandler}>Logout</button>
      ) : (
        <h1>Please sign in</h1>
      )}
    </div>
  );
};

export default Account;
