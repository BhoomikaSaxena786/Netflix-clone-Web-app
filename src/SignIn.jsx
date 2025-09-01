import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Hardcoded user data to simulate a backend database
const predefinedUsers = [
  { email: "user1@example.com", password: "password123", name: "Alice", initials: "A" },
  { email: "user2@example.com", password: "password456", name: "Bob", initials: "B" },
  { email: "user3@example.com", password: "password789", name: "Charlie", initials: "C" },
  { email: "bhoomika@example.com", password: "123456", name: "Bhoomika", initials: "B" }
];

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Find the user in our hardcoded list
    const user = predefinedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setErrorMessage("");
      // On successful sign-in, navigate to the home page and pass user data
      navigate("/home", { state: { user } });
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
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
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[80vh] px-4 text-white">
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
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
            {errorMessage && (
              <p className="text-red-500 text-sm text-left">{errorMessage}</p>
            )}
            <button
              onClick={handleSignIn}
              className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

