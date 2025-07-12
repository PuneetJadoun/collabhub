const steps = [
  {
    title: 'Sign up',
    icon: '📝',
    desc: 'Create your free account in seconds.'
  },
  {
    title: 'Post or join requirements',
    icon: '📢',
    desc: 'Start a project or join one that excites you.'
  },
  {
    title: 'Collaborate with your buddy',
    icon: '🤗',
    desc: 'Work together, learn, and achieve your goals.'
  }
];

function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-gray-900 flex flex-col items-center justify-center" id="howitworks">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-['Fira Mono'] z-10 drop-shadow-lg">How It Works</h2>
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center w-full">
            {/* Step number and line */}
            <div className="flex flex-col items-center mr-6">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold font-['Fira Mono'] shadow-lg border-4 border-blue-300">{i + 1}</div>
              {i < steps.length - 1 && <div className="w-1 h-16 bg-blue-300/40" />}
            </div>
            {/* Step content */}
            <div className="flex-1 bg-gray-950/80 rounded-2xl p-6 mb-8 shadow-lg font-['Fira Mono']">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{s.icon}</span>
                <h3 className="text-xl font-bold text-blue-200">{s.title}</h3>
              </div>
              <p className="text-gray-200 text-base ml-9">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks; 