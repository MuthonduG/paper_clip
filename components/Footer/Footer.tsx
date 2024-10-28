"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black font-sans text-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {/* Newsletter Subscription Section */}
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
              Subscribe to our newsletter for updates.
            </h1>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <p className="font-semibold">Quick Links</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              {['Home', 'Who We Are', 'Our Philosophy'].map((link, index) => (
                <p key={index} className="text-gray-400 hover:text-blue-500 hover:underline cursor-pointer">
                  {link}
                </p>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div>
            <p className="font-semibold">Industries</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              {['Retail & E-Commerce', 'Information Technology', 'Finance & Insurance'].map((industry, index) => (
                <p key={index} className="text-gray-400 hover:text-blue-500 hover:underline cursor-pointer">
                  {industry}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700 md:my-8 h-2" />

        {/* Social Media & Store Badges */}
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Store Links */}
          <div className="flex flex-1 gap-4 cursor-pointer">
            <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="Google Play Badge" />
            <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="App Store Badge" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 cursor-pointer">
            {[
              { src: "https://www.svgrepo.com/show/303114/facebook-3-logo.svg", alt: "Facebook" },
              { src: "https://www.svgrepo.com/show/303115/twitter-3-logo.svg", alt: "Twitter" },
              { src: "https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg", alt: "Instagram" },
              { src: "https://www.svgrepo.com/show/94698/github.svg", alt: "GitHub" },
              { src: "https://www.svgrepo.com/show/22037/path.svg", alt: "Path" },
              { src: "https://www.svgrepo.com/show/28145/linkedin.svg", alt: "LinkedIn" },
              { src: "https://www.svgrepo.com/show/22048/dribbble.svg", alt: "Dribbble" }
            ].map((icon, index) => (
              <img key={index} src={icon.src} width="30" height="30" alt={icon.alt} />
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
          © 2024 Style-Up Africa Investments. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
