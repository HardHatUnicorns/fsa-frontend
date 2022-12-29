import { FC } from "react";
import { FullLogo } from "../FullLogo";
import { ReactComponent as FacebookIcon } from "~/assets/icons/FacebookIcon.svg";
import { ReactComponent as TwitterIcon } from "~/assets/icons/TwitterIcon.svg";
import { ReactComponent as InstagramIcon } from "~/assets/icons/InstagramIcon.svg";
import { ReactComponent as LinkedInIcon } from "~/assets/icons/LinkedInIcon.svg";

export const Footer: FC = () => {
  return (
    <div className="p-10 bg-company-yellow">
      <div className="pb-5">
        <FullLogo logoClasses="fill-black"></FullLogo>
      </div>
      <div className="flex flex-col w-full border-t-2 border-black ">
        <div className="flex flex-row w-full justify-evenly pt-5 font-medium">
          <span className="cursor-pointer">Introduction</span>
          <span className="cursor-pointer">Contact us</span>
          <span className="cursor-pointer">About us</span>
          <span className="cursor-pointer">Follow us</span>
        </div>
        <div className="flex flex-row content-between gap-x-10 self-end pt-5">
          <FacebookIcon className="cursor-pointer" />
          <TwitterIcon className="cursor-pointer" />
          <InstagramIcon className="cursor-pointer" />
          <LinkedInIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
