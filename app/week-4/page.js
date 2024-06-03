"use client";

import NewItem from "./new-item";

export default function Page () {
    return (
        <main className = "p-6 bg-black min-h-screen flex justify-center">
            <div className = "max-w-lg"></div>
                <h1 classname = "text-2xl font-bold mb-6 text-center">Add New Item</h1>
            <NewItem/>
        </main>
    );
}