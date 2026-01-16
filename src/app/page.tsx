import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdPopup from '../components/AdPopup';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const heroBg = '/images/handshake.png';
  const tradersImg = '/images/hero-team.png';
  const securityImg = '/images/security-hub.png';
  const analystImg = '/images/analyst.png';
  const cryptoPattern = '/attached_assets/stock_images/cryptocurrency_logos_9a7c121c.jpg';

  const currencies = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,500', change: '+2.4%', icon: '/images/crypto/btc.png' },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,250', change: '+1.8%', icon: '/images/crypto/eth.png' },
    { name: 'Solana', symbol: 'SOL', price: '$98', change: '+5.2%', icon: '/images/crypto/sol.png' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '-0.4%', icon: '/images/crypto/ada.png' },
    { name: 'Polkadot', symbol: 'DOT', price: '$7.20', change: '+1.1%', icon: '/images/crypto/dot.png' },
    { name: 'Chainlink', symbol: 'LINK', price: '$14.80', change: '+3.7%', icon: '/images/crypto/link.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <AdPopup />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-emerald-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={heroBg} 
              alt="Professional Business Handshake" 
              fill 
              className="object-cover opacity-50 scale-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/40 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-left">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 rounded-full mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-200 text-[10px] font-black uppercase tracking-[0.2em]">Verified Wealth Partners</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                Welcome to the <br />
                <span className="text-emerald-400">Elite Tier.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-emerald-50/80 font-light max-w-xl leading-relaxed">
                Strategic digital asset management for sophisticated investors. We secure your future through human-verified high-yield strategies.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/dashboard" className="px-12 py-5 bg-emerald-500 text-white font-black rounded-2xl hover:bg-emerald-400 transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] text-lg uppercase tracking-wide flex items-center justify-center group">
                  Start Partnership
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/how-it-works" className="px-12 py-5 border border-white/30 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg uppercase tracking-wide text-center">
                  Our Mandate
                </Link>
              </div>
            </div>
          </div>

          {/* Scrolling Ticker */}
          <div className="absolute bottom-0 w-full bg-emerald-900/50 backdrop-blur-xl border-t border-white/10 py-4 overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee space-x-12">
              {[...currencies, ...currencies].map((c, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="relative w-6 h-6">
                    <Image src={c.icon} alt={c.name} fill className="object-contain" />
                  </div>
                  <span className="font-bold text-white">{c.symbol}</span>
                  <span className="text-emerald-100">{c.price}</span>
                  <span className={c.change.startsWith('+') ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>{c.change}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-32 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950 mb-4">Fortress Custody</h3>
                <p className="text-gray-600 leading-relaxed font-light">Multi-signature cold storage and institutional-grade encryption for total peace of mind.</p>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950 mb-4">Alpha-Yield Engine</h3>
                <p className="text-gray-600 leading-relaxed font-light">Proprietary algorithms verified by senior analysts to capture consistent market upside.</p>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-2xl font-black text-emerald-950 mb-4">24/7 Concierge</h3>
                <p className="text-gray-600 leading-relaxed font-light">Dedicated wealth managers available around the clock for institutional clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Real People Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0"></div>
                <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
                  <Image 
                    src={analystImg} 
                    alt="Institutional Analyst" 
                    width={800} 
                    height={600} 
                    className="hover:scale-105 transition-transform duration-700 object-cover aspect-[4/3]"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-xs border border-emerald-50 animate-bounce-slow">
                  <p className="text-emerald-900 font-black text-xl mb-1">Human Intelligence</p>
                  <p className="text-gray-500 text-sm italic">"Every algorithm is only as good as the expert who vets its logic."</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-4 block underline decoration-4 decoration-emerald-200 underline-offset-8">Trust & Excellence</span>
                <h2 className="text-5xl font-black text-emerald-950 mb-8 leading-tight">Professional Oversight <br />for Modern Portfolios</h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                  We don't just provide technology; we provide certainty. Our analysts monitor global capital flows 24/7, ensuring your digital fortune is always on the right side of the market.
                </p>
                <Link href="/about" className="text-emerald-900 font-black flex items-center group text-lg">
                  Explore our methodology
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section with image */}
        <section className="py-32 bg-emerald-950 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={securityImg} 
              alt="Security Hub" 
              fill 
              className="object-cover opacity-20 grayscale"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-black text-white mb-8">Uncompromising Security Infrastructure</h2>
              <p className="text-xl text-emerald-100/60 mb-12 font-light leading-relaxed">
                Your assets are protected by our proprietary Sentinel Shield™ protocol—a multi-layered defense system combining cold-storage custody with military-grade encryption and real-time biometric verification.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">99.9% Cold Storage</h4>
                    <p className="text-emerald-100/40 text-sm">Assets are kept offline in high-security physical vaults.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-1.173-9.571A13.474 13.474 0 005.712 21m0 0A13.47 13.47 0 017.5 21M5.712 21H12m0 0a13.47 13.47 0 01.465-4.011M12 21c3.115 0 5.965-1.116 8.172-2.967m-8.172 2.967a13.47 13.47 0 01-1.465-4.011M12 21c-3.115 0-5.965-1.116-8.172-2.967m8.172 2.967a13.47 13.47 0 001.465-4.011M12 21h8m-8-5.989V14m0-4h.01M12 7a4 4 0 110-8 4 4 0 010 8z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Biometric Keys</h4>
                    <p className="text-emerald-100/40 text-sm">Access required multi-factor biometric authentication.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Currency Support Section */}
        <section className="py-32 bg-emerald-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src={cryptoPattern} alt="Crypto pattern" fill className="object-cover grayscale" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Diversified Growth Assets</h2>
            <p className="text-xl text-emerald-200/60 max-w-2xl mx-auto mb-16 font-light">
              Explore our curated selection of high-performance digital assets, all managed within our secure institutional framework.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {currencies.map((c, i) => (
                <div key={i} className="group bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all hover:-translate-y-2">
                  <div className="relative w-16 h-16 mx-auto mb-6 transition-transform group-hover:scale-110">
                    <Image src={c.icon} alt={c.name} fill className="object-contain" />
                  </div>
                  <p className="font-bold mb-1 text-emerald-400">{c.symbol}</p>
                  <p className="text-white font-black text-xl">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
