import React from 'react';
import { FaUser, FaEnvelope, FaPenFancy } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0F20] flex items-center justify-center px-4">
      <div className="bg-[#13172B] rounded-xl shadow-lg p-8 w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-white text-3xl font-bold text-center mb-2">
          Get In Touch With Us
        </h2>
        <p className="text-gray-400 text-center mb-6">
          We would love to hear from you
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center bg-[#1B1F35] rounded-md px-3 py-2 w-full">
              <FaUser className="text-blue-400 mr-2" />
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
            <div className="flex items-center bg-[#1B1F35] rounded-md px-3 py-2 w-full">
              <FaEnvelope className="text-blue-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex items-center bg-[#1B1F35] rounded-md px-3 py-2">
            <FaPenFancy className="text-blue-400 mr-2" />
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent outline-none w-full text-white placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Message Content"
              rows="6"
              className="w-full bg-[#1B1F35] text-white placeholder-gray-400 rounded-md px-4 py-3 outline-none resize-none"
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
