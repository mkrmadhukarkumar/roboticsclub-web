import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Mock data for ongoing projects (same as in the original component)
const ongoingProjectsData = [
  {
    id: 1,
    name: 'Autonomous Vehicle Project',
    description: 'Developing self-driving robots for urban navigation.',
    progress: 65,
    team: ['Alice Johnson', 'Bob Smith', 'Charlie Brown'],
    milestones: ['Initial design completed', 'Prototype testing underway', 'AI integration in progress'],
    startDate: '2023-01-15',
    estimatedCompletion: '2024-06-30',
    images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'] // Add images for attractiveness
  },
  {
    id: 2,
    name: 'Humanoid Robot Development',
    description: 'Building a humanoid robot for interactive applications.',
    progress: 37,
    team: ['Diana Prince', 'Eve Adams'],
    milestones: ['Skeleton assembly done', 'Motor integration started'],
    startDate: '2023-03-10',
    estimatedCompletion: '2024-12-15',
    images: ['https://example.com/image3.jpg']
  },
  {
    id: 3,
    name: 'AI-Powered Robotic Arm',
    description: 'Creating an intelligent robotic arm for manufacturing.',
    progress: 89,
    team: ['Frank Miller', 'Grace Lee', 'Henry Wilson'],
    milestones: ['AI model trained', 'Hardware assembly complete', 'Final testing phase'],
    startDate: '2022-11-01',
    estimatedCompletion: '2024-03-20',
    images: ['https://example.com/image4.jpg', 'https://example.com/image5.jpg']
  }
];

const OngoingProjectDetails = () => {
  const { pid } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

    useEffect(() => {
      const foundProject = ongoingProjectsData.find(p => p.id == pid);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="fixed z-100 pt-26 px-4">
        <Link to="/projects" className="mt-2 p-3 bg-red-700/70 text-white font-semibold shadow-lg hover:bg-red-700/80 hover:shadow-xl hover:cursor-pointer transform hover:scale-105 transition duration-100">
          ← Back to Events
        </Link>
      </div>
      <section className=" pt-30 pb-2 px-4 text-center">
        <h1 className="text-5xl pb-2 md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
          {project.description}
        </p>
      </section>
      

      {/* Project Details Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 bg-opacity-20 backdrop-blur-md rounded-lg p-8 hover:bg-opacity-30 transition duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Info */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Project Details</h2>
                <p className="text-gray-200 mb-2"><strong>Start Date:</strong> {project.startDate}</p>
                <p className="text-gray-200 mb-2"><strong>Estimated Completion:</strong> {project.estimatedCompletion}</p>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Progress</h3>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-teal-400 h-3 rounded-full transition-all duration-300" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{project.progress}% Completed</p>
                </div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">Team Members</h3>
                <ul className="text-gray-200 list-disc list-inside">
                  {project.team.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
              {/* Milestones and Images */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Milestones</h2>
                <ul className="text-gray-200 space-y-2 mb-6">
                  {project.milestones.map((milestone, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {milestone}
                    </li>
                  ))}
                </ul>
                {project.images && project.images.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-cyan-400">Project Images</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          className="w-full h-32 object-cover rounded-md hover:scale-105 transition duration-200 cursor-pointer"
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OngoingProjectDetails;