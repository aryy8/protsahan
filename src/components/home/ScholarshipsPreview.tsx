
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarClock } from "lucide-react";

const scholarships = [
  {
    id: 1,
    title: "National Merit Scholarship",
    provider: "National Education Foundation",
    amount: "₹50,000",
    deadline: "October 15, 2023",
    category: "Merit-based"
  },
  {
    id: 2,
    title: "Women in STEM Scholarship",
    provider: "Tech Innovators Association",
    amount: "₹75,000",
    deadline: "September 30, 2023",
    category: "Field-specific"
  },
  {
    id: 3,
    title: "Rural Education Initiative",
    provider: "Community Development Trust",
    amount: "₹40,000",
    deadline: "November 20, 2023",
    category: "Need-based"
  }
];

const ScholarshipsPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Scholarships</h2>
            <p className="text-xl text-gray-600">
              Discover opportunities to fund your education
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700">
            <Link to="/scholarships">View All Scholarships</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship) => (
            <div 
              key={scholarship.id} 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{scholarship.title}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {scholarship.category}
                </span>
              </div>
              <p className="text-gray-600 mb-2">Provider: {scholarship.provider}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">{scholarship.amount}</p>
              <div className="flex items-center text-gray-500 mb-6">
                <CalendarClock className="w-4 h-4 mr-2" />
                <span className="text-sm">Deadline: {scholarship.deadline}</span>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link to={`/scholarships/${scholarship.id}`}>View Details</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsPreview;
