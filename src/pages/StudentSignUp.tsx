import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScholarshipRecommendations } from '@/lib/geminiAPI';
import ScholarshipMatches from '@/components/ScholarshipMatches';
import VoiceFormField from '@/components/VoiceFormField';

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

  const handleVoiceResult = (field: string, text: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: text
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
              <VoiceFormField
                label="Full Name"
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('fullName', text)}
                error={errors.fullName}
              />

              <VoiceFormField
                label="Email address"
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('email', text)}
                error={errors.email}
              />

              <VoiceFormField
                label="Student ID"
                id="studentId"
                name="studentId"
                type="text"
                required
                value={formData.studentId}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('studentId', text)}
                error={errors.studentId}
              />

              <VoiceFormField
                label="Password"
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('password', text)}
                error={errors.password}
              />

              <VoiceFormField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('confirmPassword', text)}
                error={errors.confirmPassword}
              />

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-md font-semibold text-gray-700 mb-3">
                  Scholarship Matching Information (Optional)
                </h3>
              </div>

              <VoiceFormField
                label="Education Level"
                id="education"
                name="education"
                as="select"
                value={formData.education}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('education', text)}
              >
                <option value="">Select your education level</option>
                <option value="High School">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="PhD">PhD</option>
              </VoiceFormField>

              <VoiceFormField
                label="Field of Study"
                id="fieldOfStudy"
                name="fieldOfStudy"
                as="select"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('fieldOfStudy', text)}
              >
                <option value="">Select your field</option>
                <option value="Engineering">Engineering</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business">Business</option>
                <option value="Arts & Humanities">Arts & Humanities</option>
                <option value="Medicine">Medicine</option>
                <option value="Science">Science</option>
                <option value="Other">Other</option>
              </VoiceFormField>

              <VoiceFormField
                label="Academic Achievements"
                id="academicAchievements"
                name="academicAchievements"
                as="textarea"
                rows={3}
                placeholder="List your achievements, awards, GPA, etc."
                value={formData.academicAchievements}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('academicAchievements', text)}
              />

              <VoiceFormField
                label="Financial Need"
                id="financialNeed"
                name="financialNeed"
                as="select"
                value={formData.financialNeed}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('financialNeed', text)}
              >
                <option value="">Select your financial need level</option>
                <option value="High">High need</option>
                <option value="Medium">Medium need</option>
                <option value="Low">Low need</option>
                <option value="None">No financial need</option>
              </VoiceFormField>

              <VoiceFormField
                label="Extracurricular Activities"
                id="extracurriculars"
                name="extracurriculars"
                as="textarea"
                rows={3}
                placeholder="Sports, clubs, volunteer work, etc."
                value={formData.extracurriculars}
                onChange={handleChange}
                onVoiceResult={(text) => handleVoiceResult('extracurriculars', text)}
              />

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
