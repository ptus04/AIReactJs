import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Hero background image */}
      <img
        src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        alt="Kitchen background"
        className="h-full w-full object-cover"
      />

      {/* Recipe of the day card */}
      <div className="absolute top-1/2 left-28 max-w-md -translate-y-1/2 transform rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-medium">
          Recipe of the day
        </div>
        <h2 className="mb-2 text-2xl font-bold">Salad Caprese</h2>
        <p className="mb-4 text-gray-600">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, basil,
          olive oil, and balsamic vinegar create a refreshing dish for sunny or
          special days.
        </p>

        <div className="mb-4 flex items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Chef"
            className="mr-2 h-8 w-8 rounded-full"
          />
          <span className="text-sm text-gray-500">By Chef Sophia</span>
        </div>

        <button className="rounded-full bg-pink-500 px-6 py-2 text-sm font-medium text-white hover:bg-pink-600">
          View more
        </button>
      </div>
    </div>
  );
};

export default Hero;
