function Footer() {
  return (
    <footer className="w-full py-10 bg-gray-950 flex flex-col items-center justify-center font-['Space Grotesk']">
      <div className="text-center text-gray-300 text-base mb-4">&copy; {new Date().getFullYear()} CollabHub</div>
      <ul className="flex flex-wrap justify-center gap-8 text-base mb-2">
        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
        <li><a href="#" className="hover:text-blue-400 transition">College Disclaimer</a></li>
      </ul>
    </footer>
  );
}

export default Footer; 