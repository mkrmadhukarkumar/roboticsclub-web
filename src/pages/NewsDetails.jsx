import { Link, useParams, useNavigate } from "react-router-dom";

const newsData = [
  // Club News
  {
    id: 1,
    category: "Tech Innovations",
    title: "5G Technology",
    date: "20 Dec 2025",
    source: "Robotics",
    summary:
      '“The 5G World will be a collaborative ecosystem, and the role of what each of us will do in that remains to be thought through.” Borje Ekholm. The introduction of first 5G network was developed by 3GPP by South Korea Wireless Technologies have been growing actively all around the World. As you all know that today the mobile technologies 4G or LTE which has been rolled out in India, the next evolution of the technology called 5G is a game changer. It is much different from 4G because 4G was only for mobile but 5G is going to be for industrial development. 5G is going to be basically driving all future industries, the future driverless car, the robotics, the mass production in all the automated factories or even the drones that will fly all of that is going to be driven by the fact GSMA expects India to have 920 million mobile subscribers by 2025. 5G will open a door for new wireless architecture and smart services. According to the reports download speeds will be 10 to 20 times faster than 4G, this is going to be a significant step towards revolutionising the tech world. Bharti Airtel and Huawei were first to conduct a demo on India’s first 5G network. How 5G will benefit us ? Video buffering during a streaming session should virtually disappear as data transmission would happen at lightening speeds. Your 3 hour HD films can be downloaded in few seconds. We will enable smart homes that help us be more energy efficient save time on housekeeping and shopping and enjoy safer and more efficient public and private transportation. 5G is great news for the IOT markets. This is primarily due to the fact that 5G networks will go along the way towards improving the performance and reliability of these devices. It will enable enhanced traffic management by supporting a massive number of IOT connections .',
    link: "https://telecom.economictimes.indiatimes.com/tag/5g",
    image: "https://cdn.sanity.io/images/58siqeyu/production/0c7e076d3169e7320700592a9e084da7f16b0cb1-1126x550.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    category: "Club News",
    title: "New Membership Drive Announced",
    date: "15 Dec 2025",
    source: "Robotics Club",
    summary:
      "The Robotics Club is excited to announce a new membership drive for the upcoming semester. We welcome students from all disciplines who are passionate about robotics and technology. New members will have access to workshops, mentorship programs, and hands-on projects. Join us to be part of an innovative community that pushes the boundaries of robotics engineering and research.",
    link: "#",
    image: "https://via.placeholder.com/800x400?text=Membership+Drive", // Replace with actual image URL
  },
  // Competition News
  {
    id: 3,
    category: "Competition News",
    title: "Indian Team Qualifies for International Robotics Challenge",
    date: "12 Dec 2025",
    source: "The Hindu",
    summary:
      "An Indian university robotics team qualified for an international competition after showcasing excellence in autonomous navigation and obstacle handling. Their success highlights the growing robotics talent and innovation ecosystem in India. The team demonstrated advanced algorithms for real-time path planning and collaborative robot behaviors, earning recognition from global judges.",
    link: "https://www.thehindu.com",
    image: "https://via.placeholder.com/800x400?text=Robotics+Challenge", // Replace with actual image URL
  },
  {
    id: 4,
    category: "Competition News",
    title: "Robotics Club Wins Regional Engineering Fair",
    date: "5 Dec 2025",
    source: "University News",
    summary:
      "Our Robotics Club secured first place in the regional engineering fair with their innovative humanoid robot project. The competition featured teams from across the state, and our entry stood out for its sophisticated AI integration and precise mechanical design. This victory opens doors to national-level competitions and potential industry partnerships.",
    link: "#",
    image: "https://via.placeholder.com/800x400?text=Engineering+Fair", // Replace with actual image URL
  },
  // Tech Innovations
  {
    id: 5,
    category: "Tech Innovations",
    title: "AI-Powered Robots Transform Warehouse Automation",
    date: "18 Dec 2025",
    source: "IEEE Spectrum",
    summary:
      "AI-powered robots are revolutionizing warehouse automation by enabling real-time object recognition, route optimization, and safe human-robot collaboration. These intelligent systems significantly reduce operational costs while increasing speed, efficiency, and workplace safety across industries. Recent advancements in computer vision and machine learning have made these robots more adaptable to dynamic environments.",
    link: "https://spectrum.ieee.org",
    image: "https://via.placeholder.com/800x400?text=AI+Warehouse+Robots", // Replace with actual image URL
  },
  {
    id: 6,
    category: "Tech Innovations",
    title: "Breakthrough in Soft Robotics Materials",
    date: "10 Dec 2025",
    source: "MIT Technology Review",
    summary:
      "Researchers have developed new soft robotic materials that can change shape and stiffness on demand, opening up possibilities for more flexible and safer robotic applications. These materials use advanced polymers that respond to electrical stimuli, allowing robots to navigate complex terrains and interact gently with humans. This innovation could revolutionize fields from medical devices to disaster response.",
    link: "https://www.technologyreview.com",
    image: "https://via.placeholder.com/800x400?text=Soft+Robotics", // Replace with actual image URL
  },
  {
    id: 7,
    category: "Tech Innovations",
    title: "Quantum Computing Accelerates Robot Learning",
    date: "3 Dec 2025",
    source: "Nature",
    summary:
      "Quantum computing is being harnessed to dramatically speed up machine learning algorithms used in robotics. This breakthrough allows robots to learn complex tasks in minutes rather than days, potentially transforming autonomous systems. Early experiments show quantum-enhanced robots outperforming traditional AI in pattern recognition and decision-making tasks.",
    link: "https://www.nature.com",
    image: "https://via.placeholder.com/800x400?text=Quantum+Computing", // Replace with actual image URL
  },
  // Research Breakthroughs
  {
    id: 8,
    category: "Research Breakthroughs",
    title: "Soft Robotics Breakthrough in Medical Field",
    date: "15 Dec 2025",
    source: "Nature Robotics",
    summary:
      "Researchers have introduced soft robotic systems capable of performing delicate medical procedures. These robots adapt to human tissue, minimizing risk and improving precision. The innovation opens new doors in minimally invasive surgery and advanced rehabilitation solutions. Clinical trials are underway to test these systems in real-world medical environments.",
    link: "https://www.nature.com",
    image: "https://via.placeholder.com/800x400?text=Medical+Robotics", // Replace with actual image URL
  },
  {
    id: 9,
    category: "Research Breakthroughs",
    title: "Brain-Computer Interfaces for Robotic Control",
    date: "8 Dec 2025",
    source: "Science Magazine",
    summary:
      "A new study demonstrates direct brain-to-robot communication, allowing users to control complex robotic systems with thought alone. This breakthrough in neural interfaces could revolutionize prosthetics and human-robot interaction. The research combines advanced EEG technology with AI algorithms to interpret brain signals in real-time.",
    link: "https://www.sciencemag.org",
    image: "https://via.placeholder.com/800x400?text=Brain+Computer+Interface", // Replace with actual image URL
  },
  {
    id: 10,
    category: "Research Breakthroughs",
    title: "Self-Healing Robots Inspired by Biology",
    date: "1 Dec 2025",
    source: "PLOS ONE",
    summary:
      "Scientists have created robots with self-healing capabilities inspired by biological organisms. These robots can repair damage autonomously using embedded microcapsules that release healing agents when cracks form. This technology could extend the lifespan of robots in harsh environments and reduce maintenance costs significantly.",
    link: "https://journals.plos.org",
    image: "https://via.placeholder.com/800x400", // Replace with actual image URL
  },
];

