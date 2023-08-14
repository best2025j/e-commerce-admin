import React from "react";

export default function Loading() {
  return (
    // Or a custom loading skeleton component
    <div className="flex justify-center flex-col items-center h-screen w-screen">
      <p className="text-2xl font-bold">Loading...</p>
    </div>
  );
}
