import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const upcomingevents = [
  {
    title: "Annual Robotics Competition",
    desc: "Join us for an exciting day of robotics battles and innovation!",
    date: "October 13, 2026",
  },
  {
    title: "Annual Robotics Competition",
    desc: "Join us for an exciting day of robotics battles and innovation!",
    date: "October 13, 2026",
  },
  // Add more events as needed
];

const UpcomingEvent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null); // 'left' for back, 'right' for next

  const handleNext = () => {
    setDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % upcomingevents.length);
      setDirection(null);
    }, 100); // Match transition duration
  };

  const handleBack = () => {
    setDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? upcomingevents.length - 1 : prevIndex - 1
      );
      setDirection(null);
    }, 100);
  };

  const currentEvent = upcomingevents[currentIndex];

  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl rounded md:text-4xl font-bold mb-8">
          Upcoming Event
        </h2>
        <div className="relative flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="text-rose-800 font-bold py-2 md:px-4 rounded-full hover:bg-sky-500/50 hover:scale-125 cursor-pointer transition duration-100 disabled:opacity-50 disabled:cursor-normal z-10"
            disabled={upcomingevents.length <= 1}
          >
            <MdOutlineKeyboardDoubleArrowLeft size={25}/>
          </button>

          {/* Event Card with Transition */}
          <div
            className={`bg-gradient-to-r from-cyan-500 to-purple-500 min-h-20 rounded-lg py-8 px-4 text-white hover:scale-102 flex-1 mx-4 transition-all duration-200 ease-in-out ${
              direction === 'right' ? 'transform -translate-x-full opacity-0' :
              direction === 'left' ? 'transform translate-x-full opacity-0' :
              'transform translate-x-0 opacity-100'
            }`}
          >
            <h3 className="text-2xl text-black md:text-3xl font-semibold mb-4">
              {currentEvent.title}
            </h3>
            <p className="text-lg text-white">{currentEvent.desc}</p>
            <p className="text-lg text-black/80 mb-6">
              <strong>Date: </strong> {currentEvent.date}
            </p>
            <Link
              to="/events"
              className="bg-white opacity-60 hover:opacity-100 text-rose-700 font-bold py-2 px-6 rounded-2xl hover:bg-gray-100 cursor-pointer transition duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="text-rose-800 font-bold py-2 md:px-4 rounded-full hover:bg-sky-500/50 hover:scale-125 cursor-pointer transition duration-100 disabled:opacity-50 disabled:cursor-default z-10"
            disabled={upcomingevents.length <= 1}
          >
            <MdOutlineKeyboardDoubleArrowRight size={25}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;