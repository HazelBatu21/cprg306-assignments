// app/week-8/page.js
"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link'; 
import { useRouter } from 'next/navigation';


export default function HomePage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const handleSignIn = async () => {
        await gitHubSignIn();
        router.push('/week-8/shopping-list'); // Navigate to shopping list after sign in
    };

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    return (
        <div className="min-h-screen bg-gray-200">
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <Link href="/week-8/shopping-list"className="text-gray-700 hover:text-gray-900 font-semibold text-lg">
                            Shopping List
                    
                    </Link>
                    {user && (
                        <div className="flex items-center space-x-4">
                            <p className="text-gray-700">Welcome, {user.displayName} ({user.email})</p>
                            <button
                                onClick={handleSignOut}
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-0">
                    {!user ? (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={handleSignIn}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Login with GitHub
                            </button>
                        </div>
                    ) : (
                        <div className="mt-4">
                            <p className="text-center">You are logged in.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}