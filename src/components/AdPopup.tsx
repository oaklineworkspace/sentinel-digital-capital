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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative h-64">
          <Image 
            src="/images/crypto/btc.png" 
            alt="Bitcoin Promo" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-8 right-8">
            <span className="px-3 py-1 bg-yellow-500 text-blue-950 text-[10px] font-black uppercase tracking-widest rounded-full">
              Limited Offer
            </span>
            <h3 className="text-3xl font-black text-white mt-2">Claim Your $50 Welcome Bonus</h3>
          </div>
        </div>
        
        <div className="p-8">
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Start your digital asset journey today with Sentinel Digital. Secure, fast, and professional.
          </p>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-200"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
