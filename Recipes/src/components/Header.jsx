import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center">
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-pink-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
        <h1 className="text-2xl font-bold text-pink-500">Cheffify</h1>
      </div>

      <div className="mx-6 max-w-xl flex-1">
        <div className="relative">
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="w-full rounded-md bg-gray-100 px-4 py-2 focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2.5 right-3 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          What to cook
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Recipes
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Ingredients
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Occasions
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          About Us
        </a>
      </nav>

      <div className="flex items-center">
        <button className="mr-4 font-medium text-pink-500">Login</button>
        <button className="rounded-md bg-pink-500 px-4 py-2 font-medium text-white hover:bg-pink-600">
          Subscribe
        </button>
      </div>
    </header>
  );
};

export default Header;
