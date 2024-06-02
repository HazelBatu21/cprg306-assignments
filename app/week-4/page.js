"use client";

import NewItem from "./new-item";

export default function Page () {
    return (
        <main className = "p-6 bg-gray-50 min-h-screen flex justify-center">
            <div className = "max-w-3xl w-full"></div>
                <h1 classname = "text-2xl font-bold mb-6 text-center">Add New Item</h1>
            <NewItem/>
        </main>
    );
}