// PropertyDetail.jsx
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import NotFound from '../assets/images/NotFound.png';


const PropertyDetail = ({ data }) => {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom triggerOnce>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mt-5" />
            </div>
            <h1 className="text-white text-2xl text-center mt-5">Property Not Found</h1>
            <div className="flex justify-center">
              <Button href="/property" type="link" className="flex w-30 h-10 px-5 mt-5 bg-gradient-to-r from-blue-500 to-green-500 text-white items-center rounded transform transition duration-500 hover:from-green-500 hover:to-blue-500">
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button
          type="link"
          href="/property"
          className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-white hover:underline"
        >
          <svg className="w-5 h-5 text-white mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          See All Properties
        </Button>
      </Fade>

      {data.map((item) => (
        <div className="flex flex-col mt-8 justify-center" key={item.id}>
          <Fade bottom triggerOnce>
            <h1 className="text-5xl text-white text-center font-bold">{item.title}</h1>
            <p className="font-light text-xl text-gray-300 text-center mb-10">
              {item.type} - {item.location}
            </p>
          </Fade>

          <Fade bottom delay={300 * 1} triggerOnce>
            <div className="flex justify-center xl:mb-6">
              <img src={item.imageUrl} alt="Property" className="flex w-4/5 sm:w-4/6 rounded-lg shadow-xl" />
            </div>
          </Fade>

          <Fade bottom delay={300 * 1} triggerOnce>
            <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-white font-bold mb-3">Property Description</h1>
              <p className="font-light text-lg text-gray-300 text-justify">{item.desc}</p>
            </div>

            {/* <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-white font-bold mb-5">Key Features</h1>
              <div className="flex flex-wrap gap-4">
                {item.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 text-white border border-green-400 rounded-full shadow-lg transition duration-300 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div> */}
            {/* Price Section */}
<div className="flex flex-col mx-8 sm:mx-16 xl:mx-28 mt-8">
  <h1 className="text-3xl text-white font-bold mb-3">Price</h1>
  <p className="text-4xl sm:text-5xl font-extrabold text-green-400 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
    {item.price}
  </p>
</div>


            <div className="mx-8 sm:mx-16 xl:mx-28 mt-16">
              <p className="font-light text-gray-300">
                * Interested? Go check out the details below:
                {' '}
                <Button
                  type="link"
                  href={item.credit}
                  target="_blank"
                  className="text-theme-purple underline hover:text-green-400"
                  isExternal
                >
                  {item.credit}
                </Button>
              </p>
            </div>
          </Fade>
        </div>
      ))}
    </section>
  );
};

export default PropertyDetail;
