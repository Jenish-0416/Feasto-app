import React from "react";
import { mockData } from "./mockData";

export default function FeaturedCards() {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Featured Dishes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {mockData.cards.map((card) => (
          <div
            key={card.id}
            className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-md">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
