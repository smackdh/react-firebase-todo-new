import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
// import { UserAuth } from "../../context/AuthContext";
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
      <h3>Choose your login option</h3>
      <div>
        {!user ? (
          <GoogleButton onClick={googleSignInHandler} />
        ) : (
          navigate("/home")
        )}
      </div>
    </div>
  );
};

export default Signin;
