
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Protsahan</h3>
            <p className="text-gray-300 mb-4">
              Empowering individuals through mentorship, scholarships, and education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400">About Us</Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-yellow-400">Mentorship</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-yellow-400">Resources</Link>
              </li>
              <li>
                <Link to="/crowdfunding" className="text-gray-300 hover:text-yellow-400">Crowdfunding</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/scholarships" className="text-gray-300 hover:text-yellow-400">Scholarships</Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-yellow-400">Mentorship</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-yellow-400">Free Resources</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-yellow-400">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" /> info@protsahan.org
              </p>
              <p className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" /> +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Protsahan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
