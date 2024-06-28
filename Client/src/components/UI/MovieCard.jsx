import { faCalendar, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import PreviewVideo from "./PreviewVideo";
import useOutsideClick from "../../hooks/useOutsideClick";
import useResizeMobile from "../../hooks/useResizeMobile";

const MovieCard = ({ data, preview }) => {
  const isMobile = useResizeMobile();
  const [previewVideo, setPreviewVideo] = useState(false);
  const previewRef = useRef(null);
  useOutsideClick(previewRef, () => {
    if (previewVideo) setPreviewVideo(false);
  });
  return (
    <React.Fragment>
      {previewVideo && (
        <PreviewVideo
          src="https://www.youtube.com/watch?v=Ad_JPC9Gano"
          ref={previewRef}
        />
      )}
      <div className="flex gap-8 relative">
        <div
          className={`border relative border-white col-span-1 drop-shadow-2xl z-2 ${
            !preview && "lg:-translate-y-20 md:-translate-y-16 -translate-y-0"
          }`}
        >
          <img
            width={220}
            height={280}
            src={isMobile ? data.banner : data.url}
            alt={data.title}
            className='border-2 rounded border-white lg:w-[280px] lg:h-[400px] w-full h-full object-cover duration-500 ease-in-out group-hover:opacity-100"
      scale-100 blur-0 grayscale-0)'
          />
          {preview && (
            <div className="absolute inset-0 flex items-center justify-center z-[6]">
              <button onClick={() => setPreviewVideo(!previewVideo)}>
                <img
                  width={64}
                  height={64}
                  src="https://www.galaxycine.vn/_next/static/media/button-play.2f9c0030.png"
                  alt=""
                />
              </button>
            </div>
          )}
        </div>
        <div className="col-span-2 lg:-translate-y-20 flex flex-col justify-end md:-translate-y-16 -translate-y-0 gap-2">
          <h3 className="font-medium text-3xl">{data.title}</h3>
          <span className="flex gap-2">
            <p className="font-normal">
              <FontAwesomeIcon icon={faClock} color="orange" /> 101 Phút
            </p>
            <p className="font-normal">
              <FontAwesomeIcon icon={faCalendar} color="orange" /> 31/5/2024
            </p>
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon
              icon={faStar}
              color="orange"
              size="lg"
              className="mr-1"
            />
            <p className="text-xl font-normal">9.5</p>
          </span>
          <div className="flex flex-row items-center">
            <span className="text-gray-500 mr-2 text-sm">Quốc gia: </span>
            <span className="text-sm">Mỹ</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-gray-500 mr-2 text-sm">Nhà sản xuất: </span>
            <span className="text-sm capitalize">Nobita</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block h-8 mt-2 py-[6px] text-gray-500 text-sm w-[70px] flex-0">
              Thể loại:
            </span>
            <div className="ml-2 flex flex-wrap gap-1 flex-1">
              {["Hoạt hình", "Hài", "Phiêu Lưu"].map((v, i) => (
                <p
                  key={i}
                  className="capitalize border border-gray-400 text-sm rounded-md py-1 px-5"
                >
                  {v}
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-block h-8 mt-2 py-[6px] text-gray-500 text-sm w-[70px] flex-0">
              Đạo diễn:
            </span>
            <div className="ml-2 flex flex-wrap gap-1 flex-1">
              {["John Ưick"].map((v, i) => (
                <p
                  key={i}
                  className="capitalize border border-gray-400 text-sm rounded-md py-1 px-5 "
                >
                  {v}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-nowrap items-center">
            <span className="inline-block h-8 mt-2 py-[6px] text-gray-500 text-sm w-[70px] flex-0">
              Diễn viên:
            </span>
            <div className="ml-2 flex flex-wrap gap-1 flex-1">
              {[
                "meo meo",
                "Đom đóm",
                "Trịnh trần phương tuấn",
                "Trịnh trần phương tuấn",
              ].map((v, i) => (
                <p
                  key={i}
                  className="capitalize border border-gray-400 text-sm rounded-md py-1 px-5 "
                >
                  {v}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;
