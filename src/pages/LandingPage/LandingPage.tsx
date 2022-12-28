import { FC } from "react";
import { Navbar } from "../../components/shared/navbar/Navbar";
import { AllCinemas } from "../../views/AllCinemas";

export const LandingPage: FC = () => {
  return (
    <div className="w-full border-2 h-full">
      <Navbar />
      <AllCinemas />
    </div>
  );
};
