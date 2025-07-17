import React from 'react';
import { Users, Award, Globe, Heart, Code, GraduationCap, Phone, Mail, MapPin, Star, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Tandemly
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/discover" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Discover</Link>
              <Link to="/chat" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Community</Link>
              <Link to="/sessions" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Sessions</Link>
              <a href="#" className="text-purple-600 font-medium">About Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tandemly</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empowering learners worldwide through innovative collaborative learning experiences. 
            We believe that knowledge shared is knowledge multiplied.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              50,000+ Active Learners
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              120+ Countries
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-green-600" />
              98% Success Rate
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize education by creating a global platform where passionate learners can connect, 
                share knowledge, and grow together. We strive to break down barriers and make quality education 
                accessible to everyone, everywhere.
              </p>
              <div className="flex items-center text-purple-600">
                <Heart className="w-6 h-6 mr-2" />
                <span className="font-semibold">Driven by passion for education</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A world where geographical boundaries don't limit learning opportunities, where every individual 
                has access to mentorship and collaborative learning experiences that accelerate their personal 
                and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from our platform features to our community support.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to create cutting-edge learning experiences that adapt to evolving needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the positive impact we create in learners' lives and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Developer</h2>
            <p className="text-xl text-gray-600">The passionate mind behind Tandemly</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <span className="text-white text-4xl font-bold">HB</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">Hardik Batra</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-4 text-center md:text-left">Full Stack Developer & Founder</p>
                  <p className="text-gray-600 mb-6 text-center md:text-left">
                    A passionate computer science student with a vision to revolutionize online learning. 
                    Hardik combines technical expertise with educational innovation to create meaningful 
                    learning experiences for students worldwide.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Indian Institute of Information Technology</p>
                      <p className="text-gray-600">Allahabad</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">hardikbatra115@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Code className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Specializations</p>
                      <p className="text-gray-600">React, Node.js, C++, Express</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-red-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Abohar,India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-purple-100">Making a difference in the global learning community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-purple-100">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">120+</div>
              <div className="text-purple-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-purple-100">Sessions Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-purple-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of passionate learners and start your collaborative learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
              Join Community
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="text-xl font-bold">Tandemly</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering growth through collaborative learning and skill exchange.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Tandemly. All rights reserved. Built with ❤️ for learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;