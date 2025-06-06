'use client';
import React, { useState } from "react";
import Link from "next/link";
// import { RiSearch2Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" border-b-2  bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 mb-100 p-6 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        
        <Link href="/" className="text-xl font-bold text-gray-800">
          FutureFit
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-16 ">
          <Link href="/" className="text-black hover:text-purple-800">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-purple-800">
            About
          </Link>
          <Link href="/contactus" className="text-black hover:text-purple-800">
            Contact Us
          </Link>
           <Link href="/login" className="text-black hover:text-purple-600">
            Login
          </Link>
          {/* <form className="flex items-center px-2">
            <input
              className=" bg-transparent outline-none"
              type="search"
              placeholder="Search..."
            />
          </form> */}
          {/* <Link href="/signup" className="text-gray-800 hover:text-purple-600">
            Sign Up
          </Link> */}
        </div>

        {/* Mobile Menu */}
        <div className={`${menuOpen ? 'block' : 'hidden'} w-full mt-4 lg:hidden`}>
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-black hover:text-purple-600">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-purple-600">
            About
            </Link>
            <Link href="/contactus" className="text-black hover:text-purple-600">
              Contact Us
            </Link>
            <Link href="/login" className="text-black hover:text-purple-600">
              Login
            </Link>
            {/* <Link href="/signup" className="text-gray-800 hover:text-purple-600">
              Sign Up
            </Link> */}
            {/* <form className="flex items-center mt-2">
              <input
                className="bg-transparent outline-none w-full"
                type="search"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="text-blue-500 p-2"
                aria-label="Search"
              >
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
