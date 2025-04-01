
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of students and professionals who have transformed their lives through Protsahan's programs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg">
            <Link to="/register">Create Account</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 text-lg">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
