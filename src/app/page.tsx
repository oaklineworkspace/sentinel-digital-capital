import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
            <div className="lg:w-2/3">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
                Secure & Transparent <br />
                <span className="text-yellow-500">Digital Asset</span> Management
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl">
                The institution-grade platform for managing your crypto investments with full control and military-grade security.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/dashboard" className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition shadow-lg text-center">
                  Get Started Today
                </Link>
                <Link href="/how-it-works" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition text-center">
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-900">$2.4B+</p>
                <p className="text-gray-600 uppercase tracking-wider text-sm">Assets Managed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">150K+</p>
                <p className="text-gray-600 uppercase tracking-wider text-sm">Active Investors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">24/7</p>
                <p className="text-gray-600 uppercase tracking-wider text-sm">Monitoring</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">99.9%</p>
                <p className="text-gray-600 uppercase tracking-wider text-sm">Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Professional Investors Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We combine traditional financial expertise with cutting-edge blockchain technology.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-blue-900">Unrivaled Security</h3>
                <p className="text-gray-600">Multi-sig cold storage and military-grade encryption for all your digital assets.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-blue-900">Regulatory Compliance</h3>
                <p className="text-gray-600">Operating under strict regulatory frameworks to ensure transparency and accountability.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-blue-900">Expert Management</h3>
                <p className="text-gray-600">Our portfolio managers have decades of experience in traditional and digital markets.</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-blue-900">Real-time Insights</h3>
                <p className="text-gray-600">Full visibility into your portfolio performance with advanced reporting tools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-20 border-t">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Start Your Journey with Sentinel</h2>
            <p className="text-xl text-gray-700 mb-10">
              Join thousands of investors who trust Sentinel Digital Capital with their future.
            </p>
            <Link href="/dashboard" className="inline-block px-10 py-5 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition shadow-xl">
              Create Your Professional Account
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
