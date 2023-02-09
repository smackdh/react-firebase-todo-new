import React, { useContext, createContext } from "react";
import { auth } from "../components/firebase/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleProvider);
  };

  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithRedirect(auth, githubProvider);
  };

  const logOut = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ googleSignIn, githubSignIn, logOut, user, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
