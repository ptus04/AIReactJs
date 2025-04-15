import React from "react";

const StatCard = ({ title, value, percentage, periodText, bgColor, icon }) => {
  return (
    <div
      className={`${bgColor} p-6 rounded-lg flex-1 relative overflow-hidden`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-700 font-medium text-sm mb-1">{title}</h3>
          <p className="text-gray-900 text-3xl font-bold mb-4">{value}</p>
          <div className="flex items-center">
            <svg
              className="w-3 h-3 text-green-600 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a1 1 0 102 0V5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-green-600 text-sm font-medium">
              {percentage}
            </span>
            <span className="text-gray-500 text-sm ml-1">{periodText}</span>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md shadow-sm">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
