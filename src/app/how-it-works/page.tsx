import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-12 text-blue-900">How It Works</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h2 className="text-xl font-semibold mb-2">Create Account</h2>
              <p>Sign up in minutes with our secure registration process.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h2 className="text-xl font-semibold mb-2">Choose a Plan</h2>
              <p>Select the investment plan that fits your financial goals.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h2 className="text-xl font-semibold mb-2">Start Investing</h2>
              <p>Monitor your portfolio performance in real-time through our dashboard.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
