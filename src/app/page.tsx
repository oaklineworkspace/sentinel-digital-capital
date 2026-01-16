import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Secure & Transparent Digital Asset Investment Management
          </h1>
          <p className="text-xl mb-8">
            Manage your crypto investments with confidence and full control.
          </p>
          <div className="space-x-4">
            <Link href="/dashboard" className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded hover:bg-yellow-600 transition">
              Get Started
            </Link>
            <Link href="/how-it-works" className="px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-900 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Sentinel Digital Capital</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-semibold text-xl mb-2">Security</h3>
              <p>State-of-the-art encryption and 2FA protect your investments.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-semibold text-xl mb-2">Compliance</h3>
              <p>We prioritize regulatory compliance and transparency.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-semibold text-xl mb-2">Professional Management</h3>
              <p>Experienced team ensures your portfolio is handled responsibly.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-semibold text-xl mb-2">Transparency</h3>
              <p>Clear dashboards and real-time tracking of your investments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Investment Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
              <p>Minimum Investment: $100</p>
              <p>Track your investments with our user-friendly dashboard.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Standard Plan</h3>
              <p>Minimum Investment: $1,000</p>
              <p>Moderate portfolio management with advanced tracking tools.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
              <p>Minimum Investment: $10,000</p>
              <p>Advanced management features for experienced investors.</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ⚠ All investments carry risk. Returns are not guaranteed.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="mb-6 text-gray-700">
            Create an account today and manage your digital asset portfolio with confidence.
          </p>
          <Link href="/dashboard" className="px-8 py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
