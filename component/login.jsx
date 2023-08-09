import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        signedin as {session.user.email}
        <button onClick={() => signOut()}>sign out</button>
      </>
    );
  }

  return (
    <>
      not signed in
      <button onClick={() => signIn()}>signIn</button>
    </>
  );
}
