'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AdPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-300 mx-auto">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm"
        >
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative h-48 sm:h-64">
          <Image 
            src="/images/crypto/btc.png" 
            alt="Bitcoin Promo" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/20 to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6 sm:bottom-6 sm:left-8 sm:right-8">
            <span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
              Limited Offer
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">Claim Your $50 Welcome Bonus</h3>
          </div>
        </div>
        
        <div className="p-6 sm:p-8">
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Start your digital asset journey today with Sentinel Digital. Secure, fast, and professional.
          </p>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-emerald-100"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
