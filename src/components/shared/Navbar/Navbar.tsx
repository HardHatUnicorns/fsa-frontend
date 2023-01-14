import { FC } from "react";
import { ReactComponent as SearchIcon } from "~/assets/icons/SearchIcon.svg";
import { ReactComponent as LanguageIcon } from "~/assets/icons/LanguageIcon.svg";
import { ReactComponent as PersonIcon } from "~/assets/icons/PersonIcon.svg";
import { FullLogo } from "../FullLogo";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-row justify-between shadow-lg">
      <NavLink to={"/"}>
        <FullLogo logoClasses="fill-company-yellow" />
      </NavLink>
      <div className="flex flex-row items-center gap-x-12">
        <div className="xl:w-96">
          <div className="items-stretch w-full flex flex-row">
            <input
              type="search"
              className="min-w-0 w-full px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-lg border-r-0 transition ease-in-out m-0  focus:bg-white focus:outline-none"
              placeholder="Search"
            />
            <button
              className="inline-block px-1.5 py-1.5 bg-company-yellow text-black font-medium text-xs leading-tight uppercase rounded-r focus:outline-none focus:ring-0 flex items-center"
              type="button"
              id="button-addon2"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
        <span className="cursor-pointer" onClick={() => navigate("/movies")}>
          Movies
        </span>
        <span className="cursor-pointer">Cinemas</span>
        <LanguageIcon className="cursor-pointer"></LanguageIcon>
        <PersonIcon className="cursor-pointer"></PersonIcon>
      </div>
    </div>
  );
};
