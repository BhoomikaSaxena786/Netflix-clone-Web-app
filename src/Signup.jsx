import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Hardcoded user data to simulate a backend database
const predefinedUsers = [
  { email: "user1@example.com", password: "password123" },
  { email: "user2@example.com", password: "password456" },
  { email: "user3@example.com", password: "password789" },
];

const SignupPage = () => {
  const location = useLocation();
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    const userExists = predefinedUsers.some(user => user.email === email);
    if (userExists) {
      setErrorMessage("This email is already registered. Please sign in instead.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (password.length === 0 || confirmPassword.length === 0) {
      setErrorMessage("Please enter a password.");
      return;
    }
    
    setErrorMessage("");
    // On successful "signup", we can navigate to the home page.
    navigate("/home");
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/netflix-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
        <div className="bg-black bg-opacity-70 p-8 rounded-md w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
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
