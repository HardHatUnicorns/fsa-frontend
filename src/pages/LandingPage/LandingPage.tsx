import { FC } from "react";
import { Navbar } from "~/components/shared/Navbar/Navbar";
import { AllCinemas } from "~/views/AllCinemas";
import { Footer } from "~/components/shared/Footer";
import "./LandingPage.styles.css";
import { AllMovieCategories } from "~/views/MovieCategories";
import { HotTitles } from "~/views/HotTitles";
import { MoviesNearby } from "~/views/MoviesNearby";

export const LandingPage: FC = () => {
  return (
    <div className="w-full border-2 h-full relative">
      <Navbar />
      <div className="h-full">
        <div className="play-btn"></div>
        <HotTitles />
        <MoviesNearby />
        <AllMovieCategories />
        <AllCinemas />
      </div>
      <Footer />
    </div>
  );
};
