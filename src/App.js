import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { useEffect, useState } from "react";
import Protected from "./components/Protected";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("Auth-Token");
    if (token) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

export default App;
