
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Mentorship = () => {
  return (
    <Layout>
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Mentorship Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connect with experienced mentors who can guide you on your educational and career journey
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our Mentorship Works</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our mentorship program connects you with experienced professionals who volunteer their time
                to guide you through academic challenges, career decisions, and personal growth.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you need advice on choosing the right courses, preparing for interviews, or developing
                specific skills, our mentors are here to help you succeed.
              </p>
              <div className="mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700">Find a Mentor</Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1541555645879-1e5c83020824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Mentorship session" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">AI-Powered Mentorship</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.25M9.75 9.105c0 .756.616 1.372 1.373 1.372h.002c.756 0 1.37-.616 1.37-1.372V8.25m0 0h-.002a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.002c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125h-.002z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Meet Protsahan AI Assistant</h3>
              <p className="text-gray-600">
                Get instant guidance and answers to your questions with our AI-powered chatbot
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-2">
                  <span className="text-sm">AI</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-gray-800">Hello! I'm the Protsahan AI Assistant. How can I help you with your educational journey today?</p>
                </div>
              </div>
              <div className="flex items-start justify-end">
                <div className="bg-blue-100 p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-gray-800">I need help finding scholarships for engineering students.</p>
                </div>
                <div className="bg-gray-300 text-gray-700 p-2 rounded-lg ml-2">
                  <span className="text-sm">You</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder="Ask a question..." 
                className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Mentor Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Mentors</h3>
              <p className="text-gray-600 mb-4">Guidance on subjects, research, and academic excellence</p>
              <Button variant="outline" className="w-full">View Mentors</Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Mentors</h3>
              <p className="text-gray-600 mb-4">Advice on career paths, job applications, and professional growth</p>
              <Button variant="outline" className="w-full">View Mentors</Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p className="text-gray-600 mb-4">Mentorship for acquiring specific skills and competencies</p>
              <Button variant="outline" className="w-full">View Mentors</Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
              <p className="text-gray-600 mb-4">Guidance on life skills, confidence building, and personal challenges</p>
              <Button variant="outline" className="w-full">View Mentors</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentorship;
