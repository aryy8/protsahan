
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Mentorship = () => {
  return (
    <Layout>
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">AI Mentorship Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get personalized guidance with our advanced AI chatbot mentor
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Protsahan AI Mentor</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instant Guidance At Your Fingertips</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our AI-powered mentorship system provides immediate, personalized advice on your academic and career questions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you need help with course selection, career planning, scholarship information, or skill development,
                our AI mentor is available 24/7 to provide tailored guidance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Personalized academic guidance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">24/7 instant responses</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Scholarship recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Career path exploration</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.25M9.75 9.105c0 .756.616 1.372 1.373 1.372h.002c.756 0 1.37-.616 1.37-1.372V8.25m0 0h-.002a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.002c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125h-.002z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Protsahan AI Assistant</h3>
                <p className="text-gray-600">
                  Get instant guidance and answers to your questions
                </p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-6 h-64 overflow-y-auto">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white p-2 rounded-lg mr-2">
                    <span className="text-sm">AI</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                    <p className="text-gray-800">Hello! I'm the Protsahan AI Assistant. How can I help you with your educational journey today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg shadow-sm max-w-[80%]">
                    <p className="text-gray-800">I need help finding scholarships for engineering students.</p>
                  </div>
                  <div className="bg-gray-300 text-gray-700 p-2 rounded-lg ml-2">
                    <span className="text-sm">You</span>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white p-2 rounded-lg mr-2">
                    <span className="text-sm">AI</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                    <p className="text-gray-800">Great! There are several scholarships available for engineering students. I can help you find ones that match your profile. What year are you in, and do you have any specific areas of interest within engineering?</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Ask a question..." 
                  className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 flex items-center justify-center">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our AI Mentorship Helps Students</h2>
            <p className="text-lg text-gray-700 mb-12">
              Our AI mentorship system is designed to provide personalized guidance to students from diverse backgrounds,
              helping them navigate their educational journey and achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Academic Guidance</h3>
              <p className="text-gray-700">
                Get personalized advice on course selection, study techniques, and academic resources tailored to your learning style and goals.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Career Planning</h3>
              <p className="text-gray-700">
                Explore career paths based on your interests and skills. Get insights on industries, job roles, and the skills required to succeed.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Scholarship Matching</h3>
              <p className="text-gray-700">
                Discover scholarships that match your profile and get assistance with application processes to maximize your chances of success.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">
              Try AI Mentor Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentorship;
