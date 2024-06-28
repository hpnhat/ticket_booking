import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { films } from "../../../data.example";
import useOutsideClick from "../../hooks/useOutsideClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { formatDate, dayAndMonth } from "../../systems/ultis/FormatDate";
import usePreviewHiddenScroll from "../../hooks/usePreviewHiddenScroll";
import Preview from "../../components/UI/PreviewVideo";
import MovieTab from "../../components/UI/MovieTab";
import MovieCard from "../../components/UI/MovieCard";
const MovieDetail = () => {
  const { slug } = useParams();
  const [preview, setPreview] = useState(false);
  const [selectSchedule, setSelectSchedule] = useState(0);
  const movie = films.find((movie) => movie.slug === slug);
  const previewRef = useRef(null);
  useOutsideClick(previewRef, () => {
    if (preview) setPreview(false);
  });
  usePreviewHiddenScroll(preview);
  return (
    <React.Fragment>
      {preview && (
        <Preview
          src="https://www.youtube.com/embed/hMrTVMZS0TA?si=PQNs2HAKoNMdW1nE"
          ref={previewRef}
        />
      )}
      <div className="relative bg-black w-full flex justify-center">
        <div className="relative">
          <img src={movie.banner} alt="" />
          <button
            onClick={() => setPreview(!preview)}
            className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
          >
            <img
              width={64}
              height={64}
              src="https://www.galaxycine.vn/_next/static/media/button-play.2f9c0030.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-7 grid-cols-1 my-0 mx-auto container lg:max-w-7xl gap-8 py-7 md:px-4 px-4">
        <div className="col-span-5 w-full ">
          <MovieCard data={movie} />
          <div className="">
            <span className="border-l-4 border-blue-800 lg:text-lg font-medium text-sm capitalize">
              &ensp; Nội dung Phim
            </span>
            <p className="mt-3">
              Trong bộ phim hoạt hình này, chú mèo mê đồ ăn Garfield bị cuốn vào
              một vụ trộm để giúp cha mình - một tên trộm đường phố, khỏi một
              chú mèo biểu diễn khác đang muốn trả thù ông. Bắt đầu như một mối
              quan hệ hợp tác miễn cưỡng và kết thúc bằng việc Garfield và Vic
              nhận ra rằng cha con họ không hề khác biệt như vẻ ngoài của mình.
            </p>
          </div>
          <div>
            <span className="border-l-4 border-blue-800 lg:text-lg font-medium text-sm capitalize">
              &ensp; Lịch chiếu
            </span>
            <div className="flex gap-3 mx-10 my-5">
              {movie.movieSchedule.map((v, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center text-gray-500 p-2 rounded-md w-[80px] cursor-pointer ${
                    selectSchedule == i && "bg-blue-800 text-white"
                  }`}
                  onClick={() => setSelectSchedule(i)}
                >
                  <span>{formatDate(v)}</span>
                  <span>{dayAndMonth(v)}</span>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-blue-800" />
            <div className="grid grid-cols-5 gap-2 items-center">
              <span className="col-span-1 capitalize">2D Phụ đề</span>
              <div className="col-span-4 flex gap-3">
                {["18:20", "20:30", "00:40"].map((v, i) => (
                  <Link key={i} to={`/booking/${movie.slug}`}>
                    <div className="border border-gray-300 rounded-sm px-6 py-1">
                      {v}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:block hidden">
          <MovieTab />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieDetail;
