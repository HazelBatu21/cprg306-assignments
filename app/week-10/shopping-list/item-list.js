//week-10/item-list.js
"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-700 text-white" : "bg-gray-500"}`}
        >  
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-700 text-white" : "bg-gray-500"}`}
        > 
          Sort by Category
        </button>
      </div>
      <ul className="divide-y divide-gray-200 border border-gray-300 rounded-md p-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}
