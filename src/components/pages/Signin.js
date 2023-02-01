import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";

const Signin = () => {
  const { googleSignIn = {} } = UserAuth();

  const googleSignInHandler = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <GoogleButton onClick={googleSignInHandler} />
    </div>
  );
};

export default Signin;
