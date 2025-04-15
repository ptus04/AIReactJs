import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-100 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-md flex items-center justify-center mr-2">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold">Logo</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1 px-4">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-white bg-pink-500 rounded-md"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>Teams</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span>Integrations</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Upgrade notification */}
      <div className="p-4 m-4 bg-blue-50 rounded-lg">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Upgrade"
            className="w-32 h-32 object-contain"
          />
        </div>
        <h3 className="text-center font-semibold mb-2">V2.0 is available</h3>
        <div className="flex justify-center">
          <button className="w-full border border-blue-400 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-100 transition-colors">
            Try now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-xs text-gray-500 flex items-center justify-center">
        <span>Made with</span>
        <img
          src="https://www.visily.ai/images/visily-logo.svg"
          alt="Visily"
          className="h-4 ml-1"
        />
      </div>
    </div>
  );
};

export default Sidebar;
