const team = [
  { name: 'Harsh', avatar: '🧑‍💻' },
  { name: 'Prakher', avatar: '🧑‍💻' },
  { name: 'Puneet', avatar: '👨‍💻' },

];

function AboutTeam() {
  return (
    <section className="py-24 px-4 bg-gray-900 flex flex-col items-center justify-center" id="about">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-['Space Grotesk'] z-10 drop-shadow-lg">About the Team</h2>
      <p className="text-center text-xl text-gray-200 max-w-2xl mx-auto mb-12 font-['Space Grotesk'] z-10">Our mission is to empower students to connect, collaborate, and grow together through meaningful projects and shared learning experiences.</p>
      <div className="flex flex-wrap justify-center gap-10">
        {team.map((member, i) => (
          <div key={i} className="backdrop-blur-lg bg-gray-950/80 border border-purple-400/10 rounded-3xl p-8 w-56 flex flex-col items-center shadow-2xl font-['Space Grotesk']">
            <span className="text-6xl mb-2 drop-shadow-lg">{member.avatar}</span>
            <span className="text-lg font-bold text-purple-200">{member.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam; 