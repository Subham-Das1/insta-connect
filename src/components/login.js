import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Facebook, Mail, Lock, ArrowRight } from 'lucide-react';
import './style.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl flex overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden lg:block relative">
          <img
            src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&w=800&q=80"
            alt="Connected World"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Connect with friends</h2>
            <p className="text-sm opacity-90">Join our community and stay connected with the people who matter most.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Sign in to continue to your account</p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition">
              <Github size={20} />
              <span>Continue with Github</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-[#1DA1F2] text-white p-3 rounded-lg hover:bg-[#1a8cd8] transition">
              <Twitter size={20} />
              <span>Continue with Twitter</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-[#4267B2] text-white p-3 rounded-lg hover:bg-[#365899] transition">
              <Facebook size={20} />
              <span>Continue with Facebook</span>
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="/terms" className="text-blue-500 hover:text-blue-600">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
            >
              Sign in
              <ArrowRight size={20} />
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
