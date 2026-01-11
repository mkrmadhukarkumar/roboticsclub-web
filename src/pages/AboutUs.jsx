import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Robotics Club | NITP";
  }, []);

  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Codes for Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About Robotics Club
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover our journey, mission, and the exciting world of robotics we
          build together.
        </p>
      </section>

      {/* Codes for Club History */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our History
          </h2>
          <div className="bg-white text-stone-800 bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <p className="text-lg leading-relaxed mb-4">
              <strong>Robotics Club</strong> has been embodiment of innovation
              at NIT Patna. Being formed in year 2015-16 by Nripendra Saroj Sir,
              our club boasts a glorious legacy. With our members ranging from
              seasoned coders to brilliant designers to hardware scientists, our
              members have also represented our college at Smart India
              hackathon, headed by our current Captain Dheeraj Kumar Sir. We
              have been constantly working to enhance the students’ technical
              skills and making them aware of the fascinating world of
              automation, robotics and electronics which surrounds us. Boasting
              of a huge roster of exciting and engaging events, This year’s
              techno-cultural fest was nothing less than a rollercoaster ride
              for us.
            </p>
            <p className="text-lg leading-relaxed">
              We have been constantly working to enhance the students’ technical
              skills and making them aware of the fascinating world of
              automation, robotics and electronics which surrounds us. Boasting
              of a huge roster of exciting and engaging events, This year’s
              techno-cultural fest was nothing less than a rollercoaster ride
              for us.
            </p>
          </div>
        </div>
      </section>

      {/* Codes for Mission, Vision, Objectives */}
      <section className="py-16 px-4 bg-black bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Mission, Vision & Objectives
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-xs bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg p-6 hover:cursor-pointer hover:scale-105 transition duration-200 text-center">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-white">
                To be a leading force in robotics innovation, inspiring the next
                generation of engineers and scientists to solve real-world
                problems through technology.
              </p>
            </div>
            <div className="w-xs bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 hover:cursor-pointer hover:scale-105 transition duration-200 text-center">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-white text-wrap">
                Empower students to explore, learn, and excel in robotics
                through hands-on projects, competitions, and collaborative
                research.
              </p>
            </div>
            <div className="w-xs bg-gradient-to-br from-green-500 to-teal-500 rounded-lg p-6 hover:cursor-pointer hover:scale-105 transition duration-200 text-center">
              <h3 className="text-2xl font-semibold mb-4">Objectives</h3>
              <ul className="text-white text-left list-disc list-inside">
                <li>Foster innovation in robotics</li>
                <li>Provide cutting-edge training</li>
                <li>Promote interdisciplinary collaboration</li>
                <li>Compete at the highest levels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Club Activities and Focus Areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Club Activities & Focus Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-8 cursor-default">
            <div className="w-sm bg-white/80 hover:bg-white rounded-lg p-6 text-center hover:scale-105 transition duration-200">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl text-black font-semibold mb-2">
                Competitions
              </h3>
              <p className="text-gray-500">
                Participate in thrilling robotics challenges, from local
                hackathons to international tournaments, showcasing our skills
                and creativity.
              </p>
            </div>
            <div className="w-sm bg-white/80 hover:bg-white rounded-lg p-6 text-center hover:scale-105 transition duration-200">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl text-black font-semibold mb-2">
                Workshops
              </h3>
              <p className="text-gray-500">
                Hands-on sessions covering robotics fundamentals, advanced
                programming, and emerging technologies like AI and IoT.
              </p>
            </div>
            <div className="w-sm bg-white/80 hover:bg-white rounded-lg p-6 text-center transition hover:scale-105 transition duration-200">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl text-black font-semibold mb-2">
                Research
              </h3>
              <p className="text-gray-500">
                Conduct cutting-edge research in areas like autonomous systems,
                human-robot interaction, and sustainable robotics.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Infrastructure and Lab Facilities */}
      <section className="py-16 px-4 bg-black bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Infrastructure & Lab Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                alt: "Robotics Lab",
                title: "Advanced Robotics Lab",
                desc: "Equipped with state-of-the-art robotic arms, sensors, and prototyping tools for hands-on experimentation.",
              },
              {
                img: "https://as2.ftcdn.net/v2/jpg/11/45/48/69/1000_F_1145486972_XOgIbcMBihaFUbFJvwwnBduC5XM1VRC6.jpg",
                alt: "3D Printing Facility",
                title: "3D Printing & Prototyping",
                desc: "High-precision 3D printers and CNC machines for rapid prototyping and custom part fabrication.",
              },
              {
                img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                alt: "AI Research Center",
                title: "AI & Simulation Lab",
                desc: "Powerful computing resources for AI development, virtual reality simulations, and algorithm testing.",
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg hover:scale-105 overflow-hidden transition duration-200"
              >
                <img
                  src={facility.img}
                  alt={facility.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-black font-semibold mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-500">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Club Timeline/Milestones */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 via-purple-900 to-pink-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            Club Timeline & Milestones
          </h2>
          <div className="relative">
            {/* Central Timeline Line with Glow Effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-00 shadow-lg shadow-purple-500/50"></div>

            {[
              {
                year: "2015",
                event: "Club Founded",
                desc: "Established by visionary students at XYZ University.",
                icon: "🚀",
              },
              {
                year: "2017",
                event: "First Competition Win",
                desc: "Secured 1st place in regional robotics challenge.",
                icon: "🏆",
              },
              {
                year: "2019",
                event: "Lab Expansion",
                desc: "Upgraded facilities with advanced robotics equipment.",
                icon: "🔧",
              },
              {
                year: "2021",
                event: "International Recognition",
                desc: "Team represented at global robotics summit.",
                icon: "🌍",
              },
              {
                year: "2023",
                event: "Research Breakthrough",
                desc: "Published groundbreaking paper on AI-driven robotics.",
                icon: "🧠",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 md:mb-4 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } animate-fade-in-up`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "pr-8 md:pr-16 text-right"
                      : "pl-8 md:pl-16 text-left"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{milestone.icon}</span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          <span className="text-cyan-400">
                            {milestone.year}
                          </span>
                          : {milestone.event}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
                {/* Timeline Dot with Pulse Animation */}
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
