import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { GoogleButton } from "react-google-button";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Signin = () => {
  // const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignInHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const gitHubSignInHandler = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
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
          <GoogleLoginButton onClick={googleSignInHandler} />
          <GithubLoginButton onClick={gitHubSignInHandler} />
        </div>
      ) : (
        navigate("/home")
      )}
    </div>
  );
};

export default Signin;
