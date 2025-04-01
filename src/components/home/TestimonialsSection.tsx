
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Engineering Student, Delhi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Protsahan's mentorship program connected me with a senior engineer who guided me through my final year project. The scholarship I received helped me complete my degree debt-free.",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Medical Student, Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Through Protsahan's crowdfunding platform, I raised enough funds to cover my first year of medical school. The resources and support from the community have been invaluable.",
  },
  {
    id: 3,
    name: "Rahul Gupta",
    role: "Technology Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    quote: "From being a scholarship recipient to becoming a mentor on Protsahan, my journey has come full circle. Now I help students achieve their dreams just as I was helped years ago.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from individuals who have transformed their lives with Protsahan's support
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10">
            <Quote className="w-12 h-12 text-blue-100 absolute top-6 left-6" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 mb-6 italic relative z-10">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 right-10 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