export default function NewsDetail() {
  const { newsid } = useParams(); // Corrected parameter name
  const navigate = useNavigate();
  const news = newsData.find((n) => n.id === parseInt(newsid));

  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-8">No Such News Found!</h1>
          <button
            onClick={() => navigate("/news")}
            className="bg-red-700/70 text-white px-6 py-2 rounded-xl shadow-lg hover:cursor-pointer hover:bg-red-800/80 transition duration-200"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async (news) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.summary.substring(0, 100) + "...",
          url: news.link,
        });
        console.log('Content was shared successfully!');
      } catch (error) {
        console.log('Sharing failed:', error.message);
      }
    } else {
      // Fallback for unsupported browsers (e.g., show a custom modal with copy link/social buttons)
      alert('Web Share API is not supported in this browser. \nYou can manually copy the link.');
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 mt-12 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate("/news")}
        className="fixed z-100 p-3 lg:left-10 text-white bg-red-700/70 rounded-lg hover:bg-red-700/80 hover:cursor-pointer font-semibold transition-colors"
      >
        ← Back to News
      </button>
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white text-black bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-xl">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-84 object-cover rounded-lg mb-6"
          />
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full mb-4">
            {news.category}
          </span>
          <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
          <p className="text-stone-900 font-semibold text-sm mb-6">
            {news.date} | {news.source}
          </p>
          <p className="text-sky-500 leading-relaxed mb-8">
            {news.summary}
          </p>
          <div className="flex justify-between items-center">
            <Link
              to={news.link}
              className="bg-blue-600/80 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-500/90 transition duration-200"
            >
              Read Full Article
            </Link>
            <button
              className="bg-green-600/80 hover:bg-green-500/90 text-white px-4 py-2 rounded-md shadow-lg transition duration-200 hover:cursor-pointer flex items-center justify-center"
              onClick={() => handleShare(news)}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}