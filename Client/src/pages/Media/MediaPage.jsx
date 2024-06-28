import {
  faAngleLeft,
  faAngleRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  films,
  selectDate,
  selectFilm,
  selectTime,
} from "../../../data.example";
import MovieCard from "../../components/UI/MovieCard";
import MovieTab from "../../components/UI/MovieTab";
import SelectOption from "../../components/UI/SelectOption";

const MediaPage = () => {
  const [selectSchedule, setSelectSchedule] = useState(0);
  const { slug } = useParams();
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState();
  const [currentIndex, setCurrentIndex] = useState();
  const movie = films.find((movie) => movie.slug === slug);
  useEffect(() => {
    if (!movie) return;
    setImages(movie.actors);
  }, [movie]);
  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setPreviewImage(images[newIndex].url);
  };
  const handlePrevImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setPreviewImage(images[newIndex].url);
  };
  return (
    <React.Fragment>
      <div className="grid lg:grid-cols-7 grid-cols-1 my-0 mx-auto container lg:max-w-7xl gap-8 py-7 ">
        {previewImage && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-all">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <button
              className="absolute mr-2 right-0 z-50"
              onClick={handleNextImage}
            >
              <FontAwesomeIcon icon={faAngleRight} size="2xl" color="white" />
            </button>
            <button
              className="absolute ml-2 left-0 z-50"
              onClick={handlePrevImage}
            >
              <FontAwesomeIcon icon={faAngleLeft} size="2xl" color="white" />
            </button>
            <button
              className="absolute m-4 right-0 top-0 z-50"
              onClick={() => setPreviewImage()}
            >
              <FontAwesomeIcon icon={faX} size="2xl" color="white" />
            </button>
            <img
              width={400}
              height={600}
              src={previewImage}
              alt=""
              className='w-auto h-auto object-cover  duration-500 ease-in-out group-hover:opacity-100"
                scale-100 blur-0 grayscale-0) z-50'
            />
          </div>
        )}
        <div className="col-span-5 w-full ">
          <div className="flex gap-2 items-start">
            <a
              href="/"
              className="text-grey-40 hover:underline text-sm font-normal not-italic min-w-max"
            >
              Trang chủ /
            </a>
            <a
              href=""
              className="text-grey-40 hover:underline text-sm font-normal not-italic min-w-max"
            >
              Phim /
            </a>
            <span className="text-sm font-normal not-italic capitalize">
              {movie.title}
            </span>
          </div>
          <MovieCard data={movie} preview={true} />
          <div className=" md:mt-8">
            <div className="mb-6 border-l-4 border-blue-800 lg:text-lg font-medium text-sm uppercase ">
              &ensp; Nội dung Phim
            </div>
            {movie.content.map((v, i) => (
              <p key={i} className="font-sans mb-2">
                {v}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <div className="mb-6 border-l-4 border-blue-800 lg:text-lg font-medium text-sm uppercase ">
              &ensp; Hình trong phim
            </div>

            <div className="flex overflow-x-auto mx-2 w-full">
              {images?.map((data, index) => (
                <img
                  width={191}
                  height={137}
                  className=" rounded m-2 cursor-pointer"
                  key={index}
                  src={data.url}
                  alt={data.title}
                  onClick={() => {
                    setPreviewImage(data.url);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <div className="mb-6 border-l-4 border-blue-800 lg:text-lg font-medium text-sm uppercase ">
              &ensp; Diễn viên
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {movie.actors.map((v, i) => (
                <div className="flex items-start gap-2" key={i}>
                  <img
                    className="w-[128px] h-[85px] rounded object-cover "
                    src={v.url}
                    alt={v.name}
                  />
                  <div className="">
                    <h3 className="text-sm text-black not-italic font-semibold">
                      {v.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <div className="mb-6 border-l-4 border-blue-800 lg:text-lg font-medium text-sm uppercase ">
              &ensp; tình tiết bên lề
            </div>
            {movie.content.map((v, i) => (
              <p key={i} className="font-sans mb-2">
                {v}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <div className="mb-6 border-l-4 border-blue-800 lg:text-lg font-medium text-sm uppercase ">
              &ensp; bài viết liên quan
            </div>
            <div>
              <div>
                <a href="">
                  <img
                    src="https://cdn.galaxycine.vn/media/2024/6/19/750_1718788973451.jpg"
                    className="w-[192px] h-[128px] object-cover rounded "
                    alt=""
                  />
                </a>
                <h4>
                  <a href=""></a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:block hidden">
          <div className="w-full h-auto mb-8">
            <div className="bg-blue-800 text-center text-white capitalize not-italic font-bold py-4 rounded">
              Mua vé nhanh
            </div>
            <div className="py-4 rounded-b border-gray-200">
              <div className="col-span-3">
                <SelectOption title={"Chọn phim"} data={selectFilm} />
              </div>
              <div className="col-span-3">
                <SelectOption title={"Chọn ngày"} data={selectDate} />
              </div>
              <div className="col-span-3">
                <SelectOption title={"Chọn suất"} data={selectTime} />
              </div>
            </div>
          </div>
          <MovieTab />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MediaPage;
