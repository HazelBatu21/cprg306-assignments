//week-6/new-tems.js
"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { name, quantity, category }; 
    onAddItem(newItem);
    console.log(newItem); 
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-300 p-6 max-w-sm w-full rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 text-lg rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-4 px-4 rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
}
