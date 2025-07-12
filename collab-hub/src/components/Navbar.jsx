function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-gray-950/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-400">⚡</span>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">CollabHub</span>
      </div>
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
        <li><a href="#howitworks" className="hover:text-blue-400 transition">How It Works</a></li>
        <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>
      <button className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition">Login</button>
    </nav>
  );
}

export default Navbar; 