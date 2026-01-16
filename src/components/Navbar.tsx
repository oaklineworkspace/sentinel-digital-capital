import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-blue-900 tracking-tight">SENTINEL</span>
            <span className="text-2xl font-light text-gray-500 tracking-tight">DIGITAL</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-900 transition font-medium">About</Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-blue-900 transition font-medium">How It Works</Link>
            <Link href="/investment-plans" className="text-gray-600 hover:text-blue-900 transition font-medium">Plans</Link>
            <Link href="/security" className="text-gray-600 hover:text-blue-900 transition font-medium">Security</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-900 transition font-medium">FAQ</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-900 transition font-medium">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="px-5 py-2.5 rounded-lg border border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition">Login</Link>
            <Link href="/dashboard" className="px-5 py-2.5 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition shadow-sm">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
