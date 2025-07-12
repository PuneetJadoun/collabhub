const features = [
  {
    title: 'Raise a Requirement',
    icon: '➕',
    desc: 'Post your project ideas and find the perfect teammates who share your vision and skills.'
  },
  {
    title: 'Join a Project',
    icon: '🤝',
    desc: 'Browse exciting projects and join teams that match your interests and expertise.'
  },
  {
    title: 'Specialization Spaces',
    icon: '📚',
    desc: 'Connect with peers in your field of study and explore cross-disciplinary collaborations.'
  },
  {
    title: 'Share Resources',
    icon: '🔗',
    desc: 'Exchange knowledge, tools, and resources to accelerate your learning journey.'
  }
];

function FeaturesGrid() {
  return (
    <section className="py-24 px-4 bg-gray-950 flex flex-col items-center justify-center" id="features">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-['Space Grotesk'] z-10 drop-shadow-lg">Power Up Your Collaboration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="backdrop-blur-lg bg-gray-900/80 border border-blue-400/10 rounded-3xl p-8 flex flex-col items-center shadow-2xl hover:scale-105 transition-all duration-200 font-['Space Grotesk']">
            <span className="text-5xl mb-4 drop-shadow-lg">{f.icon}</span>
            <h3 className="text-2xl font-bold mb-2 text-blue-200">{f.title}</h3>
            <p className="text-gray-200 text-center text-lg">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesGrid; 