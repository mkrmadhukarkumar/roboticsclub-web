import { useState, useEffect } from 'react';

export default function Achievements() {
  const [counters, setCounters] = useState({
    competitions: 0,
    publications: 0,
    awards: 0,
    projects: 0
  });

  useEffect(() => {
    document.title = "Achievements | Robotics Club | NITP";
  }, []);

  useEffect(() => {
    // Animate counters
    const targetCounters = {
      competitions: 15,
      publications: 8,
      awards: 12,
      projects: 25
    };

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allReached = true;
        Object.keys(targetCounters).forEach(key => {
          if (newCounters[key] < targetCounters[key]) {
            newCounters[key] += Math.ceil(targetCounters[key] / 50);
            if (newCounters[key] > targetCounters[key]) newCounters[key] = targetCounters[key];
            allReached = false;
          }
        });
        if (allReached) clearInterval(interval);
        return newCounters;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const competitions = [
    {
      name: "International Robotics Competition",
      year: 2023,
      prize: "1st Place - $10,000",
      members: ["Madhukar Kumar", "Rahul Verma", "Sneha Singh"],
      photo: "https://tecnico.ulisboa.pt/files/2023/07/competi-o-de-robots..jpg"
    },
    {
      name: "National AI Challenge",
      year: 2022,
      prize: "2nd Place - $5,000",
      members: ["Aman Kumar", "Neha", "Aditya"],
      photo: "https://itag.ie/wp-content/uploads/2025/07/Screenshot-2025-07-08-at-16.22.10-1024x504.png.webp"
    },
    {
      name: "RoboCup Junior",
      year: 2021,
      prize: "3rd Place - $2,500",
      members: ["Rohit", "Pooja", "Shivam"],
      photo: "https://ai.sony/wp-content/uploads/2021/06/thumbnail_image002.jpg"
    }
  ];

  const publications = [
    {
      title: "Advancements in Autonomous Navigation for Industrial Robots",
      venue: "IEEE International Conference on Robotics and Automation",
      year: 2023,
      authors: ["Dr. A. K. Sharma", "Madhukar Kumar", "Rahul Verma"]
    },
    {
      title: "Machine Learning Applications in Soft Robotics",
      venue: "Journal of Robotics Research",
      year: 2022,
      authors: ["Sneha Singh", "Aman Kumar", "Dr. A. K. Sharma"]
    },
    {
      title: "Human-Robot Collaboration in Manufacturing Environments",
      venue: "Robotics and Autonomous Systems Journal",
      year: 2021,
      authors: ["Neha", "Aditya", "Dr. A. K. Sharma"]
    }
  ];

  const awards = [
    {
      name: "Innovation Grant for Robotics Research",
      organization: "Ministry of Education",
      year: 2023,
      amount: "$50,000"
    },
    {
      name: "Best Student Project Award",
      organization: "Indian Robotics Society",
      year: 2022,
      amount: "$10,000"
    },
    {
      name: "Young Innovator Award",
      organization: "Tech Excellence Foundation",
      year: 2021,
      amount: "$15,000"
    }
  ];

  const timeline = [
    {
      year: 2023,
      events: [
        "Won 1st place in International Robotics Competition",
        "Received Innovation Grant from Ministry of Education",
        "Published paper in IEEE ICRA"
      ]
    },
    {
      year: 2022,
      events: [
        "2nd place in National AI Challenge",
        "Best Student Project Award from Indian Robotics Society",
        "Published paper in Journal of Robotics Research"
      ]
    },
    {
      year: 2021,
      events: [
        "3rd place in RoboCup Junior",
        "Young Innovator Award from Tech Excellence Foundation",
        "Published paper in Robotics and Autonomous Systems Journal"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="pt-16 px-4 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Achievements
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Celebrating our milestones, victories, and contributions to the field of robotics.
          </p>
        </section>

        {/* Statistics Counter */}
        <section className="py-16 px-4 mb-12">
          <div className="max-w-4xl mx-auto bg-white text-black bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Achievement Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {counters.competitions}+
                </div>
                <div className="text-stone-600">Competitions Won</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {counters.publications}
                </div>
                <div className="text-stone-600">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {counters.awards}
                </div>
                <div className="text-stone-600">Awards & Grants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">
                  {counters.projects}+
                </div>
                <div className="text-stone-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4 mb-12 bg-black bg-opacity-20">
          <div className="max-w-4xl mx-auto bg-white text-black bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Achievement Timeline</h2>
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex mb-8 last:mb-0">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-600 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.year}
                    </h3>
                    <ul className="list-disc list-inside text-blue-500 space-y-1">
                      {item.events.map((event, eventIndex) => (
                        <li key={eventIndex}>{event}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competition Wins */}
        <section className="py-16 px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Competition Wins</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitions.map((comp, index) => (
                <div key={index} className="bg-white text-black bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition duration-300">
                  <img
                    src={comp.photo}
                    alt={`${comp.name} ${comp.year}`}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {comp.name} ({comp.year})
                  </h3>
                  <p className="text-teal-500 font-medium mb-2">
                    {comp.prize}
                  </p>
                  <p className="text-stone-600 text-sm">
                    <strong>Team: </strong>{comp.members.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Publications */}
        <section className="py-16 px-4 mb-12 bg-black bg-opacity-20">
          <div className="max-w-4xl mx-auto bg-white text-black bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Research Publications</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border-b border-gray-600 pb-4 last:border-b-0">
                  <h3 className="text-xl font-semibold mb-1">
                    {pub.title}
                  </h3>
                  <p className="text-stoen-800 mb-1">
                    {pub.venue} ({pub.year})
                  </p>
                  <p className="text-sm text-teal-600">
                    <strong>Authors: </strong>{pub.authors.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Grants/Awards */}
        <section className="py-16 px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Innovation Grants & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg p-6 text-center hover:from-cyan-600 hover:to-purple-600 transition duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    {award.name}
                  </h3>
                  <p className="text-gray-200 mb-1">
                    {award.organization} ({award.year})
                  </p>
                  <p className="text-green-400 font-medium">
                    {award.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition & Media Coverage */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Recognition & Media Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white text-black bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Featured in Tech Magazine
                </h3>
                <p className="text-stone-800 mb-4">
                  "Rising Stars in Robotics: University Club Makes Waves" - Tech Today, 2023
                </p>
                <a href="#" className="text-teal-500 hover:text-cyan-300 transition-colors">
                  Read Article →
                </a>
              </div>
              <div className="bg-white text-black bg-opacity-10 backdrop-blur-md rounded-lg p-6 hover:bg-opacity-20 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">
                  Interview on Innovation Podcast
                </h3>
                <p className="text-stone-800 mb-4">
                  Club president discusses AI in robotics - Future Tech Podcast, Episode 45, 2022
                </p>
                <a href="#" className="text-teal-500 hover:text-cyan-300 transition-colors">
                  Listen Now →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}