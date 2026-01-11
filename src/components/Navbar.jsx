import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex pb-2 justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Robotics Club NITP" className="h-18 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md font-medium transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md font-medium transition-colors duration-300">
                About Us
              </Link>
              <Link to="/projects" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md font-medium transition-colors duration-300">
                Our Projects
              </Link>
              <Link to="/events" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md font-medium transition-colors duration-300">
                Events
              </Link>
              <Link to="/team" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md font-medium transition-colors duration-300">
                Our Team
              </Link>
              <Link to="/achievements" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md font-medium transition-colors duration-300">
                Achievements
              </Link>
              <Link to="/news" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md font-medium transition-colors duration-300">
                News
              </Link>
              <Link to="/contacts" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md font-medium transition-colors duration-300">
                Contacts
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              <svg className="h-10 w-7 hover:cursor-pointer" fill="none" viewBox="0 0 26 26" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="text-center md:hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-opacity-95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4">
            <Link to="/" className="text-white border-black border-t-2 border-b-1 hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-white border-black border-b-1 hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/projects" className="text-white border-black border-b-1 hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Our Projects
            </Link>
            <Link to="/events" className="text-white border-black border-b-1  hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
            <Link to="/team" className="text-white border-black border-b-1 hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Our Team
            </Link>
            <Link to="/achievements" className="text-white border-black border-b-1 hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Achievements
            </Link>
            <Link to="/news" className="text-white border-black border-b-1 hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              News
            </Link>
            <Link to="/contacts" className="text-white border-black border-b-1 hover:text-cyan-400 block px-3 py-4 rounded-md text-base font-medium transition-colors duration-300" onClick={() => setMenuOpen(false)}>
              Contacts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;