import React from 'react';
import { FaUser, FaEnvelope, FaPenFancy } from 'react-icons/fa';
import Discuss from '../components/Discuss';
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0F20] flex items-center justify-center px-4">
      <div className="bg-[#13172B] rounded-xl shadow-lg p-8 w-full max-w-4xl">
        {/* Title */}
        <h2 className="text-white text-3xl font-bold text-center mb-2">
          Get In Touch With Us
        </h2>
        <p className="text-gray-400 text-center mb-6">
          We would love to hear from you
        </p>

        {/* Form */}
        <Discuss />
      </div>
    </div>
  );
};

export default ContactPage;
