// // src/components/Navbar.jsx
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="hidden md:flex gap-4 text-sm font-medium">
//       <a href="#home" className="hover:underline">
//         Home
//       </a>
//       <a href="#tvshows" className="hover:underline">
//         TV Shows
//       </a>
//       <a href="#movies" className="hover:underline">
//         Movies
//       </a>
//       <a href="#latest" className="hover:underline">
//         Latest
//       </a>
//       <a href="#mylist" className="hover:underline">
//         My List
//       </a>
//     </nav>
//   );
// };

// export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <ul className="flex space-x-4">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/signin">Sign In</Link></li>

//       </ul>
//     </nav>
//   );
// };

// export default Navbar; // ✅ IMPORTANT!


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <Link
  to="/signin"
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
  Sign In
</Link>
      </ul>
      
    </nav>
  );
};

export default Navbar;


