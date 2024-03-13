"use client";
import Link from "next/link";
import { useUser,useClerk  } from "@clerk/nextjs";

function Navbar() {
  const { signOut } = useClerk();
  const {user} = useUser();
  

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <Link href="/">
        <span className="text-white text-xl font-bold">ANSH</span>
      </Link>
      <div>
        {user ? (
          <>
            <span className="text-white mr-4">{user.firstName}</span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/sign-in" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
