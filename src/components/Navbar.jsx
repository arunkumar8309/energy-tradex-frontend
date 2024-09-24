"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e6f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              ENERGY <span className="text-[#00a86b]">TRADEX</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#"
                className="text-xl text-gray-700 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-xl text-gray-700 hover:text-gray-900"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="px-4 py-2 text-xl font-medium text-white bg-[#00d084] rounded-md hover:bg-[#00b873] transition-colors duration-300"
              >
                Signup
              </Link>
              <Link
                href="/signing"
                className="px-4 py-2 text-xl font-medium text-white bg-[#00d084] rounded-md hover:bg-[#00b873] transition-colors duration-300"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00a86b]"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#00d084] hover:bg-[#00b873]"
            >
              Signup
            </Link>
            <Link
              href="/signing"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#00d084] hover:bg-[#00b873]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
