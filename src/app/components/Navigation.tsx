"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Spin as Hamburger } from "hamburger-react";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <header
        className={`flex bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 text-white shadow-lg w-full h-20 justify-between px-10 ${
          isOpen ? "shadow-lg" : ""
        }`}
      >
        <Link href="/">
          <div className="flex justify-between items-center h-full space-x-3">
            <Image src="/logo.png" width={45} height={45} alt="Wishsong Logo" />
            <span className="font-montserrat text-2xl font-bold">wishsong</span>
          </div>
        </Link>
        <div className="flex lg:hidden md:hidden w-full items-center justify-end">
          <Hamburger rounded toggled={isOpen} toggle={setOpen} />
        </div>
        <nav className="hidden md:flex flex-row justify-between items-center h-full">
          <ul className="flex space-x-4 text-lg font-openSans">
            <li>
              <Link href="/" className="hover:text-gray-300">
                home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                about
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:text-gray-300">
                search
              </Link>
            </li>
            <li>
              <Link href="/lists" className="hover:text-gray-300">
                lists
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-gray-300">
                profile
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-gray-300">
                login
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 sm:drop-shadow-xl border-black text-white w-full h-fit px-10 py-5 lg:hidden md:hidden overflow-hidden origin-top duration-300 ${
          isOpen ? "" : "scale-y-0"
        }`}
      >
        <ul className="flex flex-col text-center space-y-2 text-lg font-openSans">
          <li>
            <Link href="/" className="hover:text-gray-300">
              home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              about
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-gray-300">
              search
            </Link>
          </li>
          <li>
            <Link href="/lists" className="hover:text-gray-300">
              lists
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-300">
              profile
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300">
              login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
