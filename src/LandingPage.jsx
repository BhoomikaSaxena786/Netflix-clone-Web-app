import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
      // Redirect to the signup page and pass the email state
      navigate("/signup", { state: { email: email } });
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
        <div className="flex items-center gap-2">
          <select className="bg-black bg-opacity-60 border border-gray-500 px-2 py-1 rounded text-white">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <Link to="/signin">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white font-medium">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[80vh] px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
          Unlimited Movies, TV <br /> Shows and More.
        </h1>
        <p className="text-lg mt-4">Watch anywhere and cancel anytime.</p>
        <p className="mt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 w-full rounded bg-white text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleGetStarted}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold"
          >
            Get Started&gt;
          </button>
        </div>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LandingPage;
