"use client";

import NewItem from "./new-item";

export default function Page () {
    return (
        <main className = "p-6 bg-black min-h-screen flex justify-center">
            <div className = "max-w-lg"></div>
            <NewItem/>
        </main>
    );
}