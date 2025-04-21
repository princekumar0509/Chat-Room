import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {user ? <ChatBox /> : <Welcome />}
    </div>
  );
}

export default App;