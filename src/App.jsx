import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import Achievements from "./pages/Achievements";
import Contacts from "./pages/Contacts";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import NewsDetail from "./pages/NewsDetails.jsx";
import EventRegistration from "./pages/EventRegistration.jsx";
import PastEventDetails from "./pages/PastEventDetails.jsx";
import OngoingProjectDetails from "./pages/OngoingProjectDetails.jsx"

function PageNotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-semibold">404 - Page Not Found!</h1>
        <p className="p-5 text-2xl text-stone-100/80">
          The resource you are Looking for doesn't exits.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:pid" element={<ProjectDetails />} />        
        <Route path="/ongoingprojects/:pid" element={<OngoingProjectDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register/:eventid" element={<EventRegistration />} />        
        <Route path="/pastevents/:eventid" element={<PastEventDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsid" element={<NewsDetail />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
