/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import "./style.css";
const SelectOption = ({ title, data, number }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selected, setSelected] = useState("");
  const [isHeightExceeds, setIsHeightExceeds] = useState(false);
  useEffect(() => {
    if (selectRef.current) {
      const height = selectRef.current.offsetHeight;
      if (height > 250) {
        setIsHeightExceeds(true);
      } else {
        setIsHeightExceeds(false);
      }
    }
  }, [openSelect]);
  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    if (openSelect) setOpenSelect(false);
  });

  return (
    <>
      <div className="relative p-2">
        <button
          className="bg-white w-full text-left p-2 border border-gray-300 rounded flex flex-row items-center transition hover:border-orange-400"
          onClick={() => setOpenSelect(!openSelect)}
        >
          <span className="bg-orange-400 px-1 mr-2 text-white text-xs rounded">
            {number}
          </span>
          <span className="truncate">{selected === "" ? title : selected}</span>
        </button>
        <div
          style={{ zIndex: 999 }}
          ref={selectRef}
          className={` flex flex-col absolute mt-1 w-full  bg-white border border-gray-300 rounded shadow-lg ${
            openSelect ? "block" : "hidden"
          }
          ${isHeightExceeds && "max-h-64 overflow-y-scroll custom-scrollbar"}`}
        >
          {data.map((value, index) => (
            <span
              key={index}
              className="cursor-pointer select-none p-2 hover:bg-gray-200 transition"
              onClick={() => {
                setSelected(value);
                setOpenSelect(false);
              }}
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectOption;
