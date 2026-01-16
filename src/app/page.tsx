import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const heroBg = '/attached_assets/stock_images/modern_glass_office__470b88e7.jpg';
  const vaultIcon = '/attached_assets/generated_images/secure_cryptocurrency_vault_and_growth_icon.png';
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={heroBg} 
              alt="Financial District Investment" 
              fill 
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="lg:w-3/5">
              <span className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-200 text-sm font-bold mb-6 tracking-wide uppercase">
                Trusted by 150k+ Global Investors
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
                Invest in the <br />
                <span className="text-yellow-500">Digital Future</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-xl font-light leading-relaxed">
                Experience institutional-grade asset management with advanced security and transparent growth strategies.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/dashboard" className="px-12 py-5 bg-yellow-500 text-blue-900 font-black rounded-2xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(234,179,8,0.3)] text-center text-lg">
                  Open Your Account
                </Link>
                <Link href="/how-it-works" className="px-12 py-5 border-2 border-white/20 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white transition-all text-center text-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-20 border-b relative z-10 -mt-12 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)]">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="group border-r border-gray-100 last:border-0 px-4">
                <p className="text-5xl font-black text-blue-900 mb-2 group-hover:scale-110 transition-transform">$2.4B+</p>
                <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-black">Assets Managed</p>
              </div>
              <div className="group border-r border-gray-100 last:border-0 px-4">
                <p className="text-5xl font-black text-blue-900 mb-2 group-hover:scale-110 transition-transform">150K+</p>
                <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-black">Active Investors</p>
              </div>
              <div className="group border-r border-gray-100 last:border-0 px-4">
                <p className="text-5xl font-black text-blue-900 mb-2 group-hover:scale-110 transition-transform">24/7</p>
                <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-black">Monitoring</p>
              </div>
              <div className="group border-r border-gray-100 last:border-0 px-4">
                <p className="text-5xl font-black text-blue-900 mb-2 group-hover:scale-110 transition-transform">99.9%</p>
                <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-black">Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Focus */}
        <section className="py-32 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]"></div>
                <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src={vaultIcon} 
                    alt="Secure growth technology" 
                    width={800} 
                    height={600} 
                    className="rounded-[2.5rem]"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4 block">Security First</span>
                <h2 className="text-5xl font-black text-blue-900 mb-8 leading-tight">Institutional Grade <br />Security Infrastructure</h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                  We bridge the gap between traditional finance and the digital future. Our platform employs multi-signature cold storage and real-time threat detection to ensure your assets are always protected.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {['Multi-sig wallet architecture', 'AES-256 military-grade encryption', 'Third-party security audits', '24/7 proactive monitoring'].map((item) => (
                    <div key={item} className="flex items-center text-gray-700 font-bold bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/security" className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-bold rounded-2xl hover:bg-blue-800 transition-all hover:gap-4 gap-2 shadow-xl">
                  Explore Security Protocols
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4 block">The Sentinel Edge</span>
              <h2 className="text-5xl font-black text-blue-900 mb-6">Built for Serious Investors</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">Combining legacy financial wisdom with the power of decentralized technology.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Military Security', desc: 'Multi-sig cold storage for all digital assets.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
                { title: 'Global Compliance', desc: 'Operating under strict regulatory frameworks.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { title: 'Elite Management', desc: 'Decades of experience in global markets.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
                { title: 'Live Insights', desc: 'Real-time visibility into your portfolio.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
              ].map((feature, i) => (
                <div key={i} className="group p-10 bg-gray-50 rounded-[2.5rem] hover:bg-blue-900 transition-all duration-500 shadow-sm hover:shadow-2xl border border-gray-100 hover:border-blue-900 hover:-translate-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-900 group-hover:bg-blue-800 group-hover:text-white transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} /></svg>
                  </div>
                  <h3 className="font-black text-2xl mb-4 text-blue-900 group-hover:text-white transition-colors duration-500">{feature.title}</h3>
                  <p className="text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-950 py-32 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-6xl font-black mb-8 tracking-tighter">Ready to Build <br />Your Legacy?</h2>
            <p className="text-2xl text-blue-200 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Join 150,000+ high-net-worth investors managing their future with Sentinel.
            </p>
            <Link href="/dashboard" className="inline-block px-14 py-6 bg-yellow-500 text-blue-950 font-black rounded-[1.5rem] hover:bg-yellow-400 transition-all hover:scale-110 shadow-[0_25px_60px_rgba(234,179,8,0.4)] text-xl uppercase tracking-widest">
              Create Your Account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
