import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import heroBg from '@assets/generated_images/institutional_digital_asset_investment_hero_background.png';
import vaultIcon from '@assets/generated_images/secure_cryptocurrency_vault_and_growth_icon.png';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={heroBg} 
              alt="Digital Investment background" 
              fill 
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="lg:w-2/3">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                Secure & Transparent <br />
                <span className="text-yellow-500">Digital Asset</span> Management
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl font-light">
                The institution-grade platform for managing your crypto investments with full control and military-grade security protocols.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/dashboard" className="px-10 py-5 bg-yellow-500 text-blue-900 font-bold rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-2xl text-center">
                  Get Started Today
                </Link>
                <Link href="/how-it-works" className="px-10 py-5 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-all text-center">
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16 border-b relative z-10 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-2xl shadow-2xl">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="border-r border-gray-100 last:border-0">
                <p className="text-4xl font-black text-blue-900 mb-1">$2.4B+</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Assets Managed</p>
              </div>
              <div className="border-r border-gray-100 last:border-0">
                <p className="text-4xl font-black text-blue-900 mb-1">150K+</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Active Investors</p>
              </div>
              <div className="border-r border-gray-100 last:border-0">
                <p className="text-4xl font-black text-blue-900 mb-1">24/7</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Monitoring</p>
              </div>
              <div className="border-r border-gray-100 last:border-0">
                <p className="text-4xl font-black text-blue-900 mb-1">99.9%</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Focus */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                  <Image 
                    src={vaultIcon} 
                    alt="Secure growth" 
                    width={600} 
                    height={450} 
                    className="relative z-10 rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Institutional Grade Security</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We bridge the gap between traditional finance and the digital future. Our platform employs multi-signature cold storage and real-time threat detection to ensure your assets are always protected.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Multi-signature wallet architecture', 'AES-256 military-grade encryption', 'Regular third-party security audits', '24/7 proactive monitoring'].map((item) => (
                    <li key={item} className="flex items-center text-gray-700 font-medium">
                      <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/security" className="text-blue-900 font-bold flex items-center hover:translate-x-2 transition-transform">
                  Learn about our security protocols
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Advantage</span>
              <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Why Professional Investors Choose Us</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">Combining traditional financial wisdom with modern technology.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="group p-8 bg-white rounded-3xl hover:bg-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-blue-900">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-900 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-blue-900 group-hover:text-white">Unrivaled Security</h3>
                <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">Multi-sig cold storage and military-grade encryption for all your digital assets.</p>
              </div>
              <div className="group p-8 bg-white rounded-3xl hover:bg-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-blue-900">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-900 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-blue-900 group-hover:text-white">Full Compliance</h3>
                <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">Operating under strict regulatory frameworks to ensure transparency and accountability.</p>
              </div>
              <div className="group p-8 bg-white rounded-3xl hover:bg-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-blue-900">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-900 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-blue-900 group-hover:text-white">Expert Management</h3>
                <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">Our portfolio managers have decades of experience in traditional and digital markets.</p>
              </div>
              <div className="group p-8 bg-white rounded-3xl hover:bg-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-blue-900">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-900 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-blue-900 group-hover:text-white">Real-time Insights</h3>
                <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">Full visibility into your portfolio performance with advanced reporting tools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 py-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl font-black mb-6">Start Your Journey Today</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join 150,000+ investors who trust Sentinel Digital Capital with their future wealth management.
            </p>
            <Link href="/dashboard" className="inline-block px-12 py-6 bg-yellow-500 text-blue-900 font-black rounded-2xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-2xl text-lg">
              Create Your Professional Account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
