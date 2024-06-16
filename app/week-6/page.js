"use client";

import {useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list"
import itemsData from "./items/json";

export default function Page() {
    const [items, setItems] = useState(itemsData;
    
      const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
      };
  
    )
    return (
      <main className="p-6 min-h-screen flex justify-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl font-bold mb-6 text-center">Shopping List</h1>
          <ItemList />
        </div>
      </main>
    );
  }