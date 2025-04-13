import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0F20] text-gray-400 py-24 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">
              <span className="text-blue-500">Homo</span>Deal
            </h1>
            <p className="text-sm">
              It's a never-ending journey of making homes smarter and your life simpler.
            </p>
            <div className="flex space-x-4 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <Icon
                  key={i}
                  className="text-white hover:text-blue-400 transition hover:scale-110 cursor-pointer"
                  size={18}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Account</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-blue-400 transition cursor-pointer">Profile</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Settings</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Billing</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Notifications</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">About</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-blue-400 transition cursor-pointer">Services</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Pricing</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Contact</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-blue-400 transition cursor-pointer">Community</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Help Center</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Support</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500 gap-2">
          <p>© {currentYear} All Rights Reserved by <span className="text-blue-400 font-medium">HomoDeal</span></p>
          <div className="flex space-x-4">
            <p className="hover:text-blue-400 cursor-pointer">Terms</p>
            <p className="hover:text-blue-400 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-blue-400 cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
