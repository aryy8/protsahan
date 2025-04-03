
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScholarshipRecommendations } from '@/lib/geminiAPI';
import ScholarshipMatches from '@/components/ScholarshipMatches';

interface FormData {
  fullName: string;
  email: string;
  studentId: string;
  password: string;
  confirmPassword: string;
  education: string;
  fieldOfStudy: string;
  academicAchievements: string;
  financialNeed: string;
  extracurriculars: string;
}

export default function StudentSignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    studentId: '',
    password: '',
    confirmPassword: '',
    education: '',
    fieldOfStudy: '',
    academicAchievements: '',
    financialNeed: '',
    extracurriculars: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [isLoadingScholarships, setIsLoadingScholarships] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.studentId.trim()) {
      newErrors.studentId = 'Student ID is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Optional fields for scholarship matching don't need validation
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFindScholarships = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        setIsLoadingScholarships(true);
        const scholarshipRecommendations = await getScholarshipRecommendations(formData);
        setScholarships(scholarshipRecommendations);
        setShowForm(false);
      } catch (error) {
        console.error('Error getting scholarship matches:', error);
      } finally {
        setIsLoadingScholarships(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // TODO: Implement actual signup logic here
        console.log('Form submitted:', formData);
        // Redirect to login or dashboard after successful signup
        // navigate('/login');
      } catch (error) {
        console.error('Signup failed:', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBackToForm = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {showForm ? "Student Sign Up" : "Your Scholarship Matches"}
        </h2>
        {showForm && (
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill in your details to find scholarships that match your profile
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {showForm ? (
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleFindScholarships}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                  Student ID
                </label>
                <div className="mt-1">
                  <input
                    id="studentId"
                    name="studentId"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.studentId}
                    onChange={handleChange}
                  />
                  {errors.studentId && (
                    <p className="mt-2 text-sm text-red-600">{errors.studentId}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-md font-semibold text-gray-700 mb-3">
                  Scholarship Matching Information (Optional)
                </h3>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                  Education Level
                </label>
                <div className="mt-1">
                  <select
                    id="education"
                    name="education"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.education}
                    onChange={handleChange}
                  >
                    <option value="">Select your education level</option>
                    <option value="High School">High School</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">
                  Field of Study
                </label>
                <div className="mt-1">
                  <select
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                  >
                    <option value="">Select your field</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Business">Business</option>
                    <option value="Arts & Humanities">Arts & Humanities</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Science">Science</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="academicAchievements" className="block text-sm font-medium text-gray-700">
                  Academic Achievements
                </label>
                <div className="mt-1">
                  <textarea
                    id="academicAchievements"
                    name="academicAchievements"
                    rows={3}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="List your achievements, awards, GPA, etc."
                    value={formData.academicAchievements}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="financialNeed" className="block text-sm font-medium text-gray-700">
                  Financial Need
                </label>
                <div className="mt-1">
                  <select
                    id="financialNeed"
                    name="financialNeed"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.financialNeed}
                    onChange={handleChange}
                  >
                    <option value="">Select your financial need level</option>
                    <option value="High">High need</option>
                    <option value="Medium">Medium need</option>
                    <option value="Low">Low need</option>
                    <option value="None">No financial need</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="extracurriculars" className="block text-sm font-medium text-gray-700">
                  Extracurricular Activities
                </label>
                <div className="mt-1">
                  <textarea
                    id="extracurriculars"
                    name="extracurriculars"
                    rows={3}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Sports, clubs, volunteer work, etc."
                    value={formData.extracurriculars}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Find Matching Scholarships
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <ScholarshipMatches 
              scholarships={scholarships} 
              isLoading={isLoadingScholarships} 
            />
            
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBackToForm}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Form
              </button>
              
              <button
                onClick={handleSubmit}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Complete Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
