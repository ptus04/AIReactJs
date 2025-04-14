import React from "react";
import RecipeCard from "./RecipeCard";

const SummerRecipes = () => {
  const recipes = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Italian-style tomato salad",
      category: "Salad",
      likes: "23.4k",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Spaghetti with vegetables",
      category: "Pasta/Vegan",
      likes: "18.7k",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Lotus delight salad",
      category: "Salad",
      likes: "15.6k",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Snack cakes",
      category: "Dessert",
      likes: "12.3k",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-pink-500">
            This Summer Recipes
          </h2>
          <p className="text-gray-600">
            We have all your Independence Day sweets covered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              category={recipe.category}
              likes={recipe.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerRecipes;
