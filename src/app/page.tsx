import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdPopup from '../components/AdPopup';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const heroBg = '/images/hero-team.png';
  const tradersImg = '/images/hero-team.png';
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
              alt="Financial Experts Collaborating" 
              fill 
              className="object-cover opacity-20 scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-950/70 to-emerald-950"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1 bg-emerald-500/10 backdrop-blur-md border border-emerald-400/20 rounded-full text-emerald-300 text-xs font-bold mb-8 uppercase tracking-widest">
                Elite Institutional Investment
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                Grow Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Digital Fortune</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-emerald-100/80 font-light max-w-2xl mx-auto leading-relaxed">
                Experience the next generation of asset management. Secure, high-yield, and human-verified digital wealth strategies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/dashboard" className="px-12 py-5 bg-emerald-500 text-white font-black rounded-2xl hover:bg-emerald-400 transition-all hover:scale-105 shadow-2xl shadow-emerald-900/40 text-lg uppercase tracking-wide">
                  Start Investing
                </Link>
                <Link href="/how-it-works" className="px-12 py-5 border border-white/20 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-lg uppercase tracking-wide">
                  View Strategies
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

        {/* Real People Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-emerald-50 rounded-[3rem] -rotate-3"></div>
                <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
                  <Image 
                    src={tradersImg} 
                    alt="Professional trading team" 
                    width={800} 
                    height={600} 
                    className="hover:scale-105 transition-transform duration-700 object-cover aspect-[4/3]"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-xs border border-emerald-50">
                  <p className="text-emerald-900 font-black text-xl mb-1">Expert Verification</p>
                  <p className="text-gray-500 text-sm">Every trade is double-checked by our senior risk management committee.</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-4 block underline decoration-4 decoration-emerald-200 underline-offset-8">Trust & Excellence</span>
                <h2 className="text-5xl font-black text-emerald-950 mb-8 leading-tight">Professional Management <br />for Modern Wealth</h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                  We bridge the gap between traditional finance and digital assets. Our green-light strategies ensure your portfolio is always optimized for growth.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                    <p className="text-4xl font-black text-emerald-900 mb-1">100%</p>
                    <p className="text-emerald-600/60 text-xs font-bold uppercase tracking-widest">Asset Backed</p>
                  </div>
                  <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                    <p className="text-4xl font-black text-emerald-900 mb-1">Secured</p>
                    <p className="text-emerald-600/60 text-xs font-bold uppercase tracking-widest">Global Custody</p>
                  </div>
                </div>
                <Link href="/about" className="text-emerald-900 font-black flex items-center group">
                  Learn about our mandate
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
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
