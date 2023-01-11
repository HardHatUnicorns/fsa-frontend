export const MovieDetails = () => {
  return (
    <div className="bg-company-yellow p-2 lg:flex lg:flex-col lg:items-center lg:pt-16">
      <h1 className="text-4xl font-bold md:hidden">Movie title</h1>
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
                  Movie title
                </h1>
                <p className="hidden text-xl lg:block mb-2">
                  In ultricies fermentum aliquet. Pellentesque dui magna,
                  condimentum non ullamcorper at, cursus in sem. Nunc
                  condimentum, purus ac enenatis commodo libero, am auctor porta
                  tortor, nec consequat nibh finibus a. Sed ultrices risus eget
                  iaculis luctus. Mauris vel gravida magna. In ultricies
                  fermentum aliquet. Pellentesque dui magna, condimentum non
                  ullamcorper at, cursus in sem. Nunc condimentum, purus ac
                  enenatis commodo libero, am auctor porta tortor, nec consequat
                  nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris
                  vel gravida magna. In ultricies fermentum aliquet.
                </p>
                <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col gap-1">
                  <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                    <span className="font-bold md:text-2xl">Genre:</span>
                    <span className="text-sm md:text-2xl md:font-bold">
                      Lorem ipsum
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                    <span className="font-bold md:text-2xl">Duration:</span>
                    <span className="text-sm md:text-2xl md:font-bold">
                      90 mins
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                    <span className="font-bold md:text-2xl">Release date:</span>
                    <span className="text-sm md:text-2xl md:font-bold">
                      November 1999
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                    <span className="font-bold md:text-2xl">Languages:</span>
                    <span className="text-sm md:text-2xl md:font-bold">
                      Polish, English
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between lg:justify-start">
                    <span className="font-bold md:text-2xl">Cast:</span>
                    <span className="text-sm md:text-2xl md:font-bold">
                      John Doe
                      <br />
                      Jane Doe
                      <br />
                      James Doe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 lg:hidden">
            <p className="md:text-xl">
              In ultricies fermentum aliquet. Pellentesque dui magna,
              condimentum non ullamcorper at, cursus in sem. Nunc condimentum,
              purus ac enenatis commodo libero, am auctor porta tortor, nec
              consequat nibh finibus a. Sed ultrices risus eget iaculis luctus.
              Mauris vel gravida magna. In ultricies fermentum aliquet.
              Pellentesque dui magna, condimentum non ullamcorper at, cursus in
              sem. Nunc condimentum, purus ac enenatis commodo libero, am auctor
              porta tortor, nec consequat nibh finibus a. Sed ultrices risus
              eget iaculis luctus. Mauris vel gravida magna. In ultricies
              fermentum aliquet.
            </p>
          </div>
        </div>
        <div>TODO tickets view</div>
      </div>
    </div>
  );
};
