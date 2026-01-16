import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">Contact Us</h1>
          <form className="bg-white p-8 rounded shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition">Send Message</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
