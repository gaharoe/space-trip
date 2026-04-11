"use client"

import { useState } from "react";

export default function CategoryBar() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", "T-Shirt", "Jeans"];
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex overflow-x-auto min-w-0 w-full py-3 gap-3">
      {categories.map((category) => (
        <button
          key={category}
          className={`text-sm shrink-0 py-1 px-3 rounded ${
            activeCategory === category ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}