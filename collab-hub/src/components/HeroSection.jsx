function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full overflow-hidden px-4" id="hero">
      
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500 via-purple-500 to-fuchsia-500 opacity-40 rounded-full blur-3xl animate-blob z-0" />
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">
          Find Your
          <span className="block relative">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Project Buddy</span>
            <span className="absolute left-1/2 -bottom-2 w-2/3 h-2 bg-blue-400/40 blur-md rounded-full -translate-x-1/2 animate-pulse" />
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-inter max-w-2xl">Where collaboration meets creativity. <span className="text-blue-300">Build. Learn. Succeed.</span></p>
        <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl shadow-xl hover:scale-105 hover:shadow-blue-500/40 transition-all duration-200 animate-bounce-slow">Get Started</button>
      </div>
      {/* Extra creative floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-fuchsia-400 opacity-30 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400 opacity-20 rounded-full blur-2xl animate-float-slower" />
    </section>
  );
}

export default HeroSection; 