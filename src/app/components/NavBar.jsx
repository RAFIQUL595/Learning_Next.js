"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  // Hide NavBar on specific routes
  if (!pathname.includes("dashboards") || pathname.includes("authPages")) {
    return (
      <div className="flex justify-center pt-4">
        <ul className="flex justify-between w-1/2">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NavBar;
