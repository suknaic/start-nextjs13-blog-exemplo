import Link from "next/link";
import React from "react";

type NavLink = {
  href: string;
  children: React.ReactNode
}


const Navlink = ({href, children}: NavLink) => {
  return (
    <Link className="hover:text-gray-300 hover:underline" href={href}>
      {children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <div className="bg-neutral-800">
      <nav className="container py-2 mx-auto">
        <ul className="flex space-x-6 text-lg justify-center">
          <li>
            <Navlink href="/">Home</Navlink>
          </li>
          <li>
            <Navlink href="/blog">Blog</Navlink>
          </li>
          <li>
            <Navlink href="https://github.com/suknaic">GitHub</Navlink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
