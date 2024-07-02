//C:\cprg306-projects\cprg306-assignments\app\week-8\shopping-list\page.js
"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "");
    setSelectedItemName(cleanedItemName);
  };

  return user ? (
    <main className="p-6 min-h-screen bg-gray-400 flex justify-center">
      <div className="max-w-6xl w-full flex">
        <div className="w-1/3 pr-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-2/3 pl-4">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  ) : null;
}