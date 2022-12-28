import { FC } from "react";
import { Logo } from "../Logo";

export const FullLogo: FC = () => {
  return (
    <div className="flex flex-row items-center gap-x-3">
      <Logo />
      <img className="h-10" src="src/assets/cinemon-logo-text.png" />
    </div>
  );
};
