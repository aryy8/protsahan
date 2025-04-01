
import { BookOpen, Users, Award, Gift } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    title: "Free Educational Resources",
    description: "Access a wide range of free e-books, videos, and courses to enhance your skills and knowledge."
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Mentorship Programs",
    description: "Connect with experienced mentors who can guide you through your educational and career journey."
  },
  {
    icon: <Award className="w-10 h-10 text-blue-600" />,
    title: "Scholarships",
    description: "Discover and apply for scholarships that match your profile, goals, and academic achievements."
  },
  {
    icon: <Gift className="w-10 h-10 text-blue-600" />,
    title: "Crowdfunding Opportunities",
    description: "Create or contribute to educational crowdfunding campaigns to support academic dreams."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Protsahan Helps You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support through various programs designed to empower your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
