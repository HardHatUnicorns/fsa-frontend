import { FC } from "react";

export const MovieCard: FC = () => {
  return (
    <a className="w-full h-full max-w-[19rem] border-2 flex flex-row">
      <picture className="w-full h-full">
        <img srcSet="https://via.placeholder.com/150x265.png" />
      </picture>
      <div className="p-3">
        <h3 className="font-bold">title</h3>
        <h3 className="font-bold">caption</h3>
        <p>
          desc ssdas d2asdas sdasda sssss a gdfgdf dfgd fgdffff gdfasjht fgfWE R
        </p>
      </div>
    </a>
  );
};
