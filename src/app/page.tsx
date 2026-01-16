import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const heroBg = '/attached_assets/stock_images/modern_glass_office__470b88e7.jpg';
  const tradersImg = '/attached_assets/stock_images/traders_in_office_fi_85db107a.jpg';
  const cryptoPattern = '/attached_assets/stock_images/cryptocurrency_logos_9a7c121c.jpg';

  const currencies = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$42,500', change: '+2.4%' },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,250', change: '+1.8%' },
    { name: 'Solana', symbol: 'SOL', price: '$98', change: '+5.2%' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '-0.4%' },
    { name: 'Polkadot', symbol: 'DOT', price: '$7.20', change: '+1.1%' },
    { name: 'Chainlink', symbol: 'LINK', price: '$14.80', change: '+3.7%' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-blue-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={heroBg} 
              alt="Financial District" 
              fill 
              className="object-cover opacity-50 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-950/60 to-blue-950"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1 bg-blue-500/10 backdrop-blur-md border border-blue-400/20 rounded-full text-blue-300 text-xs font-bold mb-8 uppercase tracking-widest">
                Elite Digital Asset Management
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                Master the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Crypto Economy</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-blue-100/80 font-light max-w-2xl mx-auto leading-relaxed">
                Institutional-grade security and professional management for your digital wealth. Trusted by 150,000+ investors worldwide.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/dashboard" className="px-12 py-5 bg-yellow-500 text-blue-950 font-black rounded-2xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-2xl text-lg uppercase tracking-wide">
                  Start Investing
                </Link>
                <Link href="/how-it-works" className="px-12 py-5 border border-white/20 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-lg uppercase tracking-wide">
                  Learn Strategy
                </Link>
              </div>
            </div>
          </div>

          {/* Scrolling Ticker */}
          <div className="absolute bottom-0 w-full bg-blue-900/50 backdrop-blur-xl border-t border-white/10 py-4 overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee space-x-12">
              {[...currencies, ...currencies].map((c, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <span className="font-bold text-white">{c.symbol}</span>
                  <span className="text-blue-200">{c.price}</span>
                  <span className={c.change.startsWith('+') ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>{c.change}</span>
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
                <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -rotate-3"></div>
                <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <Image 
                    src={tradersImg} 
                    alt="Professional trading team" 
                    width={800} 
                    height={600} 
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-xs border border-gray-100">
                  <p className="text-blue-900 font-black text-xl mb-1">24/7 Expert Oversight</p>
                  <p className="text-gray-500 text-sm">Our team monitors global markets around the clock to protect your capital.</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4 block underline decoration-4 decoration-yellow-400 underline-offset-8">Market Leadership</span>
                <h2 className="text-5xl font-black text-blue-900 mb-8 leading-tight">Human Intelligence <br />meets Algorithmic Speed</h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                  We don't just rely on bots. Our senior portfolio managers vet every strategy, combining traditional market wisdom with high-frequency digital execution.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <p className="text-4xl font-black text-blue-900 mb-1">99.9%</p>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Security Record</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <p className="text-4xl font-black text-blue-900 mb-1">10+</p>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Regulated Jurisdictions</p>
                  </div>
                </div>
                <Link href="/about" className="text-blue-900 font-black flex items-center group">
                  Meet our leadership team
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Currency Support Section */}
        <section className="py-32 bg-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src={cryptoPattern} alt="Crypto pattern" fill className="object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Diversified Across <br />Top Digital Assets</h2>
            <p className="text-xl text-blue-200/60 max-w-2xl mx-auto mb-16 font-light">
              We manage a wide range of top-tier cryptocurrencies, providing you with a perfectly balanced portfolio for maximum risk-adjusted returns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {currencies.map((c, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-blue-400 font-bold mb-1">{c.symbol}</p>
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
