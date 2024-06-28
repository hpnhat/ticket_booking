import { useNavigate, useParams } from "react-router-dom";
import SeatSelection from "./SeatSelection/SeatSelection";
import { useEffect, useState } from "react";
import MovieSelection from "./MovieSelection/MovieSelection";
import DrinkSelection from "./DrinkSelection/DrinkSelection";

const Booking = () => {
  const { slug } = useParams();
  const [active, setActive] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const navigate = useNavigate();
  console.log(selectedMovie);
  // const movie = films.find((film) => film.slug === selectedFilmSlug);
  const steps = [
    "Chọn phim /x Suất",
    "Chọn ghế",
    "Chọn đồ ăn",
    "Thanh toán",
    "Xác nhận",
  ];
  useEffect(() => {
    if (active === 0) {
      setSelectedMovie(null);
      navigate("/booking");
    } else if (selectedMovie) {
      navigate(`/booking/${selectedMovie.slug}`);
    }
  }, [active, navigate]);
  const renderContent = () => {
    switch (active) {
      case 0:
        return (
          <MovieSelection
            setSelectedMovie={setSelectedMovie}
            setSelectedShowtime={setSelectedShowtime}
          />
        );
      case 1:
        return <SeatSelection />;
      case 2:
        return <DrinkSelection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <ul className="flex justify-center items-center md:text-base text-[12px] font-semibold w-full flex-nowrap text-gray-400">
          {steps.map((step, index) => (
            <li key={index} className="pt-4 mb-4 pl-0">
              <button
                className={`md:mx-3 mx-1 ${
                  index < active
                    ? "text-sky-700 opacity-35 cursor-not-allowed"
                    : index <= active
                    ? "text-sky-900"
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() => index <= active && setActive(index)}
                disabled={index > active || index < active}
              >
                {step}
              </button>
              <div
                className={`relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-gray-300 ${
                  index <= active
                    ? "after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-sky-700 after:w-full"
                    : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="md:container md:mx-auto lg:max-w-7xl md:max-w-4xl md:px-0 sm:px-[45px] grid xl:grid-cols-3 grid-cols-1">
        <div className="col-span-2 xl:order-first order-last xl:h-full h-[full] overflow-hidden xl:overflow-auto xl:pb-10 pb-32">
          {renderContent()}
        </div>
        <div className="col-span-1 xl:pl-4 xl:order-none order-first py-4">
          <div className="col-span-1 xl:pl-4 xl:order-none order-first py-4">
            <div className="md:mb-4">
              <div className="h-[6px] bg-orange-500 rounded-t-lg" />
              <div className="bg-white p-4 grid grid-cols-3 xl:gap-2 items-center">
                <>
                  <div className="row-span-2 md:row-span-1 xl:row-span-2 block md:hidden xl:block">
                    <img
                      alt={selectedMovie?.title}
                      width={100}
                      height={150}
                      className="xl:w-full xl:h-full md:w-[80px] md:h-[120px] w-[90px] h-[110px] rounded object-cover object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
                      style={{ color: "transparent" }}
                      src={
                        selectedMovie
                          ? selectedMovie.url
                          : "https://www.galaxycine.vn/_next/static/media/img-blank.bb695736.svg"
                      }
                    />
                  </div>
                  <div className="flex-1 col-span-2 md:col-span-1 row-span-1 xl:col-span-2">
                    <h3 className="text-sm xl:text-base font-bold xl:mb-2">
                      {selectedMovie?.title}
                    </h3>
                    <p className="text-sm inline-block">
                      {selectedMovie?.format}
                    </p>
                    <span> - </span>
                    {selectedMovie && (
                      <div className="xl:mt-2 ml-2 xl:ml-0 inline-block">
                        <span className="inline-flex items-center justify-center w-[38px] h-7 bg-orange-500 rounded text-sm text-center text-white font-bold not-italic">
                          {selectedMovie?.age}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="col-span-2 md:col-span-1 xl:col-span-3">
                    <div>
                      <div className="xl:mt-4 text-sm xl:text-base">
                        <strong>{selectedMovie?.cinema}</strong>
                        <span> - </span>
                        <span className="text-sm xl:text-base">
                          {selectedMovie?.room}
                        </span>
                      </div>
                      <div className="xl:mt-2 text-sm xl:text-base">
                        <span>Suất: </span>
                        <strong>{selectedMovie?.time}</strong>
                        <span> - </span>
                        <span className="capitalize text-sm">
                          {selectedMovie?.date}
                        </span>
                      </div>
                    </div>
                    <div className="my-4 border-t border-grey-60 border-dashed xl:block hidden" />
                  </div>
                  <div className="xl:flex hidden justify-between col-span-3">
                    <strong className="text-base">Tổng cộng</strong>
                    <span className="inline-block font-bold text-primary ">
                      0&nbsp;₫
                    </span>
                  </div>
                </>
              </div>
              <div className="mt-8 xl:flex hidden">
                <button
                  onClick={() => active > 0 && setActive(active - 1)}
                  className="w-1/2 mr-2 py-2 hover:text-orange-500"
                >
                  <span>Quay lại</span>
                </button>
                <button
                  onClick={() =>
                    active == steps.length - 1
                      ? console.log(123)
                      : setActive(active + 1)
                  }
                  className="w-1/2 ml-2 py-2 bg-orange-500 text-white border rounded-md hover:bg-orange-400"
                >
                  <span>
                    {active === steps.length - 2 ? "Thanh toán" : "Tiếp tục"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
