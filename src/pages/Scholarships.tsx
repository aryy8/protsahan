
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, CalendarClock } from "lucide-react";

const scholarships = [
  {
    id: 1,
    title: "National Merit Scholarship",
    provider: "National Education Foundation",
    amount: "₹50,000",
    deadline: "October 15, 2023",
    category: "Merit-based",
    field: "All Fields",
    level: "Undergraduate"
  },
  {
    id: 2,
    title: "Women in STEM Scholarship",
    provider: "Tech Innovators Association",
    amount: "₹75,000",
    deadline: "September 30, 2023",
    category: "Field-specific",
    field: "STEM",
    level: "Graduate"
  },
  {
    id: 3,
    title: "Rural Education Initiative",
    provider: "Community Development Trust",
    amount: "₹40,000",
    deadline: "November 20, 2023",
    category: "Need-based",
    field: "All Fields",
    level: "High School"
  },
  {
    id: 4,
    title: "Future Engineers Scholarship",
    provider: "Engineering Council of India",
    amount: "₹60,000",
    deadline: "December 5, 2023",
    category: "Field-specific",
    field: "Engineering",
    level: "Undergraduate"
  },
  {
    id: 5,
    title: "Arts & Humanities Excellence Award",
    provider: "Cultural Foundation of India",
    amount: "₹45,000",
    deadline: "October 30, 2023",
    category: "Merit-based",
    field: "Arts & Humanities",
    level: "Graduate"
  },
  {
    id: 6,
    title: "First-Generation Student Scholarship",
    provider: "Education Access Initiative",
    amount: "₹55,000",
    deadline: "November 15, 2023",
    category: "Need-based",
    field: "All Fields",
    level: "Undergraduate"
  },
];

const Scholarships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    field: "",
    level: ""
  });

  const filteredScholarships = scholarships.filter(scholarship => {
    return (
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.category === "" || scholarship.category === filters.category) &&
      (filters.field === "" || scholarship.field === filters.field) &&
      (filters.level === "" || scholarship.level === filters.level)
    );
  });

  return (
    <Layout>
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Scholarships</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover opportunities to fund your education and achieve your academic goals
          </p>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap gap-3">
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white"
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                >
                  <option value="">All Categories</option>
                  <option value="Merit-based">Merit-based</option>
                  <option value="Need-based">Need-based</option>
                  <option value="Field-specific">Field-specific</option>
                </select>
                
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white"
                  value={filters.field}
                  onChange={(e) => setFilters({...filters, field: e.target.value})}
                >
                  <option value="">All Fields</option>
                  <option value="All Fields">General</option>
                  <option value="STEM">STEM</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Arts & Humanities">Arts & Humanities</option>
                </select>
                
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white"
                  value={filters.level}
                  onChange={(e) => setFilters({...filters, level: e.target.value})}
                >
                  <option value="">All Levels</option>
                  <option value="High School">High School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                </select>
                
                <Button variant="outline" className="flex items-center gap-2" onClick={() => setFilters({ category: "", field: "", level: "" })}>
                  <Filter className="h-4 w-4" />
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Available Scholarships</h2>
          
          {filteredScholarships.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No scholarships match your search criteria. Please try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScholarships.map((scholarship) => (
                <div 
                  key={scholarship.id} 
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{scholarship.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {scholarship.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">Provider: {scholarship.provider}</p>
                  <p className="text-gray-600 mb-2">Field: {scholarship.field}</p>
                  <p className="text-gray-600 mb-2">Level: {scholarship.level}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{scholarship.amount}</p>
                  <div className="flex items-center text-gray-500 mb-6">
                    <CalendarClock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Deadline: {scholarship.deadline}</span>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">How to Apply for Scholarships</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Create an Account</h3>
                  <p className="text-gray-600">Sign up for a Protsahan account to access all scholarship features.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Complete Your Profile</h3>
                  <p className="text-gray-600">Fill in your academic details, achievements, and personal information.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Browse & Apply</h3>
                  <p className="text-gray-600">Search for scholarships that match your profile and submit applications.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Track Applications</h3>
                  <p className="text-gray-600">Monitor the status of your applications through your dashboard.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700">Create Account</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarships;
