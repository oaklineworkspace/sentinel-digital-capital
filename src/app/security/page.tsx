import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Security() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-blue-900">Security & Protection</h1>
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Asset Protection</h2>
              <p className="text-gray-700">We utilize multi-signature cold storage for the majority of digital assets, ensuring they remain offline and protected from unauthorized access.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Encryption</h2>
              <p className="text-gray-700">All sensitive data is encrypted using military-grade AES-256 encryption both in transit and at rest.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Two-Factor Authentication (2FA)</h2>
              <p className="text-gray-700">We mandate 2FA for all account activities, providing an extra layer of security for your login and transactions.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
