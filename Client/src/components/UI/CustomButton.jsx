/* eslint-disable react/prop-types */
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButtonRight = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -right-[4.7%] top-[18.25rem] bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center"
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        color="white"
        className="mr-[2.3rem]"
      />
    </button>
  );
};

const CustomButtonLeft = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -left-[4.7%] top-[18.25rem] bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center rotate-180"
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        color="white"
        className="mr-[2.3rem]"
      />
    </button>
  );
};

export { CustomButtonRight, CustomButtonLeft };
