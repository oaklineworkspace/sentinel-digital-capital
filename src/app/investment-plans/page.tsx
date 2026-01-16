import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function InvestmentPlans() {
  const plans = [
    { name: "Basic Plan", min: "$100", features: ["Dashboard Access", "Weekly Reports", "Email Support"] },
    { name: "Standard Plan", min: "$1,000", features: ["Advanced Tracking", "Bi-weekly Consultations", "Priority Support"] },
    { name: "Premium Plan", min: "$10,000", features: ["Dedicated Manager", "Real-time Alerts", "24/7 Phone Support"] }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-blue-900">Investment Plans</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <p className="text-blue-600 text-3xl font-bold mb-6">{plan.min}<span className="text-sm font-normal text-gray-500"> min.</span></p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-blue-900 text-white rounded font-semibold hover:bg-blue-800 transition">Select Plan</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
