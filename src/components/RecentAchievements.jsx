const data_achievement = [
  {
    title: "1st Place in National Robotics Challenge",
    desc: "Our team secured the top spot with an innovative autonomous robot design.",
  },
  {
    title: "Published Research in Robotics Journal",
    desc: "Our members' paper on AI-driven robotics was featured in a leading journal.",
  },
];

const RecentAchievements = () => {
  return (
    <section className="py-16 px-4 bg-black bg-opacity-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Recent Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data_achievement.map((achieveData, index) => (
            <div
              key={index}
              className="bg-white/95 hover:bg-white rounded-md p-6 hover:scale-102 shadow-lg transition duration-200"
            >
              <h3 className="text-xl text-black font-semibold mb-2">
                {achieveData.title}
              </h3>
              <p className="text-stone-600">{achieveData.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentAchievements;
