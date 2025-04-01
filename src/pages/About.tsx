
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Protsahan</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering dreams through education, mentorship, and community support
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Protsahan, our mission is to democratize access to educational opportunities 
                by connecting aspiring learners with resources, mentors, scholarships, and funding options.
                We believe that education is a fundamental right, and financial constraints should not 
                be a barrier to achieving one's academic and career goals.
              </p>
              <p className="text-lg text-gray-700">
                Through our integrated platform, we strive to create an ecosystem where talent meets 
                opportunity, and dreams find the support they need to turn into reality.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Students in a classroom" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Inclusivity</h3>
              <p className="text-gray-700">
                We welcome learners from all backgrounds, demographics, and circumstances, 
                ensuring our platform is accessible to everyone with dreams to pursue.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Empowerment</h3>
              <p className="text-gray-700">
                We don't just provide resources; we equip individuals with skills, knowledge, 
                and mentorship to take charge of their educational journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Community</h3>
              <p className="text-gray-700">
                We foster a supportive community where mentors, donors, and learners come 
                together to create a network of mutual growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team member cards would go here */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Rajesh Kumar</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Anita Singh</h3>
              <p className="text-gray-600">Head of Scholarships</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/62.jpg" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Vikram Mehta</h3>
              <p className="text-gray-600">Mentorship Director</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/28.jpg" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Meera Patel</h3>
              <p className="text-gray-600">Crowdfunding Manager</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
