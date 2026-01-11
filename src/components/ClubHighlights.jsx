const club_highlight = [
              { title: 'Competitions', desc: 'Participate in thrilling robotics challenges.', icon: '🏆' },
              { title: 'Workshops', desc: 'Learn cutting-edge robotics skills.', icon: '🛠️' },
              { title: 'Projects', desc: 'Build innovative robots and gadgets.', icon: '🔧' },
              { title: 'Community', desc: 'Connect with fellow robotics enthusiasts.', icon: '👥' },
            ];

const ClubHighlights = () => {
  return (
    <section className="py-16 px-4 bg-black bg-opacity-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Club Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {club_highlight.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/95 hover:bg-white text-stone-800 hover:text-stone-900 hover:scale-102 rounded-md shadow-lg p-6 text-center transition duration-100"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl text-black font-semibold mb-2">
                {highlight.title}
              </h3>
              <p>{highlight.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClubHighlights;
