import React from "react";

const RecipeCard = ({
  image,
  title,
  category,
  withVideo,
  authorImage,
  authorName,
  description,
  likes,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />

        {/* Save/favorite button */}
        <button className="absolute top-3 right-3 rounded-full bg-white p-1.5 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Video indicator if recipe has video */}
        {withVideo && (
          <div className="absolute right-3 bottom-3 rounded-full bg-white p-1.5 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-lg font-bold">{title}</h3>
        <p className="mb-2 text-sm text-gray-500">{category}</p>

        {description && (
          <p className="mb-3 text-sm text-gray-600">{description}</p>
        )}

        <div className="flex items-center justify-between">
          {authorImage && authorName && (
            <div className="flex items-center">
              <img
                src={authorImage}
                alt={authorName}
                className="mr-2 h-8 w-8 rounded-full"
              />
              <span className="text-sm font-medium">{authorName}</span>
            </div>
          )}

          {likes && (
            <div className="flex items-center text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {likes} views
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
