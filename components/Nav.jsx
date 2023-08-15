"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-[#0000ff] rounded-l-3xl";

  const pathname = usePathname();
  console.log(pathname);   

  return (
    <div className="p-4 text-white pr-0">
      <span className="flex gap-1 mr-6">Ecommerce-Admin</span>
      <nav className="flex flex-col gap-2 ">
        <Link
          className={pathname === "/" ? activeLink : inactiveLink}
          // className={activeLink}
          href={"/"}
        >
          Dashboard
        </Link>
        <Link
          className={pathname.includes("/products") ? activeLink : inactiveLink}
          // className={inactiveLink}
          href={"/products"}
        >
          Products
        </Link>
        <Link
          // className={inactiveLink}
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
          href={"/orders"}
        >
          Orders
        </Link>
        <Link
          className={pathname.includes("/settings") ? activeLink : inactiveLink}
          // className={inactiveLink}
          href={"/settings"}
        >
          Settings
        </Link>
      </nav>
    </div>
  );
}
