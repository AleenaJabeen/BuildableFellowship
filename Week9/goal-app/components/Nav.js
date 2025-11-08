import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="m-0 p-4 bg-black text-white text-base">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
