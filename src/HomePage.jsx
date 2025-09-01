import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogOut, Home, Search, Tv, Download, User } from "lucide-react";

// Movie data with updated image URLs
 const movies = [
   { id: 1, title: 'Padmavat', imageUrl: '/inception.jpg', tags: ['Sci-Fi', 'Thriller'], rating: '7.8', description: 'A mind-bending sci-fi thriller about a professional thief who steals secrets from the subconscious minds of his targets.', trailerUrl: 'https://www.youtube.com/watch?v=X_5_BLt76c0' },
   { id: 2, title: 'Kabil', imageUrl: '/stranger.jpg', tags: ['Sci-Fi', 'Horror', 'Mystery'], rating: '8.7', description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.', trailerUrl: 'https://www.youtube.com/watch?v=Pt3KKIWJmZ8' },
  { id: 3, title: 'Raees', imageUrl: '/moneyheist.jpg', tags: ['Crime', 'Thriller', 'Drama'], rating: '8.2', description: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in history.', trailerUrl: 'https://www.youtube.com/watch?v=J7_1MU3gDk0' },
   { id: 4, title: 'The Hit squad', imageUrl: '/img6.jpg', tags: ['Romance', 'Drama'], rating: '6.5', description: 'An action-packed thriller about an elite team of agents on a high-stakes mission to dismantle a global criminal organization.', trailerUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8' },
   { id: 5, title: 'Do patti', imageUrl: '/img4.jpg', tags: ['Action'], rating: '5.9', description: 'A fast-paced action movie with intense stunts and a gripping storyline about a lone hero seeking justice.', trailerUrl: 'https://www.youtube.com/watch?v=b6Z_RYC8IAQ' },
   { id: 6, title: 'Love per suqare foot', imageUrl: '/img5.jpg', tags: ['Comedy'], rating: '7.0', description: 'A hilarious romantic comedy about two young professionals who decide to get married to buy an apartment together.', trailerUrl: 'https://www.youtube.com/watch?v=2I_eypETmKo' },
   { id: 7, title: 'Sword of destiny', imageUrl: '/img2.webp', tags: ['Fantasy'], rating: '7.3', description: 'A fantasy epic following a legendary warrior on a quest to retrieve a powerful sword and save his kingdom from a dark force.', trailerUrl: 'https://www.youtube.com/watch?v=WdhvxJZDqzU' },
   { id: 8, title: 'Tiger-3', imageUrl: '/hero.jpg', tags: ['Sci-Fi'], rating: '8.0', description: 'A futuristic sci-fi action film where a rogue agent must prevent a catastrophic event that threatens the entire planet.', trailerUrl: 'https://www.youtube.com/watch?v=vEjTUDjjU6A' },
 ];
const MovieCard = ({ movie, onClick }) => (
  <div
    className="flex-shrink-0 w-48 h-64 rounded-md overflow-hidden transform hover:scale-105 transition-transform duration-200 cursor-pointer"
    onClick={() => onClick(movie)}
  >
    <img src={movie.imageUrl} alt="Movie Poster" className="w-full h-full object-cover" />
  </div>
);

const MoviePopup = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-6 relative flex flex-col md:flex-row shadow-lg transform scale-95 md:scale-100 transition-transform duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>

        {/* Image and Details Container */}
        <div className="flex-shrink-0 w-full md:w-1/2 rounded-md overflow-hidden mb-4 md:mb-0">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:ml-6 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-500 text-black px-2 py-0.5 rounded-sm font-bold">
              IMDb
            </span>
            <span className="text-lg">{movie.rating}/10</span>
          </div>
          <p className="text-gray-300 mb-6">{movie.description}</p>
          <a
            href={movie.trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold text-center hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </svg>
            Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joined: 'January 2023',
    initials: 'JD'
  };

  const [activeView, setActiveView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [userProfile, setUserProfile] = useState(defaultUser);
  const [selectedMovie, setSelectedMovie] = useState(null); // New state for the pop-up

  useEffect(() => {
    if (location.state?.user) {
      setUserProfile(location.state.user);
    }
  }, [location.state?.user]);

  const handleSignOut = () => {
    setUserProfile(null);
    navigate("/");
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const getInitials = (name) => {
    if (!name) return 'JD';
    const nameParts = name.split(' ');
    if (nameParts.length > 1) {
      return `${nameParts[0].charAt(0)}${nameParts[1].charAt(0)}`.toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase();
  };

  const featuredMovie = movies.find(movie => movie.title === 'The Hit squad');

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <>
            {/* Featured Section */}
            <div
              className="relative h-[60vh] flex items-end p-8"
              style={{
                backgroundImage: `url(${featuredMovie.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
              <div className="relative z-10 text-white max-w-lg">
                <p className="text-red-600 font-bold mb-2">FEATURED MOVIE</p>
                <h2 className="text-5xl font-bold mb-2 leading-tight">{featuredMovie.title}</h2>
                <p className="text-xl mb-4">{featuredMovie.description}</p>
                <div className="flex items-center gap-4 text-gray-300 text-sm mb-4">
                  <span className="bg-yellow-500 text-black px-2 py-0.5 rounded-sm font-bold">IMDb</span>
                  <span>{featuredMovie.rating}/10</span>
                  <span>2023 Action</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href={featuredMovie.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                    Play
                  </a>
                  <a
                    href={featuredMovie.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                    Watch Trailer
                  </a>
                </div>
              </div>
            </div>

            {/* Movie Rows */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">New this week</h3>
              <div className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />)}
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-8">Trending Now</h3>
              <div className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />)}
              </div>
            </div>
          </>
        );

      case 'search':
        return (
          <div className="p-8">
            <div className="relative w-full max-w-xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search for a movie, series, or genre..."
                className="w-full p-4 pl-12 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {filteredMovies.length > 0 ? (
                filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />)
              ) : (
                <p className="text-gray-400 text-center col-span-full">No results found.</p>
              )}
            </div>
          </div>
        );

      case 'coming-soon':
        return (
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-[80vh]">
            <svg className="w-24 h-24 mb-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16H9v-2h2v2zm0-4H9V6h2v8zm4 4h-2v-2h2v2zm0-4h-2V6h2v8z"></path></svg>
            <h3 className="text-3xl font-bold text-white mb-2 text-center">Coming Soon</h3>
            <p className="text-gray-400">Stay tuned for exciting new movies and shows!</p>
          </div>
        );

      case 'downloads':
        return (
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-[80vh]">
            <svg className="w-24 h-24 mb-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
            <h3 className="text-3xl font-bold text-white mb-2">Downloads</h3>
            <p className="text-gray-400">You have no downloaded movies or shows yet.</p>
          </div>
        );
      
      case 'my-netflix':
        const watchHistory = [

          { id: 1, title: 'Inception', imageUrl: '/inception.jpg', progress: '80%' },
          { id: 3, title: 'Money Heist', imageUrl: '/moneyheist.jpg', progress: '100%' },];
        const mylist = [{ id: 2, title: 'Stranger Things', imageUrl: '/stranger.jpg' }, { id: 4, title: 'Aadha Ishq', imageUrl: '/img6.jpg' },];

        return (
          <div className="p-8">
            <h2 className="text-4xl font-bold mb-8">My Netflix</h2>

            {/* Profile Section */}
            <div className="bg-gray-900 rounded-lg p-6 flex items-center mb-10">
              <div className="w-24 h-24 rounded-full mr-6 border-2 border-red-600 bg-gray-700 flex items-center justify-center text-4xl font-bold">
                {userProfile?.initials || getInitials(userProfile?.name)}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{userProfile?.name || 'Guest'}</h3>
                <p className="text-gray-400 text-sm">Member since {userProfile?.joined || 'N/A'}</p>
                <p className="text-gray-400 text-sm">{userProfile?.email || 'N/A'}</p>
              </div>
            </div>

            {/* Watch History Section */}
            <h3 className="text-2xl font-bold mb-4 mt-8">Watch History</h3>
            <div className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4">
              {watchHistory.length > 0 ? (
                watchHistory.map(movie => (
                  <div key={movie.id} className="relative w-48 flex-shrink-0">
                    <MovieCard movie={movie} onClick={setSelectedMovie} />
                    {movie.progress === '100%' ? (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">Watched</div>
                    ) : (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">{movie.progress} Complete</div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-400">You haven't watched anything yet.</p>
              )}
            </div>

            {/* My List Section */}
            <h3 className="text-2xl font-bold mb-4 mt-8">My List</h3>
            <div className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-4">
              {mylist.length > 0 ? (
                mylist.map(movie => <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />)
              ) : (
                <p className="text-gray-400">Your list is empty. Add some movies!</p>
              )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 bg-black flex flex-col items-center py-6 border-r border-gray-800 z-50">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="w-10 mb-8"
        />
        <ul className="flex flex-col gap-6">
          <li>
            <a href="#" className={`flex flex-col items-center transition-colors duration-200 ${activeView === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveView('home')}>
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className={`flex flex-col items-center transition-colors duration-200 ${activeView === 'search' ? 'text-white' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveView('search')}>
              <Search className="w-6 h-6" />
              <span className="text-xs mt-1">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className={`flex flex-col items-center transition-colors duration-200 ${activeView === 'coming-soon' ? 'text-white' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveView('coming-soon')}>
              <Tv className="w-6 h-6" />
              <span className="text-xs mt-1 text-center">Coming Soon</span>
            </a>
          </li>
          <li>
            <a href="#" className={`flex flex-col items-center transition-colors duration-200 ${activeView === 'downloads' ? 'text-white' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveView('downloads')}>
              <Download className="w-6 h-6" />
              <span className="text-xs mt-1">Downloads</span>
            </a>
          </li>
          {userProfile && (
            <li>
              <a href="#" className={`flex flex-col items-center transition-colors duration-200 ${activeView === 'my-netflix' ? 'text-white' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveView('my-netflix')}>
                <User className="w-6 h-6" />
                <span className="text-xs mt-1">My Netflix</span>
              </a>
            </li>
          )}
          <li>
            {userProfile ? (
              <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-200 mt-auto" onClick={handleSignOut}>
                <LogOut className="w-6 h-6" />
                <span className="text-xs mt-1">Sign Out</span>
              </a>
            ) : (
              <Link to="/signin" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-200 mt-auto">
                <User className="w-6 h-6" />
                <span className="text-xs mt-1">Sign In</span>
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow ml-20 h-screen overflow-y-scroll">
        {renderContent()}
      </div>

      {/* Conditional Pop-up Rendering */}
      {selectedMovie && <MoviePopup movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
};

export default HomePage;