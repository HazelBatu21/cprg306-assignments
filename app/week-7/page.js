//week-7/page.js
"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list"
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState ("");
  
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  
  // clean up item name: remove size and emojis
  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="p-6 min-h-screen bg-gray-400 flex justify-center">
      <div className="max-w-6xl w-full flex">
        <div className="w-2/3 pr-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-2/3 pl-4">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}