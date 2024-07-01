"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from 'next/router';

export default function HomePage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const handleSignIn = async () => {
        await gitHubSignIn();
        router.push('/shopping-list');
     };

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
            {!user ? (
                <button
                    onClick={handleSignIn}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Login with GitHub
                </button>
            ) : (
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button
                        onClick={handleSignOut}
                        className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                >
                    Logout
                </button>
                
            <div className="mt-4">
                <a href="/shopping-list" className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Go to Shopping List
                </a>
            </div>
        </div>
      )}
    </div>
  );
}
