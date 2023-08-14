import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Nav() {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-white text-[#0000ff] rounded-l-3xl";

  const router = useRouter();
  const { pathName } = router;
  //   console.log(router);
  return (
    <div className="p-4 text-white pr-0">
      <span className="flex gap-1 mr-4">Ecommerce Admin</span>
      <nav className="flex flex-col gap-2 ">
        <Link className={activeLink} href={"/"}>
          Dashboard
        </Link>
        <Link className={inactiveLink} href={"/products"}>
          Products
        </Link>
        <Link className={inactiveLink} href={"/orders"}>
          Orders
        </Link>
        <Link className={inactiveLink} href={"/settings"}>
          Settings
        </Link>
      </nav>
    </div>
  );
}
