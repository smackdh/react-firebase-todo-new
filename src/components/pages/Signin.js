import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn = {}, user } = UserAuth();
  const navigate = useNavigate();

  const googleSignInHandler = async () => {
    try {
      await googleSignIn();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div>
      <h1>Sign in</h1>
      <GoogleButton onClick={googleSignInHandler} />
    </div>
  );
};

export default Signin;
