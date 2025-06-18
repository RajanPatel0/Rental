import React from 'react';

import { Link } from 'react-router-dom';
import { FaUser, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0F20] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#14172b] rounded-2xl shadow-xl p-8 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-white text-center mb-1">Sign Up</h2>
        <p className="text-sm text-gray-400 text-center mb-6">Create a free account today</p>

        <form className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute top-3.5 left-4 text-gray-400" />
            <input
              type="text"
              required
              placeholder="Full Name"
              className="w-full bg-[#0D0F20] text-white py-3 pl-10 pr-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <FaPhone className="absolute top-3.5 left-4 text-gray-400" />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full bg-[#0D0F20] text-white py-3 pl-10 pr-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-4 text-gray-400" />
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full bg-[#0D0F20] text-white py-3 pl-10 pr-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3.5 left-4 text-gray-400" />
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full bg-[#0D0F20] text-white py-3 pl-10 pr-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:scale-[1.01] hover:shadow-md transition-transform"
          >
            <Link to="/">    
            Sign Up
            </Link>
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline hover:text-blue-300">
            Login instead
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
