export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Sentinel Digital Capital. All rights reserved.</p>
        <p className="text-sm mt-2">Digital assets carry risk. Returns are not guaranteed.</p>
      </div>
    </footer>
  );
}
