import { Link } from 'react-router-dom';
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { Properties } from '../json/landingPageData';

const Featured = () => {
  return (
    <section className="bg-[#0D0F20] text-white py-3">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Explore Available Properties</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our collection of tailor-made deals designed to suit your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Properties.slice(0, 6).map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <div className="bg-[#12172A] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 hover:shadow-blue-500/20 group relative max-w-[420px] mx-auto">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-60 object-cover group-hover:opacity-90 transition duration-300"
                />
                <FaHeart className="absolute top-4 right-4 text-white hover:text-blue-500 cursor-pointer" />
                <div className="p-8">
                  <span className="text-green-400 text-xs font-medium">{property.type}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-1">{property.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{property.desc}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <FaMapMarkerAlt className="mr-1 text-blue-400" /> {property.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-bold text-sm">{property.price}</span>
                    <button className="px-4 py-2 bg-blue-500 rounded-md text-sm hover:bg-blue-600 transition">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/property">
            <button className="px-6 py-2 text-sm font-medium bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition rounded-md">
              Explore More Properties
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
