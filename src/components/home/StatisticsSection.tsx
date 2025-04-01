
const statistics = [
  { value: "10,000+", label: "Scholarships Awarded" },
  { value: "5,000+", label: "Active Mentors" },
  { value: "₹25 Cr+", label: "Funds Raised" },
  { value: "50,000+", label: "Success Stories" },
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Over the years, we've made a significant difference in thousands of lives through our programs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.value}</p>
              <p className="text-lg text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
