import { films } from "../../../data.example";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTicket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const MovieTab = () => {

    const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    const selected = films.slice(0, 3); // Change this to select the specific movies you want
    setSelectedMovies(selected);
  }, []);

  return (
    <div>
      <span className="border-l-4 border-blue-800 text-xl inline-block uppercase font-semibold">
        &ensp;phim đang chiếu
      </span>
      <div className="flex flex-col">
        {selectedMovies.map((movie, i) => (
          <div key={i}>
            <div className="relative my-4">
              <img
                className="object-cover rounded-lg"
                src={movie.banner}
                alt={movie.title}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition rounded-lg">
                <Link
                  to={`/dat-ve/${movie.slug}`}
                  className="m-1 px-4 py-2 text-white rounded border-orange-600 bg-orange-600 hover:bg-orange-400 hover:border-orange-400"
                >
                  <FontAwesomeIcon icon={faTicket} /> Mua vé
                </Link>
              </div>
            </div>
            <span className="font-medium py-4">{movie.title}</span>
          </div>
        ))}
      </div>
      <div className="text-right mt-2">
          <p className="border border-orange-500 py-2 px-8 inline-flex justify-center items-center text-orange-500 transition-all hover:bg-orange-500 hover:text-white cursor-pointer rounded-sm">
            Xem thêm
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" size="sm" />
          </p>
        </div>
    </div>
  );
};

export default MovieTab;
