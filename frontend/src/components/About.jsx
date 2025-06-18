import React from 'react';
import { FaHome, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0D0F20] text-white font-sans py-10">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#14172b] shadow-lg">
        
      </nav>
      <div className="text-center mt-10 mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            On The Go At A Time.
          </p>
        </div>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Discover Your Dream Property with <span className="text-blue-500">HomoDeal</span>
          </h1>
          <p className="text-gray-400 mb-6 text-lg">
            Your journey to finding the perfect property begins here. We help you explore curated listings to find the home that matches your dreams.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg font-semibold transition">Learn More</button>
            <Link to="/property">
                        <button className="bg-white text-black hover:bg-gray-200 px-5 py-3 rounded-lg font-semibold transition">Browse Properties</button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center animate-fadeInUp">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Modern Building" className="rounded-2xl shadow-xl w-[90%]" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#14172b] py-10 px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-[#0D0F20] p-6 rounded-xl shadow hover:scale-[1.03] transition">
            <h2 className="text-3xl font-bold text-blue-500">10+</h2>
            <p className="text-gray-400 mt-2">Happy Customers</p>
          </div>
          <div className="bg-[#0D0F20] p-6 rounded-xl shadow hover:scale-[1.03] transition">
            <h2 className="text-3xl font-bold text-blue-500">20+</h2>
            <p className="text-gray-400 mt-2">Properties Listed</p>
          </div>
          <div className="bg-[#0D0F20] p-6 rounded-xl shadow hover:scale-[1.03] transition">
            <h2 className="text-3xl font-bold text-blue-500">2+</h2>
            <p className="text-gray-400 mt-2">Years of Experience</p>
          </div>
          <div className="bg-[#0D0F20] p-6 rounded-xl shadow hover:scale-[1.03] transition">
            <h2 className="text-3xl font-bold text-blue-500">100%</h2>
            <p className="text-gray-400 mt-2">Trusted Support</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
