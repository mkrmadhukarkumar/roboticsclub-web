import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock data for projects (same as in ProjectsPage)
const projectsData = [
  {
    id: 1,
    title: 'SELF BALANCING BOT',
    year: 2023,
    type: 'Robot',
    image: 'https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png',
    description: 'The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge, this inverted pendulum cannot stay balanced on its own. It will simply fall over. Then how do we balance it? Consider balancing a broomstick on our index finger which is a classic example of balancing an inverted pendulum. We move our finger in the direction in which the stick is falling. Similar is the case with a self-balancing robot, only that the robot will fall either forward or backward. Just like how we balance a stick on our finger, we balance the robot by driving its wheels in the direction in which it is falling. What we are trying to do here is to keep the center of gravity of the robot exactly above the pivot point. To drive the motors we need some information on the state of the robot. We need to know the direction in which the robot is falling, how much the robot has tilted and the speed with which it is falling. All these information can be deduced from the readings obtained from MPU6050. We combine all these inputs and generate a signal which drives the motors and keeps the robot balanced.',
    technologies: ['Arduino', 'MPU6050 IMU', 'DC Motors', 'L298N H-Bridge', 'PID Controller', 'Python'],
    teamMembers: ['Alice Johnson', 'Bob Smith', 'Charlie Brown']
  },
  // ... (rest of the data remains the same)
];

const ProjectDetails = () => {
  const { pid } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id == pid);
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} | Robotics Club | NITP`;
      setError(false);
    } else {
      setError(true);
    }
  }, [pid]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-8">Sorry, Project Not Found!</h1>
          <button
            onClick={() => navigate("../projects")}
            className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-500 cursor-pointer transition duration-200 text-md mx-auto block"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-10">
        <button 
          onClick={() => navigate('/projects')} 
          className="p-3 bg-red-700/70 text-white font-semibold shadow-lg hover:bg-red-700/80 hover:shadow-xl hover:cursor-pointer transform hover:scale-105 transition duration-200 rounded-md"
        >
          ← Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative mb-12">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full max-w-4xl mx-auto h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                <strong>Year: </strong>{project.year} | <strong>Type: </strong>{project.type}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">Project Overview</h2>
            <p className="text-gray-200 mb-8 leading-relaxed text-base md:text-lg">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300 flex items-center">
                  <span className="mr-2">⚙️</span> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-sky-800/80 text-white rounded-xl text-sm font-medium shadow-md hover:bg-sky-700 transition duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.teamMembers && (
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300 flex items-center">
                    <span className="mr-2">👥</span> Team Members
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.teamMembers.map((member, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-sky-700/80 text-white rounded-xl text-sm font-medium shadow-md hover:bg-sky-600 transition duration-200"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;