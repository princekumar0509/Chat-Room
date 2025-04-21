import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <div className="mini-pixel-icon">
          <div className="mini-pixel"></div>
          <div className="mini-pixel"></div>
          <div className="mini-pixel"></div>
          <div className="mini-pixel"></div>
        </div>
        <h1>Pixy Chat</h1>
      </div>
      {user ? (
        <div className="user-info">
          <span className="welcome-user">Hello, {user.displayName || user.email.split('@')[0]}</span>
          <button onClick={signOut} className="sign-out" type="button">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={googleSignIn} className="sign-in" type="button">
          Sign In
        </button>
      )}
    </nav>
  );
};

export default NavBar;