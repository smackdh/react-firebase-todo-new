import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Signin = () => {
  // const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();

  const googleSignInHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container">
      <h1 className="text-shine">Start your journey here</h1>
      <h3>Choose your login option</h3>

      {!user ? (
        <div className="sign-in-options">
          {" "}
          <GoogleButton onClick={googleSignInHandler} />
        </div>
      ) : (
        navigate("/home")
      )}
    </div>
  );
};

export default Signin;
