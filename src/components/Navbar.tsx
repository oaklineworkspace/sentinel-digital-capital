import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Sentinel Digital Capital</Link>
        <div className="space-x-6">
          <Link href="/about">About</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/investment-plans">Plans</Link>
          <Link href="/security">Security</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard" className="font-semibold">Login</Link>
        </div>
      </div>
    </nav>
  );
}
