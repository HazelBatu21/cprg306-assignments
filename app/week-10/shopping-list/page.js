//C:\cprg306-projects\cprg306-assignments\app\week-10\shopping-list\page.js
"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import {getItems, addItem, deleteItem} from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth(); // Import firebaseSignOut
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push('/week-10');
    } else {
      const loadItems = async () => {
        const fetchedItems = await getItems (user.uid);
        setItems(fetchedItems);
      };
      loadItems ();
    }
  }, [user, router]);

  const handleSignOut = async () => {
    await firebaseSignOut();
    router.push('/week-10'); // Redirect to home page after logout
  };

  const handleAddItem = async(newItem) => {
    const itemId = await addItem(user.uid, newItem);
    setItems((prevItems) => [...prevItems, {id: itemId, ...newItem}]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "");
    setSelectedItemName(cleanedItemName);
  };

  const handleDeleteItem = async (itemId) => {
    await deleteItem(user.uid, itemId);
    setItems ((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return user ? (
    <main className="p-6 min-h-screen bg-gray-400 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <div className="w-2/3  flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Shopping List</h1>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white font-bold text-l px-12 py-3 rounded-md ml-auto"
          >
            Logout
          </button>
        </div>
        <div className="w-full flex">
          <div className="w-2/3 pr-4">
          
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="w-2/3 pl-4">
            {selectedItemName && <MealIdeas ingredient={selectedItemName} onDeleteItem={handleDeleteItem}/>}
          </div>
        </div>
      </div>
    </main>
  ) : null;
}