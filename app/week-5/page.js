"use client";

import ItemList from "./item-list";

export default function Page() {
    return (
      <main className="p-6 bg-black min-h-screen flex justify-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl font-bold mb-6 text-center">Shopping List</h1>
          <ItemList />
        </div>
      </main>
    );
  }