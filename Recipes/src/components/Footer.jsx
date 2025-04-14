import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 pb-6 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="mb-4 text-sm text-gray-400">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-300 focus:outline-none"
              />
              <button className="absolute top-0 right-0 h-full rounded-r-md bg-pink-500 px-3">
                Send
              </button>
            </div>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Learn More</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400">
                  Our Cooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Recipes</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400">
                  What to Cook This Week
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Pasta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Vegetarian
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Vegan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Seafood
                </a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400">
                  Gift Subscription
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-6 md:flex-row">
          <div className="flex items-center">
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-pink-500">Cheffify</span>
          </div>
          <p className="mt-4 text-xs text-gray-500 md:mt-0">
            2023 Cheffify Company | Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
