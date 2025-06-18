import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-[#0D0F20] text-white">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Get the <span className="text-blue-400">best price</span><br />
          property <br /> recommendation
        </h1>
        <p className="text-gray-400 text-lg">We do a thorough assessment of the property to get the lowest price</p>

        <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center text-black shadow-lg max-w mr-7">
          <select className="p-2 border border-gray-300 rounded-md w-full md:w-auto">
            <option>Resident</option>
            <option>Commercials</option>
            <option>Bungalows</option>
            <option>Apartments</option>
            <option>Farmhouses</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md w-full md:w-auto">
            <option>Rent</option>
            <option>Purchase</option>
          </select>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-full md:w-auto"
            placeholder="1000–2000"
          />
          <Link to="/property">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Search
          </button>
          </Link>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Apartment"
          className="rounded-xl w-full object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-white text-black p-4 rounded-xl flex items-center gap-2 shadow-lg">
          <div className="bg-blue-500 w-4 h-4 rounded-full" />
          <div>
            <p className="font-semibold">St. Avenue</p>
            <p className="text-sm text-gray-600">Apartment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
