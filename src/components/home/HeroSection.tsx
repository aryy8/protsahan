
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Empowering Dreams Through Education & Mentorship
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Access scholarships, mentorship, resources, and crowdfunding opportunities all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md text-lg">
                <Link to="/scholarships">Find Scholarships</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-md text-lg">
                <Link to="/mentorship">Get Mentorship</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Students learning" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
