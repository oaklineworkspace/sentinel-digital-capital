import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-blue-900">Dashboard</h1>
          <div className="bg-white p-12 rounded-lg shadow text-center">
            <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
            <p className="text-gray-600 mb-8">This is where you'll manage your portfolio and track your investments.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded">
                <p className="text-sm text-gray-500">Total Balance</p>
                <p className="text-2xl font-bold text-blue-900">$0.00</p>
              </div>
              <div className="p-6 bg-green-50 rounded">
                <p className="text-sm text-gray-500">Active Investments</p>
                <p className="text-2xl font-bold text-green-900">0</p>
              </div>
              <div className="p-6 bg-yellow-50 rounded">
                <p className="text-sm text-gray-500">Pending Transactions</p>
                <p className="text-2xl font-bold text-yellow-900">0</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
