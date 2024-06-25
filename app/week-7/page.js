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
  
  const handleItemSelect = (itemName) => {
    // Remove size and emojis from item name
    const cleanedItemName = itemName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="p-6 min-h-screen bg-gray-400 flex justify-center ">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">Shopping List</h1>
        <NewItem onAddItem = {handleAddItem}/>
        <ItemList items = {items} onItemSelect = {handleItemSelect}/>
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
  