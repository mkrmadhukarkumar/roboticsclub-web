import { useEffect } from "react";
import HomeBanner from "../components/HomeBanner";
import ClubHighlights from "../components/ClubHighlights";
import UpcomingEvent from "../components/UpcomingEvent";
import RecentAchievements from "../components/RecentAchievements";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Robotics Club | NITP";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <HomeBanner />
      <ClubHighlights />
      <UpcomingEvent />
      <RecentAchievements />
      <Footer />
    </div>
  );
};

export default Home;
