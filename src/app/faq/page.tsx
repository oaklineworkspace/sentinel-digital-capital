import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FAQ() {
  const faqs = [
    { q: "What is the minimum investment?", a: "The minimum investment starts at $100 for our Basic Plan." },
    { q: "How do I withdraw my funds?", a: "Withdrawals can be requested via your dashboard and are typically processed within 24-48 hours." },
    { q: "Is my data safe?", a: "Yes, we use advanced encryption and strict security protocols to protect your personal and financial information." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-blue-900">Frequently Asked Questions</h1>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-bold mb-2">{faq.q}</h2>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
