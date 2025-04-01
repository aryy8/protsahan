
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-48 -left-48 blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full -bottom-48 -right-48 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-32 mb-6 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.png" 
              alt="Protsahan Logo" 
              className="w-full h-full object-contain rounded-2xl animate-float"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in">
              Welcome to Protsahan - Empowering Dreams Through Education & Mentorship
            </h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Access scholarships, mentorship, resources, and crowdfunding opportunities all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <Link to="/scholarships">Find Scholarships</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-md text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <Link to="/mentorship">Get Mentorship</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/heroimg.jpg" 
                alt="Students learning" 
                className="w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

