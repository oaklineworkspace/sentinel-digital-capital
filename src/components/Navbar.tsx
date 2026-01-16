'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-blue-900 tracking-tight">SENTINEL</span>
            <span className="text-2xl font-light text-gray-500 tracking-tight">DIGITAL</span>
          </Link>

          {/* Desktop Menu - Consolidated Dropdown */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center px-4 py-2 bg-gray-50 text-blue-900 rounded-lg border border-gray-200 hover:bg-gray-100 transition font-bold focus:outline-none"
              >
                Menu
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-2xl py-3 z-50 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                <Link href="/about" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900">About Sentinel</Link>
                <Link href="/how-it-works" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900">How It Works</Link>
                <div className="border-t border-gray-50 my-2 mx-4"></div>
                <Link href="/investment-plans" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900">Investment Plans</Link>
                <Link href="/security" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900">Security & Assets</Link>
                <Link href="/faq" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900">Support FAQ</Link>
                <Link href="/contact" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-900">Contact Us</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" className="px-5 py-2.5 rounded-lg border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition">Login</Link>
            <Link href="/dashboard" className="px-5 py-2.5 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition shadow-sm">Get Started</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-900 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">About</Link>
            <Link href="/how-it-works" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">How It Works</Link>
            <Link href="/investment-plans" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">Plans</Link>
            <Link href="/security" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">Security</Link>
            <Link href="/faq" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">FAQ</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50 rounded-md">Contact</Link>
            <div className="pt-4 flex flex-col space-y-2 px-3">
              <Link href="/dashboard" className="w-full text-center px-5 py-2.5 rounded-lg border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition">Login</Link>
              <Link href="/dashboard" className="w-full text-center px-5 py-2.5 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
