/* eslint-disable react/prop-types */
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { films } from "../../../../data.example";
import useToggleElement from "../../../hooks/useToggleElement";
import { movieSelection } from "../../../systems/ultis/Carousel";
import { dayAndMonth, formatDate } from "../../../systems/ultis/FormatDate";
import {
  CustomButtonLeft,
  CustomButtonRight,
} from "../../../components/UI/CustomButton";
const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const MovieSelection = ({ setSelectedMovie, set }) => {
  const [openSection, setOpenSection] = useState(null);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setOpenSection("movie");
  }, []);
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setMovie(movie);
    setOpenSection("showTime");
  };
  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const movieRef = useToggleElement(openSection === "movie");
  const showTimeRef = useToggleElement(openSection === "showTime");
  const [selectSchedule, setSelectSchedule] = useState(0);
  const [selectTime, setSelectTime] = useState(null);
  console.log(films);
  const filmChunks = chunkArray(films, 2);
  return (
    <>
      <div className="bg-slate-100 shadow-xl rounded-md mb-8">
        <div
          className="flex items-center justify-between px-4 py-4 hover:cursor-pointer"
          onClick={() => handleToggle("movie")}
        >
          <h2 className="font-bold text-xl">Chọn phim</h2>
          <button
            className={`rounded-full w-6 h-6 ${
              openSection === "movie"
                ? "rotate-180 text-white bg-sky-700"
                : "rotate-0 bg-white text-sky-700"
            }`}
          >
            <FontAwesomeIcon
              icon={faSortDown}
              className="relative"
              style={{ top: "-2px" }}
            />
          </button>
        </div>
        <div
          ref={movieRef.contentRef}
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: openSection === "movie" ? "auto" : "0px",
            opacity: openSection === "movie" ? 1 : 0,
          }}
        >
          <div className="pb-4 px-4 relative">
            <Carousel
              infinite={true}
              showDots={false}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              responsive={movieSelection}
              additionalTransfrom={0}
              autoPlaySpeed={3000}
              className="static"
              minimumTouchDrag={80}
              slidesToSlide={1}
              draggable={false}
              customRightArrow={<CustomButtonRight />}
              customLeftArrow={<CustomButtonLeft />}
            >
              {filmChunks.map((chunk, index) => (
                <div key={index} className="flex flex-col items-center">
                  {chunk.map((film, subIndex) => (
                    <div
                      key={subIndex}
                      className=" px-1 cursor-pointer transition-all duration-300 h-full min-h-[330px] max-h-[400px] md:max-h-none md:h-[410px] lg:h-auto"
                      onClick={() => handleSelectMovie(film)}
                    >
                      <img src={film.url} alt={film.title} className="mb-2" />
                      <p className="font-medium text-base px-2 ">
                        {film.title}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 shadow-xl rounded-md mb-8">
        <div
          className="flex items-center justify-between px-4 py-4 hover:cursor-pointer"
          onClick={() => handleToggle("showTime")}
        >
          <h2 className="font-bold text-xl">Chọn suất</h2>
          <button
            className={`rounded-full w-6 h-6 ${
              openSection === "showTime"
                ? "rotate-180 text-white bg-sky-700"
                : "rotate-0 bg-white text-sky-700"
            }`}
          >
            <FontAwesomeIcon
              icon={faSortDown}
              className="relative"
              style={{ top: "-2px" }}
            />
          </button>
        </div>
        <div
          ref={showTimeRef.contentRef}
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: openSection === "showTime" ? "auto" : "0px",
            opacity: openSection === "showTime" ? 1 : 0,
          }}
        >
          <div className="pb-4 px-4">
            {movie && movie.movieSchedule && movie.movieSchedule.length > 0 ? (
              <div className="">
                <div className="flex gap-3 mx-10 my-5">
                  {movie.movieSchedule.map((v, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center text-gray-500 p-2 rounded-md w-[80px] cursor-pointer ${
                        selectSchedule == i && "bg-blue-800 text-white"
                      }`}
                      onClick={() => {
                        setSelectSchedule(i);
                        setSelectTime(null);
                      }}
                    >
                      <span>{formatDate(v)}</span>
                      <span>{dayAndMonth(v)}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2 items-center py-4 border-b border-gray-300">
                  <span className="col-span-1 capitalize">2D Phụ đề</span>
                  <div className="col-span-4 flex gap-3">
                    {["18:20", "20:30", "00:40"].map((v, i) => (
                      <div
                        key={i}
                        className={`py-2 px-4 border rounded text-sm font-normal text-black-10 cursor-pointer md:hover:bg-blue-800 md:hover:text-white transition-all duration-500 ease-in-out ${
                          selectTime == i && "bg-blue-800 text-white"
                        }`}
                        onClick={() => setSelectTime(i)}
                      >
                        {v}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <span className="pb-4 px-2">Vui lòng chọn phim</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSelection;
