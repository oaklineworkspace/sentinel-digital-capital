import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-blue-900">About Sentinel Digital Capital</h1>
          <div className="prose prose-blue max-w-none">
            <p className="text-lg mb-6">
              Sentinel Digital Capital is a leading digital asset investment management firm. Our mission is to provide secure, transparent, and accessible investment opportunities in the burgeoning digital economy.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p className="mb-6">
              We envision a world where digital assets are a core part of every diversified portfolio, managed with the same professional rigor and regulatory compliance as traditional assets.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
            <p>
              Our team consists of seasoned financial professionals and blockchain experts dedicated to protecting and growing our clients' wealth.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
