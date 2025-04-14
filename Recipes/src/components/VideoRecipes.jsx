import React from "react";
import RecipeCard from "./RecipeCard";

const VideoRecipes = () => {
  const recipes = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Salad with cabbage and shrimp",
      category: "Seafood",
      withVideo: true,
      likes: "31.2k",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Salad of cave beans, shrimp and potatoes",
      category: "Seafood",
      withVideo: true,
      likes: "28.7k",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Sunny-side up fried egg",
      category: "Breakfast",
      withVideo: true,
      likes: "25.3k",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Lotus delight salad",
      category: "Salad",
      withVideo: true,
      likes: "19.8k",
    },
  ];

  return (
    <div className="pb-12">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-pink-500">
            Recipes With Videos
          </h2>
          <p className="text-gray-600">
            Cooking Up Culinary Creations with Step-by-Step Videos
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              category={recipe.category}
              withVideo={recipe.withVideo}
              likes={recipe.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoRecipes;
