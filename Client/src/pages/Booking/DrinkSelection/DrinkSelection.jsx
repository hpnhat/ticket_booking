import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useState } from "react";

const DrinkSelection = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <h3 className="text-l mb-4 font-semibold">Chọn Combo</h3>
      <ul>
        <li className="flex mb-5">
          <img
            alt="iCombo 1 Big Extra STD"
            width={150}
            height={100}
            className='inline-block rounded-md  w-[150px] h-[100px] object-cover duration-500 ease-in-out group-hover:opacity-100"
            scale-100 blur-0 grayscale-0)'
            src="https://cdn.galaxycine.vn/media/2024/3/29/menuboard-coonline-2024-combo1-min_1711699834430.jpg"
            style={{ color: "transparent" }}
          />
          <div className="ml-4 flex-1">
            <h4 className="text-sm font-semibold mb-1">
              iCombo 1 Big Extra STD
            </h4>
            <div className="text-s">
              1 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <div>
                <strong>Giá: </strong>
                <span className="inline-block font-bold ">109.000&nbsp;₫</span>
              </div>
              <div className="flex bg-white border-md rounded shadow-qty">
                <div className="md:py-1 md:px-2 rounded outline-none">
                  <button className="md:px-2 outline-none cursor-pointer">
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                    />
                  </button>
                  <button className="inline-block px-2 mx-1">{quantity}</button>
                  <button className="md:px-2  cursor-pointer">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => setQuantity(quantity + 1)}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DrinkSelection;
