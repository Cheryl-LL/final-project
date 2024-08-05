"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="w-full bg-[#0B2C59] text-white text-center py-10">
        <h1 className="text-2xl font-bold">Bridging Abilities Patient System</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {user ? (
          // User is logged in
          <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg text-center">
            <p className="text-xl mb-4">Welcome, {user.displayName}</p>
            <p className="text-gray-700 mb-4">{user.email}</p>
            <img className="w-24 h-24 rounded-full mx-auto mb-4" src={user.photoURL} alt="User Avatar" />
            <div className="flex justify-center space-x-4">
              <Link className="px-4 py-2 bg-[#1a73e8] text-white rounded-lg hover:bg-[#1765cc] focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50" href="/pages/view-patient-list">
                Enter System
              </Link>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:ring-opacity-50"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          // User is not logged in
          <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg text-center">
            <button
              onClick={handleSignIn}
              className="w-full px-4 py-2 bg-[#1a73e8] text-white rounded-lg hover:bg-[#1765cc] focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            >
              GitHub Sign In
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
