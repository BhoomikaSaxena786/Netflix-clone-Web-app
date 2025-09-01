import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const SignupPage = () => {
  const location = useLocation();
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (password.length === 0 || confirmPassword.length === 0) {
      setErrorMessage("Please enter a password.");
      return;
    }
    
    setErrorMessage("");
    navigate("/home");
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/netflix-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex justify-between items-center px-6 py-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          className="w-28 md:w-36"
          alt="Netflix Logo"
        />
        <div className="flex items-center gap-2">
          <Link to="/signin">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white font-medium">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[80vh] px-4 text-white">
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm text-left">{errorMessage}</p>
            )}
            <button
              onClick={handleSignUp}
              className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Sign Up
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-red-600 hover:underline">
              Sign in now.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
