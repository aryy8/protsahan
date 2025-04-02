
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 w-full border-b">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">Protsahan</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link to="/mentorship" className="text-gray-700 hover:text-blue-600 transition-colors">
            Mentorship
          </Link>
          <Link 
            to="/crowdfunding" 
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1"
          >
            <span className="relative">
              Crowdfunding
              <span className="absolute -top-1 -right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
            </span>
          </Link>
          <Link to="/scholarships" className="text-gray-700 hover:text-blue-600 transition-colors">
            Scholarships
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-50"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
            <Button
              variant="default"
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                About Us
              </Link>
              <Link to="/mentorship" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Mentorship
              </Link>
              <Link 
                to="/crowdfunding" 
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors py-2 flex items-center gap-1" 
                onClick={toggleMenu}
              >
                <span className="relative">
                  Crowdfunding
                  <span className="absolute -top-1 -right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                  </span>
                </span>
              </Link>
              <Link to="/scholarships" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Scholarships
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Contact
              </Link>
              <div className="flex flex-col space-y-2">
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 w-full"
                  onClick={() => {
                    navigate('/login');
                    toggleMenu();
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="default"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white w-full"
                  onClick={() => {
                    navigate('/signup');
                    toggleMenu();
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
