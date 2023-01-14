import { MovieDetails as MovieDetailsType } from "~/models/MovieDetails";

type MovieDetailsProps = MovieDetailsType;

export const MovieDetails = ({
  title,
  description,
  genres,
  duration,
  releaseDate,
  director,
}: MovieDetailsProps) => (
  <div>
    <h1 className="text-4xl font-bold md:hidden">{title}</h1>
    <div className="max-w-[1400px]">
      <div className="flex flex-row md:flex-col">
        <div className="min-w-[33%] p-2">
          <div className="flex flex-col md:flex-row">
            <div className="mb-1 md:min-w-[300px]">
              <picture className="w-full h-auto">
                <source
                  media="(min-width:1024px)"
                  className="w-full h-auto"
                  srcSet="https://via.placeholder.com/300x450.png?text=Movie"
                />
                <source
                  media="(min-width:768px)"
                  className="w-full h-auto"
                  srcSet="https://via.placeholder.com/300x450.png?text=Movie"
                />
                <source
                  media="(min-width:640px)"
                  className="w-full h-auto"
                  srcSet="https://via.placeholder.com/100x140.png?text=Movie"
                />
                <img
                  className="w-full h-auto"
                  src="https://via.placeholder.com/100x140.png?text=Movie"
                />
              </picture>
            </div>
            <div className="flex flex-col grow md:px-8 lg:px-16">
              <h1 className="hidden md:block text-bold text-7xl mb-4 border-b-2 border-black">
                {title}
              </h1>
              <p className="hidden text-xl lg:block mb-2">{description}</p>
              <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col gap-1">
                <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                  <span className="font-bold md:text-2xl">Genre:&nbsp;</span>
                  <span className="text-sm md:text-2xl md:font-bold">
                    {genres.join(", ")}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                  <span className="font-bold md:text-2xl">Duration:&nbsp;</span>
                  <span className="text-sm md:text-2xl md:font-bold">
                    {duration}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                  <span className="font-bold md:text-2xl">
                    Release date: &nbsp;
                  </span>
                  <span className="text-sm md:text-2xl md:font-bold">
                    {releaseDate}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                  <span className="font-bold md:text-2xl">
                    Languages:&nbsp;
                  </span>
                  <span className="text-sm md:text-2xl md:font-bold">
                    Polish, English
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                  <span className="font-bold md:text-2xl">Director:&nbsp;</span>
                  <span className="text-sm md:text-2xl md:font-bold">
                    {director}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 lg:hidden">
          <p className="md:text-xl">{description}</p>
        </div>
      </div>
    </div>
  </div>
);
