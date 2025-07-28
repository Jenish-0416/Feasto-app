import React from "react";

interface FoodCardProps {
  image: string;
  title: string;
  tag: string;
  discount: string;
}

export function FoodCard({ image, title, tag, discount }: FoodCardProps) {
  return (
    <div className="relative w-[496px] h-[325px] rounded-[12px] overflow-hidden shadow-md">
    
      <div className="absolute top-0 right-4 bg-[#0A1026] text-white text-base font-semibold px-3 py-2 rounded-b-xl z-10">
        {discount}
      </div>

     
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300"
      />

    
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-6">
        <p className="text-[#FC8A06] text-lg font-medium">{tag}</p>
        <h3 className="text-white text-2xl font-bold w-[256px] leading-tight">{title}</h3>
      </div>
    </div>
  );
}
