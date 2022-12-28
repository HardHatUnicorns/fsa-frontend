import { FC } from "react";
import { Navbar } from "../../components/shared/navbar/Navbar";
import { AllCinemas } from "../../views/AllCinemas";
import { Footer } from "../../components/shared/footer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./LandingPage.styles.css";

export const LandingPage: FC = () => {
  return (
    <div className="w-full border-2 h-full relative">
      <Navbar />
      <div className="h-screen">
        <div className="play-btn"></div>
        <AllCinemas />
      </div>
      <Footer />
    </div>
  );
};
