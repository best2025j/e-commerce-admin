import React from "react";
import Nav from "./Nav";
// import { usesession, signIn } from "next-auth";

export default function Layout({ children }) {
  // const { data: session } = usesession();
  // if (!session) {
  //   return (
  //     <div className="bg-[#ffff] w-screen h-screen flex items-center">
  //       <div className="text-center w-full">
  //         <button
  //           onClick={() => signIn("google")}
  //           className="bg-[#0000ff] font-medium text-white p-2 px-4 rounded-full"
  //         >
  //           Login with Google
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-[#4d4de6] min-h-screen flex ">
      <Nav />
      <div className="bg-white flex-grow mt-1 mr-2 mb-2 rounded-2xl p-4">
        {children}
      </div>
    </div>
  );
}
