import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

// Mock data for past events (same as in the original component)
const pastEventsData = [
  {
    id: 1,
    name: 'Robotics Workshop: Basics of Sensors',
    date: '2023-09-10',
    description: 'Hands-on session on sensor integration in robots.',
    category: 'Workshops',
    photos: [
      'https://m.media-amazon.com/images/I/91Kie2Sjt0L._SX445_.jpg',
      'https://mahatmainternational.ac.in/wp-content/uploads/2025/07/Robotics-Workshop-for-Students-Teachers-1.png'
    ]
  },
  {
    id: 2,
    name: 'Robotics Competition: Bot Battle',
    date: '2023-08-20',
    description: 'Exciting robot battles with custom-built bots.',
    category: 'Competitions',
    photos: [
      'https://www.sjsreview.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-16-at-10.44.50-AM-e1523914554247.png'
    ]
  },
  {
    id: 3,
    name: 'Guest Lecture: Robotics Ethics',
    date: '2023-07-15',
    description: 'Discussion on ethical implications of robotics.',
    category: 'Guest Lectures',
    photos: [
      'https://www.jct.ac.in/engineering/wp-content/uploads/2021/01/img_20200211-1-scaled.jpg',
      'https://cdn.shopify.com/s/files/1/0014/4313/5560/files/unnamed_2_baddf1f7-c7ff-477e-bae9-7dee7fbc7c9b.png?v=1739900729'
    ]
  }
];

const PastEventDetails = () => {
  const { eventid } = useParams(); // Get the event ID from the URL params
  const event = pastEventsData.find(e => e.id === parseInt(eventid)); // Find the event by ID
  const navigate = useNavigate();

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-8">Sorry, Event Not Found!</h1>
          <button
            onClick={() => navigate("../events")}
            className="bg-red-700/70 text-white px-6 py-2 rounded-xl shadow-lg hover:cursor-pointer hover:bg-red-800/80 transition duration-200"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <button
        onClick={() => navigate("/events")}
        className="fixed top-24 z-100 p-3 lg:left-10 text-white bg-red-700/70 rounded-lg hover:bg-red-700/80 hover:cursor-pointer font-semibold transition-colors"
      >
        ← Back to News
      </button>
      {/* Header */}
      <section className="pb-4 pt-30 px-4 text-center">
        <h1 className="text-4xl pt-8 md:pt-0 pb-2 md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {event.name}
        </h1>
        <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
          {event.description}
        </p>
      </section>

      {/* Event Details Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 bg-opacity-20 backdrop-blur-md rounded-lg p-8 hover:bg-opacity-30 transition duration-300"> {/* Darker background for better image visibility */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Event Info */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Event Details</h2>
                <p className="text-gray-200 mb-2"><strong>Date:</strong> {event.date}</p> {/* Lighter text for dark background */}
                <p className="text-gray-200 mb-2"><strong>Category:</strong> {event.category}</p>
                <p className="text-gray-200 mb-4">{event.description}</p>
                {/* Add more details if available, e.g., attendees, outcomes */}
                <p className="text-gray-400 text-sm">
                  This event was a great success, bringing together enthusiasts and experts in the field of robotics.
                </p>
              </div>
              {/* Photo Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Photo Gallery</h2>
                <div className="grid grid-cols-1 gap-4">
                  {event.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Event Photo ${index + 1}`}
                      className="w-full h-64 object-cover rounded-md hover:scale-105 transition duration-200 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastEventDetails;