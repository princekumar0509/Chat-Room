import React, { useState, useEffect } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { 
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check if user has logged in before
    const checkReturningUser = async () => {
      const lastLoginTime = localStorage.getItem('lastLoginTime');
      const lastLoginEmail = localStorage.getItem('lastLoginEmail');
      
      if (lastLoginTime && lastLoginEmail) {
        setIsReturningUser(true);
        setUserName(lastLoginEmail.split('@')[0]);
      }
    };
    
    checkReturningUser();
    
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('lastLoginTime', Date.now());
        localStorage.setItem('lastLoginEmail', user.email);
      }
    });
    
    return () => unsubscribe();
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      setError(error.message);
    });
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");
    
    try {
      if (isSignUp) {
        // Sign up with email
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccessMessage("Account created successfully! Welcome to Pixy Chat!");
      } else {
        // Sign in with email
        await signInWithEmailAndPassword(auth, email, password);
        const displayName = email.split('@')[0];
        setSuccessMessage(`Welcome back, ${displayName}!`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setError(null);
    setSuccessMessage("");
  };

  return (
    <main className="welcome-container">
      <div className="welcome-card">
        <div className="pixy-logo">
          <div className="pixel-icon">
            <div className="pixel p1"></div>
            <div className="pixel p2"></div>
            <div className="pixel p3"></div>
            <div className="pixel p4"></div>
          </div>
        </div>
        <h2 className="app-title">Pixy Chat</h2>
        
        {isReturningUser && !isSignUp ? (
          <p className="welcome-message">Welcome back, {userName}! We missed you!</p>
        ) : (
          <p className="app-tagline">
            {isSignUp 
              ? "Join our pixel-perfect chat community today!" 
              : "Connect and share in a colorful pixel world"}
          </p>
        )}
        
        {error && <div className="auth-error">{error}</div>}
        {successMessage && <div className="auth-success">{successMessage}</div>}
        
        <form onSubmit={handleEmailAuth} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="email-button">
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>
        
        <div className="auth-toggle">
          <p onClick={toggleAuthMode}>
            {isSignUp 
              ? "Already have an account? Sign In" 
              : "Don't have an account? Sign Up"}
          </p>
        </div>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <div className="google-sign-in">
          <button className="sign-in" onClick={googleSignIn} type="button">
            <img
              src={GoogleSignin}
              alt="sign in with google"
            />
          </button>
        </div>
        
        <div className="welcome-footer">
          <p>{isSignUp ? "Start your pixel journey today" : "Express yourself with Pixy Chat"}</p>
        </div>
      </div>
    </main>
  );
};

export default Welcome;