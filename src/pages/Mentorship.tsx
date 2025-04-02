import Layout from "@/components/layout/Layout";
import { Send } from "lucide-react";
import { useState } from "react";

import { getAIResponse } from "@/lib/geminiAPI";

const Mentorship = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    setLoading(true);

    const aiResponse = await getAIResponse(userInput);
    setResponse(aiResponse);

    setLoading(false);
    setUserInput("");
  };

  return (
    <Layout>
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            AI Mentorship Program
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get personalized guidance with our advanced AI chatbot mentor
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Protsahan AI Mentor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Instant Guidance At Your Fingertips
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our AI-powered mentorship system provides immediate,
                personalized advice on your academic and career questions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you need help with course selection, career planning,
                scholarship information, or skill development, our AI mentor is
                available 24/7 to provide tailored guidance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.25M9.75 9.105c0 .756.616 1.372 1.373 1.372h.002c.756 0 1.37-.616 1.37-1.372V8.25m0 0h-.002a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.002c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125h-.002z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Protsahan AI Assistant
                </h3>
                <p className="text-gray-600">
                  Get instant guidance and answers to your questions
                </p>
              </div>

              {/* AI Response Box */}
              <div className="bg-gray-100 p-4 rounded-lg mb-6 h-64 overflow-y-auto">
                {loading ? (
                  <p className="text-gray-700">Loading...</p>
                ) : (
                  <p className="text-gray-700">
                    {response || "Ask something!"}
                  </p>
                )}
              </div>

              {/* User Input Box */}
              <div className="flex items-center">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 flex items-center justify-center"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mentorship;
