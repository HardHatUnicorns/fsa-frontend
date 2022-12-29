import { FC } from "react";
import { ReactComponent as CinemonLogo } from "~/assets/icons/CinemonLogo.svg";
import { ReactComponent as CinemonLogoText } from "~/assets/icons/CinemonLogoText.svg";

export interface FullLogoProps {
  logoClasses?: string;
}

export const FullLogo: FC<FullLogoProps> = ({ logoClasses }) => {
  return (
    <div className="flex flex-row items-center gap-x-3">
      <CinemonLogo className={logoClasses} />
      <CinemonLogoText />
    </div>
  );
};
