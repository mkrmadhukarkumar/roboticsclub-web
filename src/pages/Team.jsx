import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaQuoteLeft, FaTrophy, FaBriefcase } from 'react-icons/fa';

export default function Team() {
  useEffect(() => {
      document.title = "Our Teams | Robotics Club | NITP";
    }, []);
  const poi = {
    name: 'Dr. Gagan Deep Meena',
    designation: 'Assistant Professor',
    department: 'Electrical Engineering',
    photo: '../gagandeepmeena.jpg',
    quote: 'Robotics is not just technology, it\'s the future of innovation. Let\'s build it together.'
  };
  const facultyAdvisor = {
    name: 'Prof. Bharat Gupta',
    designation: 'Professor',
    department: 'Electronics and Communication Engineering',
    photo: 'https://roboticsnitp.co.in/bharat.png',
    quote: 'Robotics is not just technology, it\'s the future of innovation. Let\'s build it together.'
  };

  const coreTeam = [
    {
      name: 'Darshan Jain',
      role: 'President',
      photo: 'https://cdn.sanity.io/images/58siqeyu/production/8a1596e659aab4b3c99ce55739b844d0ee72b3fd-1080x1250.jpg',
      linkedin: '',
      github: '',
      bio: 'Passionate about AI and robotics. Leading the club towards innovative projects.'
    },
    {
      name: 'Deepu Kumar Gupta',
      role: 'Captain',
      photo: 'https://cdn.sanity.io/images/58siqeyu/production/1939295594d4c8d1ee90fa235ab7e09556366ed6-1080x1360.jpg',
      linkedin: 'https://www.linkedin.com/in/deepu-kumar-gupta-445413225/',
      github: '',
      bio: 'Expert in embedded systems. Coordinates technical workshops and competitions.'
    },
    {
      name: 'Kapish Varshney',
      role: 'Vice Captain',
      photo: 'https://cdn.sanity.io/images/58siqeyu/production/e30cd2e5940fcbca81aadbb1f018dce6dcf3dbbd-618x669.jpg',
      linkedin: 'https://www.linkedin.com/in/kapish-varshney/',
      github: '',
      bio: 'Specializes in computer vision. Manages project timelines and team collaboration.'
    },
    {
      name: 'Niharika Rathod',
      role: 'Seceretary',
      photo: 'https://cdn.sanity.io/images/58siqeyu/production/ad45453e9bac4ec5e9068cecb7b7eaea70a6e0d1-810x1440.jpg',
      linkedin: '',
      github: '',
      bio: 'Handles club finances and sponsors. Ensures smooth operations.'
    },
    {
      name: 'Amit Kumar Singh',
      role: 'Treasurer',
      photo: 'https://cdn.sanity.io/images/58siqeyu/production/9ec35a417223388d0ece255232c19258498bb238-2250x4000.jpg?rect=0,0,2250,3000',
      linkedin: 'https://www.linkedin.com/in/amit-kumar-singh-67231323a/',
      github: '',
      bio: 'Passionate about AI and robotics. Leading the club towards innovative projects.'
    },
    {
      name: 'Veemlesh Meena',
      role: 'Joint Secretary',
      photo: 'https://cdn.sanity.io/images/58siqeyu/production/318b40af975f4dac89b48096a33649cd8fcaf3b1-1280x1280.jpg',
      linkedin: 'https://www.linkedin.com/in/vimlesh-meena-4a9965298',
      github: '',
      bio: 'Specializes in computer vision. Manages project timelines and team collaboration.'
    },
    {
      name: 'Veemlesh Meena',
      role: 'Joint Secretary',
      photo: 'https://cdn.sanity.io/images/58siqeyu/production/318b40af975f4dac89b48096a33649cd8fcaf3b1-1280x1280.jpg',
      linkedin: 'https://www.linkedin.com/in/vimlesh-meena-4a9965298',
      github: '',
      bio: 'Specializes in computer vision. Manages project timelines and team collaboration.'
    },
  ];

  const teamMembers = {
    Hardware: [
      { name: 'Rohit Sharma', role: 'Hardware Lead' },
      { name: 'Ankit Gupta', role: 'Circuit Designer' },
      { name: 'Saurabh Patel', role: 'Mechanical Engineer' }
    ],
    Software: [
      { name: 'Neha Jain', role: 'Software Lead' },
      { name: 'Pooja Singh', role: 'Backend Developer' },
      { name: 'Kunal Verma', role: 'Frontend Developer' }
    ],
    AI: [
      { name: 'Aditya Kumar', role: 'AI Specialist' },
      { name: 'Shivam Tiwari', role: 'ML Engineer' }
    ],
    Design: [
      { name: 'Riya Sharma', role: 'UI/UX Designer' },
      { name: 'Simran Kaur', role: 'Graphic Designer' }
    ]
  };

  const alumni = [
    {
      name: 'Dr. Priya Sharma',
      achievement: 'Research Scientist at ISRO',
      icon: <FaBriefcase className="text-cyan-400" />
    },
    {
      name: 'Rahul Mehta',
      achievement: 'Senior Engineer at DRDO',
      icon: <FaBriefcase className="text-green-400" />
    },
    {
      name: 'Anjali Gupta',
      achievement: 'Product Manager at Google',
      icon: <FaTrophy className="text-purple-400" />
    },
    {
      name: 'Vikram Singh',
      achievement: 'Founder, RoboTech Startups',
      icon: <FaTrophy className="text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="pt-16 px-4 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation in robotics.
          </p>
        </section>
        
        {/* Professor Of Incharge */}
        <section className="py-4 px-4 mb-8">
          <div className="max-w-4xl mx-auto bg-white/95 text-black hover:bg-white hover:scale-102 rounded-lg p-8 transition duration-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Professor of Incharge</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={poi.photo}
                alt={poi.name}
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  {poi.name}
                </h3>
                <p className="text-lg text-stone-600 mb-1">
                  {poi.designation}
                </p>
                <p className="text-lg text-stone-600 mb-6">
                  {poi.department}
                </p>
                <div className="relative">
                  <FaQuoteLeft className="text-4xl text-stone-800 absolute -top-2 -left-2" />
                  <blockquote className="text-xl italic text-stone-800 pl-8">
                    "{poi.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

        {/* Faculty Advisor */}
        <section className="py-8 px-4 mb-8 bg-black bg-opacity-20">
          <div className="max-w-4xl mx-auto bg-white/95 hover:bg-white hover:scale-102 text-black rounded-lg p-8 transition duration-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Faculty Advisor</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={facultyAdvisor.photo}
                alt={facultyAdvisor.name}
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  {facultyAdvisor.name}
                </h3>
                <p className="text-lg text-stone-600 mb-1">
                  {facultyAdvisor.designation}
                </p>
                <p className="text-lg text-stone-600 mb-6">
                  {facultyAdvisor.department}
                </p>
                <div className="relative">
                  <FaQuoteLeft className="text-4xl text-stone-800 absolute -top-2 -left-2" />
                  <blockquote className="text-xl italic text-stone-800 pl-8">
                    "{facultyAdvisor.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-5 px-4 mb-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Core Team</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="w-2xs lg:w-3xs bg-white/95 text-black hover:bg-white rounded-lg overflow-hidden hover:scale-103 transition-all duration-200 group"
                >
                  <div className="p-6 text-center">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-md"
                    />
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-500 font-semibold mb-4">
                      {member.role}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Link
                        to={member.linkedin}
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <FaLinkedin size={25} />
                      </Link>
                      <Link
                        to={member.github}
                        className="text-stone-500 hover:text-stone-600 transition-colors"
                      >
                        <FaGithub size={25} />
                      </Link>
                    </div>
                  </div>
                  <div className="px-6 pb-6 ">
                    <p className="text-sm text-stone-900 text-center text-wrap">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
{/* Team Members */}
<section className="py-16 bg-black bg-opacity-20">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Team Members</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {Object.entries(teamMembers).map(([specialization, members]) => (
        <div key={specialization} className="w-2xs bg-white/95 hover:bg-white hover:scale-103 text-black rounded-lg p-6 transition duration-200">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {specialization}
          </h3>
          <ul className="space-y-3">
            {members.map((member, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="font-medium text-stone-800">
                  {member.name}
                </span>
                <span className="text-stone-600 text-sm text-right">
                  {member.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Alumni */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white text-black bg-opacity-10 backdrop-blur-md rounded-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Notable Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {alumni.map((alum, index) => (
                <div key={index} className="flex items-center p-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-opacity-20 rounded-lg hover:bg-opacity-30 transition duration-300">
                  <div className="text-3xl mr-4">
                    {alum.icon}
                  </div>
                  <div>
                    <h3 className="text-lg text-white font-semibold">
                      {alum.name}
                    </h3>
                    <p className="text-stone-200">
                      {alum.achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}