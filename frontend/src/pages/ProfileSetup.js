import React, { useState } from 'react';
import { Camera, MapPin, Plus, X, Calendar, Save, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function ProfileSetup() {
    const navigate = useNavigate(); //
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    bio: '',
    location: '',
    useGPS: false,
    profilePhoto: null,
    skillsToTeach: [],
    skillsToLearn: [],
    availability: {
      monday: { available: false, times: [] },
      tuesday: { available: false, times: [] },
      wednesday: { available: false, times: [] },
      thursday: { available: false, times: [] },
      friday: { available: false, times: [] },
      saturday: { available: false, times: [] },
      sunday: { available: false, times: [] }
    }
  });

  const [newSkillToTeach, setNewSkillToTeach] = useState('');
  const [newSkillToLearn, setNewSkillToLearn] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const skillSuggestions = [
    'Guitar', 'Piano', 'Yoga', 'Cooking', 'Photography', 'Web Development', 
    'Spanish', 'French', 'Drawing', 'Writing', 'Dancing', 'Singing',
    'Math Tutoring', 'Graphic Design', 'Fitness Training', 'Meditation'
  ];

  const addSkill = (skill, type) => {
    if (skill.trim()) {
      if (type === 'teach') {
        setFormData({
          ...formData,
          skillsToTeach: [...formData.skillsToTeach, skill.trim()]
        });
        setNewSkillToTeach('');
      } else {
        setFormData({
          ...formData,
          skillsToLearn: [...formData.skillsToLearn, skill.trim()]
        });
        setNewSkillToLearn('');
      }
    }
  };

  const removeSkill = (index, type) => {
    if (type === 'teach') {
      setFormData({
        ...formData,
        skillsToTeach: formData.skillsToTeach.filter((_, i) => i !== index)
      });
    } else {
      setFormData({
        ...formData,
        skillsToLearn: formData.skillsToLearn.filter((_, i) => i !== index)
      });
    }
  };
  const handleSubmit = async () => {
   
  try {
    const token = localStorage.getItem('userToken');

    const response = await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
  const errorData = await response.json();
  console.error('❌ Frontend Error:', errorData);
  alert(`Failed to save profile: ${errorData.error || 'Unknown error'}`);
  return;
}


    const result = await response.json();
    console.log('Profile saved:', result);

    alert('Profile created successfully! Redirecting to dashboard...');
    // If using react-router-dom:
    navigate('/');

  } catch (err) {
  console.error('Submission error:', err);
  alert(`Something went wrong: ${err.message || 'Please try again.'}`);
}};


  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {formData.profilePhoto ? (
              <img src={formData.profilePhoto} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              formData.firstName && formData.lastName ? 
                `${formData.firstName[0]}${formData.lastName[0]}` : 
                'JS'
            )}
          </div>
          <button className="absolute -bottom-2 -right-2 bg-white border-2 border-purple-500 rounded-full p-2 text-purple-500 hover:bg-purple-50">
            <Camera size={16} />
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">Upload your profile photo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            placeholder="Enter your first name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            placeholder="Enter your last name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about yourself</label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({...formData, bio: e.target.value})}
          placeholder="Share your passion for learning and teaching. What drives you to exchange skills with others?"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="useGPS"
              checked={formData.useGPS}
              onChange={(e) => setFormData({...formData, useGPS: e.target.checked})}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="useGPS" className="text-sm text-gray-700">Use my current location (GPS)</label>
          </div>
          {!formData.useGPS && (
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Enter your city or pincode"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills I can teach</h3>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newSkillToTeach}
              onChange={(e) => setNewSkillToTeach(e.target.value)}
              placeholder="Add a skill you can teach..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addSkill(newSkillToTeach, 'teach')}
            />
            <button
              onClick={() => addSkill(newSkillToTeach, 'teach')}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skillSuggestions.slice(0, 8).map((skill) => (
              <button
                key={skill}
                onClick={() => addSkill(skill, 'teach')}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-700"
              >
                + {skill}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {formData.skillsToTeach.map((skill, index) => (
              <div key={index} className="flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                <span className="text-sm">{skill}</span>
                <button
                  onClick={() => removeSkill(index, 'teach')}
                  className="ml-2 text-purple-600 hover:text-purple-800"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills I want to learn</h3>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newSkillToLearn}
              onChange={(e) => setNewSkillToLearn(e.target.value)}
              placeholder="Add a skill you want to learn..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addSkill(newSkillToLearn, 'learn')}
            />
            <button
              onClick={() => addSkill(newSkillToLearn, 'learn')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skillSuggestions.slice(8).map((skill) => (
              <button
                key={skill}
                onClick={() => addSkill(skill, 'learn')}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700"
              >
                + {skill}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {formData.skillsToLearn.map((skill, index) => (
              <div key={index} className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                <span className="text-sm">{skill}</span>
                <button
                  onClick={() => removeSkill(index, 'learn')}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Set your availability</h3>
      <div className="space-y-4">
        {Object.keys(formData.availability).map((day) => (
          <div key={day} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={day}
                checked={formData.availability[day].available}
                onChange={(e) => setFormData({
                  ...formData,
                  availability: {
                    ...formData.availability,
                    [day]: { ...formData.availability[day], available: e.target.checked }
                  }
                })}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor={day} className="font-medium text-gray-900 capitalize">
                {day}
              </label>
            </div>
            {formData.availability[day].available && (
              <div className="flex space-x-2">
                <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                </select>
                <span className="text-gray-500">to</span>
                <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Tandemly</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Step {currentStep} of 3
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {currentStep === 1 && "Let's get to know you"}
              {currentStep === 2 && "Share your skills"}
              {currentStep === 3 && "Set your availability"}
            </h1>
            <p className="text-gray-600">
              {currentStep === 1 && "Tell us about yourself and where you're located"}
              {currentStep === 2 && "What can you teach and what would you like to learn?"}
              {currentStep === 3 && "When are you available for skill exchange sessions?"}
            </p>
          </div>

          <div>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2"
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>
              )}
              
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 font-medium"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 font-medium flex items-center space-x-2"
                  >
                    <Save size={16} />
                    <span>Complete Profile</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}