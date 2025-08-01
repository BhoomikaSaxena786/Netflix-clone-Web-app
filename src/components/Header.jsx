// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navigation from "./Navbar";

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <header className="relative z-10 flex justify-between items-center px-4 sm:px-8 py-4">
//       <div className="flex items-center gap-6">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
//           alt="Netflix Logo"
//           className="w-24 sm:w-32 cursor-pointer"
//           onClick={() => navigate("/")}
//         />
//         <Navigation />
//       </div>

//       <div className="flex items-center gap-2">
//         <select className="bg-black bg-opacity-60 border border-gray-500 px-2 py-1 rounded text-white text-sm">
//           <option>English</option>
//           <option>Hindi</option>
//         </select>
//         <button
//           onClick={() => navigate("/signin")}
//           className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white text-sm font-medium"
//         >
//           Sign In
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="relative z-10 flex justify-between items-center px-4 sm:px-8 py-4">
      <div className="flex items-center gap-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="w-24 sm:w-32 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <Navigation />
      </div>

      <div className="flex items-center gap-2">
        <select className="bg-black bg-opacity-60 border border-gray-500 px-2 py-1 rounded text-white text-sm">
          <option>English</option>
          <option>Hindi</option>
        </select>

      </div>
    </header>
  );
};

export default Header;
