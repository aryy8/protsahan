
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">
            Resources
          </Link>
          <Link to="/crowdfunding" className="text-gray-700 hover:text-blue-600 transition-colors">
            Crowdfunding
          </Link>
          <Link to="/scholarships" className="text-gray-700 hover:text-blue-600 transition-colors">
            Scholarships
          </Link>
          <Link to="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors">
            Success Stories
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Sign In
          </Button>
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
              <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Resources
              </Link>
              <Link to="/crowdfunding" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Crowdfunding
              </Link>
              <Link to="/scholarships" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Scholarships
              </Link>
              <Link to="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Success Stories
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
                Contact
              </Link>
              <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600 text-white w-full mt-2">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
