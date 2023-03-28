import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { useEffect, useState } from "react";
import Protected from "./components/Protected";
import CommentorList from "./screens/CommentList";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  // useEffect(() => {
  //   const token = localStorage.getItem("Auth-Token");
  //   if (token) {
  //     setIsSignedIn(false);
  //   }
  // }, []);
  //   <Route
  //   path="/dashboard"
  //   element={
  //     <Protected isSignedIn={isSignedIn}>
  //       <Dashboard />
  //     </Protected>
  //   }
  // />
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/commentorlist" element={<CommentorList />} />
      </Routes>
    </>
  );
}

export default App;
