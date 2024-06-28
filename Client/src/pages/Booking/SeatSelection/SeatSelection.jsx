import { Room } from "../../../../data.example";
import { useState } from "react";

const SeatSelection = () => {
  const maxSeatsPerRow = Math.max(
    ...Room[0].data.rows.map((row) => row.seats.length)
  );
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.length < 8) {
        if (selectedSeats.includes(seat)) {
          setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
          setSelectedSeats([...selectedSeats, seat]);
        }
      }
    }

  console.log(selectedSeats);
  return (
    <div>
      <div>
        {Room[0].data.rows.map((row, index) => (
          <div
            key={index}
            className="flex justify-between mb-3 md:gap-0 gap-1 flex-nowrap"
          >
            <h3>{row.name}</h3>
            <div className="flex md:gap-2 gap-1 grow justify-center min-w-[398px] flex-1">
              {row.seats.map((seat) => {
                let seatDisplay = null;
                if (seat.type === 2) {
                  if (seat.seatsInGroup[0].column === seat.column) {
                    seatDisplay = (
                      <div key={seat.id} className="flex">
                        <button
                          className={`${
                            seat.status === 0 ? "" : "bg-gray-300"
                          } md:h-5 h-4 border rounded md:text-s text-[10px] transition duration-200 ease-in-out text-black hover:text-white md:w-12 w-8 border-blue-10 flex justify-between gap-1/2 xl:hover:bg-orange-500 xl:hover:border-orange-500 ${
                            selectedSeats.includes(seat) &&
                            "bg-orange-500 text-white"
                          }`}
                          onClick={() => handleSeatSelection(seat)}
                        >
                          <span className="inline-block md:w-5 w-4 text-center">
                            {seat.seatsInGroup[0].column + 1}
                          </span>
                          <span className="inline-block md:w-5 w-4 text-center">
                            {seat.seatsInGroup[1].column + 1}
                          </span>
                        </button>
                      </div>
                    );
                  }
                } else {
                  seatDisplay = (
                    <button
                      key={seat.id}
                      disabled={seat.status !== 0}
                      className={`${
                        seat.status === 0
                          ? "hover:text-white xl:hover:bg-orange-500 xl:hover:border-orange-500"
                          : "bg-gray-300"
                      } md:h-5 h-4 border rounded md:text-s text-[10px] transition duration-200 ease-in-out  md:w-5 w-4 border-grey-20 ${
                        selectedSeats.includes(seat) &&
                        "bg-orange-500 text-white"
                      }`}
                      onClick={() => handleSeatSelection(seat)}
                    >
                      <span className="inline-block md:w-5 w-4 text-center">
                        {seat.column + 1}
                      </span>
                    </button>
                  );
                }
                return seatDisplay;
              })}
              {row.seats.length < maxSeatsPerRow &&
                Array.from({ length: maxSeatsPerRow - row.seats.length }).map(
                  (_, index) => (
                    <button
                      key={`empty-${row.index}-${index}`}
                      disabled
                      className="md:h-5 h-4 border rounded md:text-s text-[10px] transition duration-200 ease-in-out md:w-5 w-4 border-grey-20 opacity-0"
                    />
                  )
                )}
            </div>
            <h3>{row.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
