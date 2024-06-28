/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
const MenuComponent = ({ menuItems, title }) => {
  return (
    <>
      <div className="hover relative py-5">
        <span className="hover:text-orange-400 hover:cursor-pointer">
          {title}
          <FontAwesomeIcon className="ml-2 " icon={faChevronDown} size="2xs" />
        </span>
        <div className="group-hover absolute hidden top-[55px] -inset-0 z-[800] transition-all duration-300 ease-in-out shadow-xl ">
          <ul className="bg-white min-w-[200px] text-center border border-white border-solid rounded">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-sm py-2 text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300"
              >
                <Link to={item.path} className="">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuComponent;
