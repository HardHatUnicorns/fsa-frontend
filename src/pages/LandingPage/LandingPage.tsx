import { Navbar } from "~/components/shared/Navbar/Navbar";
import { AllCinemas } from "~/views/AllCinemas";
import { Footer } from "~/components/shared/Footer";
import "./LandingPage.styles.css";
import { AllMovieCategories } from "~/views/MovieCategories";
import { HotTitles } from "~/views/HotTitles";
import { MoviesNearby } from "~/views/MoviesNearby";
import { Outlet } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="w-full border-2 h-full relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export const LandingPageDefault = () => (
  <div>
    <div className="play-btn"></div>
    <HotTitles />
    <MoviesNearby />
    <AllMovieCategories />
    <AllCinemas />
  </div>
);
