function ContactSection() {
  return (
    <section className="py-24 px-4 bg-gray-950 flex flex-col items-center justify-center" id="contact">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-['Fira Mono'] z-10 drop-shadow-lg">Have Questions or Feedback?</h2>
      <p className="text-center text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-['Fira Mono'] z-10">We’d love to hear from you. Send us a message and we’ll reply soon.</p>
      <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto w-full">
        {/* Contact Info */}
        <div className="flex-1 backdrop-blur-lg bg-gray-900/80 border border-blue-400/10 rounded-3xl p-8 flex flex-col gap-4 shadow-2xl font-['Fira Mono']">
          <div className="flex items-center gap-3 text-lg"><span>📧</span> <span>collabhub@gmail.com</span></div>
          <div className="flex items-center gap-3 text-lg"><span>🌐</span> <span>collabhub.com</span></div>
          <div className="flex items-center gap-3 text-lg"><span>📱</span> <span>+91-XXXX-XXXXXX</span></div>
        </div>
        {/* Contact Form */}
        <form className="flex-1 backdrop-blur-lg bg-gray-900/80 border border-purple-400/10 rounded-3xl p-8 flex flex-col gap-4 shadow-2xl font-['Fira Mono']">
          <input className="p-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Name" required />
          <input className="p-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email" type="email" required />
          <input className="p-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Subject" required />
          <textarea className="p-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Message" rows={4} required />
          <button type="submit" className="mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection; 