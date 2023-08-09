import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function page() {
  const { data: session } = useSession;
  if (!session) {
    return (
      <div className="bg-blue-900 h-screen w-screen flex items-center">
        <div className="w-full text-center">
          <button
            onClick={() => signIn("google")}
            className="px-4 p-2 rounded-full bg-white text-sm font-medium"
          >
            signIn with google
          </button>
        </div>
      </div>
    );
  }

  return <> Signed in as {session.user.email}</>;
}
