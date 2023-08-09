import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-screen">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p className="text-sm text-[#5f50ff]">Could not find requested resource</p>
      <Link href="/" className="text-[#F87448]/50">Return Home</Link>
    </div>
  );
}
