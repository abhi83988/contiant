import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-sm text-gray-700 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Copyright */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">
              ⮌
            </div>
            <span className="font-bold text-lg text-gray-900">contiant</span>
          </div>
          <p className="text-xs text-gray-500">
            Copyright © 2025 Contiant Ltd.<br />
            All rights reserved.
          </p>
        </div>

        {/* About */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            {['Product', 'Use cases', 'Company', 'Blog'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="group relative inline-block transition-colors duration-200 text-gray-700 hover:text-gray-900"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">Platform</h4>
          <ul className="space-y-2">
            {['Developers', 'Log in', 'Status', 'Say Hi'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="group relative inline-block transition-colors duration-200 text-gray-700 hover:text-gray-900"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-gray-400 font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            {[
              'Privacy policy',
              'Terms of Use',
              'Cookie Policy',
              'Merchant Terms & Conditions',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="group relative inline-block transition-colors duration-200 text-gray-700 hover:text-gray-900"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
