import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-extrabold text-white tracking-tight">SENTINEL</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Global leaders in secure digital asset management and institutional-grade investment solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/investment-plans" className="hover:text-white transition">Plans</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
              <li><Link href="/security" className="hover:text-white transition">Security</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Sentinel Digital Capital. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Digital assets are highly volatile and carry significant risk. Please consult with a financial advisor before investing.</p>
        </div>
      </div>
    </footer>
  );
}
