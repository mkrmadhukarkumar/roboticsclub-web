import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
    const navigate = useNavigate()

    const handleJoinUs = () =>{
        navigate('/contacts');
    }
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('../background.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-5 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Robotics Club
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-stone-200">
          Building the Future with Robotics
        </p>
        <button
          onClick={handleJoinUs}
          className="cursor-pointer bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full transition duration-100 transform hover:scale-105"
        >
          Join Us
        </button>
      </div>
    </section>
  );
}

export default HomeBanner;
