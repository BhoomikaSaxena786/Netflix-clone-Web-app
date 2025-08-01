import React from "react";

const SignIn = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/netflix-bg.jpg')", // Make sure this image exists in public/
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
        <div className="bg-black bg-opacity-70 p-8 rounded-md w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>

          <input
            type="text"
            placeholder="Email or mobile number"
            className="mb-4 w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">
            Sign In
          </button>

          <div className="flex justify-between items-center mt-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="mt-6 text-sm">
            New to Netflix?{" "}
            <a href="#" className="font-bold hover:underline">
              Sign up now.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


