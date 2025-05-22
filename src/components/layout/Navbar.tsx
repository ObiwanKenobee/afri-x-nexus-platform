
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
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-afrix-blue">AFRI-X</span>
              <span className="ml-1 text-afrix-orange font-bold">Platform</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-afrix-blue hover:text-afrix-orange transition-colors">Home</Link>
            <Link to="/#programs" className="px-3 py-2 text-afrix-blue hover:text-afrix-orange transition-colors">Programs</Link>
            <Link to="/#success-stories" className="px-3 py-2 text-afrix-blue hover:text-afrix-orange transition-colors">Success Stories</Link>
            <Link to="/about" className="px-3 py-2 text-afrix-blue hover:text-afrix-orange transition-colors">About</Link>
            <Link to="/login">
              <Button variant="outline" className="ml-4">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-afrix-blue hover:bg-afrix-blue/90">Join Now</Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-afrix-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-afrix-blue"
              onClick={toggleMenu}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-afrix-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#programs" 
              className="block px-3 py-2 rounded-md text-base font-medium text-afrix-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/#success-stories" 
              className="block px-3 py-2 rounded-md text-base font-medium text-afrix-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-afrix-blue hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-afrix-blue hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white bg-afrix-blue hover:bg-afrix-blue/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
