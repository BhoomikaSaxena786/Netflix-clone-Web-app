import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import SignIn from "./SignIn.jsx";
import Signup from "./Signup.jsx";
import HomePage from "./HomePage.jsx";
import ForgotPassword from './ForgotPassword';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}



