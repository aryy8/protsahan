import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Search } from "lucide-react";

interface Campaign {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  daysLeft: number;
  image: string;
  category: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Support My Engineering Education",
    description: "Help me pursue my dream of becoming a software engineer at IIT Delhi.",
    goal: 500000,
    raised: 350000,
    daysLeft: 15,
    image: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80",
    category: "Engineering"
  },
  {
    id: 2,
    title: "Medical School Journey",
    description: "Supporting my medical education at AIIMS to serve rural communities.",
    goal: 800000,
    raised: 600000,
    daysLeft: 20,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "Medical"
  },
  {
    id: 3,
    title: "Art & Design Scholarship",
    description: "Help fund my education at National Institute of Design.",
    goal: 300000,
    raised: 150000,
    daysLeft: 30,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    category: "Arts"
  }
];

const CrowdfundingDashboard = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Student Crowdfunding</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Support students in achieving their educational dreams through community funding
          </p>
          <div className="mt-8 flex justify-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 text-lg">
              Start Your Campaign
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-blue-600">₹15M+</h3>
              <p className="text-gray-600">Total Funds Raised</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-3xl font-bold text-blue-600">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search campaigns..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">All Categories</Button>
              <Button variant="outline">Engineering</Button>
              <Button variant="outline">Medical</Button>
              <Button variant="outline">Arts</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {campaign.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-3">{campaign.title}</h3>
                  <p className="text-gray-600 mt-2">{campaign.description}</p>
                  
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>₹{campaign.raised.toLocaleString()}</span>
                      <span>₹{campaign.goal.toLocaleString()}</span>
                    </div>
                    <Progress value={(campaign.raised / campaign.goal) * 100} />
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-600">{campaign.daysLeft} days left</span>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Support
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Campaign?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have successfully funded their education through our platform.
            It's free to start, and our team will guide you through every step.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-6 text-lg">
            Create Your Campaign
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CrowdfundingDashboard; 