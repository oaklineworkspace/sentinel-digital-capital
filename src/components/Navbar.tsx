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
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-500 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-emerald-950 leading-none tracking-tight">SENTINEL</span>
              <span className="text-xs font-bold text-emerald-600 tracking-[0.2em]">DIGITAL CAPITAL</span>
            </div>
          </Link>

          {/* Desktop Menu - Consolidated Dropdown */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center px-4 py-2 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-100 hover:bg-emerald-100 transition font-bold focus:outline-none"
              >
                Explore Options
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-2xl py-3 z-50 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Investment Vehicles</div>
                <Link href="/investment-plans" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-900">Fixed Yield Plans</Link>
                <Link href="/investment-plans" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-900">Staking Rewards</Link>
                <Link href="/investment-plans" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-900">DeFi Liquidity Pools</Link>
                <Link href="/investment-plans" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-900">Institutional Treasury</Link>
                
                <div className="border-t border-gray-50 my-2 mx-4"></div>
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Resources</div>
                <Link href="/about" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-900">Company Heritage</Link>
                <Link href="/security" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-900">Security Protocols</Link>
                <Link href="/faq" className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-900">Help Center</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" className="px-5 py-2.5 rounded-lg border border-emerald-900 text-emerald-900 font-semibold hover:bg-emerald-50 transition">Login</Link>
            <Link href="/dashboard" className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow-sm">Open Account</Link>
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
