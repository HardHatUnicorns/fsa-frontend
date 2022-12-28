import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";

export const Navbar: FC = () => {
  return (
    <div className="p-4 flex flex-row justify-between shadow-lg">
      <div className="flex flex-row items-center gap-x-3">
        <img className="h-10" src="src/assets/cinemon-logo.png" />
        <img className="h-10" src="src/assets/cinemon-logo-text.png" />
      </div>
      <div className="flex flex-row items-center gap-x-12">
        {/*https://tailwind-elements.com/docs/standard/forms/search/*/}
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
        <span className="cursor-pointer">Movies</span>
        <span className="cursor-pointer">Cinemas</span>
        <LanguageIcon className="cursor-pointer"></LanguageIcon>
        <PersonIcon className="cursor-pointer"></PersonIcon>
      </div>
    </div>
  );
};
