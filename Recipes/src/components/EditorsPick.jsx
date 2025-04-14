import React from "react";
import RecipeCard from "./RecipeCard";

const EditorsPick = () => {
  const recipes = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Stuffed sticky rice ball",
      category: "Asian",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      authorName: "Jennifer King",
      description:
        "A traditional Asian recipe, stuffed with a savory-sweet pork filling. The rice is sticky, chewy and incredibly tasty.",
      likes: "27.5k",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1586707101133-4f0c4ce4e282?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Strawberry smoothie",
      category: "Beverage",
      authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      authorName: "Matthew Martinez",
      description:
        "A delightful blend of fresh strawberries, banana, creamy Greek yogurt, and honey or maple syrup. The perfect summer drink.",
      likes: "20.3k",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Latte Art",
      category: "Beverage",
      authorImage: "https://randomuser.me/api/portraits/women/62.jpg",
      authorName: "Sarah Hill",
      description:
        "Latte art is the method of pouring steamed milk into a shot of espresso, resulting in a pattern or design on the surface.",
      likes: "18.9k",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Butter fried noodles",
      category: "Asian",
      authorImage: "https://randomuser.me/api/portraits/men/76.jpg",
      authorName: "Julian Lopez",
      description:
        "Butter fried noodles: Savory noodles cooked in butter and stir-fried with various vegetables.",
      likes: "15.8k",
    },
  ];

  return (
    <div className="pb-16">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-pink-500">
            Editor's pick
          </h2>
          <p className="text-gray-600">
            Curated Culinary Delights: Handpicked Favorites by Our Expert
            Editors!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              category={recipe.category}
              authorImage={recipe.authorImage}
              authorName={recipe.authorName}
              description={recipe.description}
              likes={recipe.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
