import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    console.log("Button clicked! Navigating to /signin");
    navigate("/signin");
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/netflix-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <Header />

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
          Unlimited Movies, TV Shows, and More.
        </h1>
        <p className="text-base sm:text-lg mt-4">Watch anywhere. Cancel anytime.</p>
        <p className="text-sm sm:text-base mt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 w-full rounded bg-white text-black"
          />
          <button
            onClick={handleGetStarted}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold w-full sm:w-auto"
          >
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;




