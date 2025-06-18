/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '../elements/Button/index.jsx';
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const AllProperty = ({ data }) => {
  const rent = data.filter((item) => item.type === 'Rent');
  const property = data.filter((item) => item.type === 'Property');

  const renderCard = (item, index) => (
    <Fade bottom triggerOnce delay={500 * index} key={index}>
      <Button type="link" href={`/property/${item.id}`}>
        <div className="bg-[#12172A] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 hover:shadow-blue-500/20 group relative max-w-[420px] mx-auto">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-60 object-cover group-hover:opacity-90 transition duration-300"
          />
          <FaHeart className="absolute top-4 right-4 text-white hover:text-blue-500 cursor-pointer" />
          <div className="p-8">
            <span className="text-green-400 text-xs font-medium">{item.type}</span>
            <h3 className="text-lg font-semibold mt-1 mb-1 text-white">{item.title}</h3>

            <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <FaMapMarkerAlt className="mr-1 text-blue-400" /> {item.location}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-bold text-sm">{item.price}</span>
              <button className="px-4 py-2 bg-blue-500 rounded-md text-sm hover:bg-blue-600 transition">
                View
              </button>
            </div>
          </div>
        </div>
      </Button>
    </Fade>
  );

  return (
    <Fade bottom>
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">All Properties</h2>

        <Tabs className="flex flex-col">
          <TabList>
            <div className="flex flex-row mb-5 justify-center">
              <Tab>
                <button className="font-normal px-5 py-2 mr-2 text-white text-lg border border-blue-400 rounded-full transition duration-300 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white">
                  ALL
                </button>

              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-2 text-white text-lg border border-blue-400 rounded-full transition duration-300 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white">
  Rent
</button>

              </Tab>
              <Tab>
                <button className="font-normal px-5 py-2 mr-2 text-white text-lg border border-blue-400 rounded-full transition duration-300 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white">
  Property
</button>

              </Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {data.map((item, index) => renderCard(item, index))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {rent.map((item, index) => renderCard(item, index))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {property.map((item, index) => renderCard(item, index))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </Fade>
  );
};

export default AllProperty;
