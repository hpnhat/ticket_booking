/* eslint-disable react/prop-types */
import {
  faCirclePlay,
  faStar,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";
import usePreviewHiddenScroll from "../../hooks/usePreviewHiddenScroll";
import Preview from "../../components/UI/PreviewVideo";

const MovieList = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [preview, setPreview] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);
  const previewRef = useRef(null);

  useOutsideClick(previewRef, () => {
    if (preview) setPreview(false);
  });
  usePreviewHiddenScroll(preview);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePreview = (movie) => {
    setCurrentMovie(movie);
    setPreview(true);
  };

  return (
    <React.Fragment>
      {data.map((movie, index) => (
        <div className="relative m-2" key={index}>
          <div className="relative">
            {isDesktop ? (
              <img src={movie.url} alt={movie.title} className="rounded-lg" />
            ) : (
              <Link to={`dat-ve/${movie.slug}`}>
                <img src={movie.url} alt={movie.title} className="rounded-lg" />
              </Link>
            )}
            <div
              className={`${
                isDesktop ? "block" : "hidden"
              } absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition rounded-lg`}
            >
              <Link
                to={`dat-ve/${movie.slug}`}
                className="m-1 px-4 py-2 text-white rounded border-orange-600 bg-orange-600 hover:bg-orange-400 hover:border-orange-400"
              >
                <FontAwesomeIcon icon={faTicket} /> Mua vé
              </Link>
              <button
                onClick={() => handlePreview(movie)}
                className="m-1 px-5 py-2 bg-transparent border text-white rounded hover:bg-orange-400 hover:border-orange-400 hover:bg-opacity-50"
              >
                <FontAwesomeIcon icon={faCirclePlay} /> Trailer
              </button>
            </div>
            <div
              style={{
                clipPath: "polygon(12px 0px, 100% 0px, 100% 100%, 0% 100%)",
              }}
              className="absolute flex items-center gap-1 right-0 bottom-16 bg-black bg-opacity-50 w-fit pr-2 pl-4 "
            >
              <FontAwesomeIcon icon={faStar} color="yellow" />
              <p className="text-white font-bold">8.7</p>
            </div>
          </div>
          <Link
            to={`dat-ve/${movie.slug}`}
            className="text-lg font-medium my-2"
          >
            {movie.title}
          </Link>
          {preview && currentMovie === movie && (
            <Preview
              src="https://www.youtube.com/embed/hMrTVMZS0TA?si=PQNs2HAKoNMdW1nE"
              ref={previewRef}
            />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

export default MovieList;
