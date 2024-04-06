import { Button } from '@heathmont/moon-core-tw';
import React from 'react'

const TripCard = ({index, value}) => {
  return (
    <div
      key={index}
      className={`${value.bgColor}  p-4 rounded-md text-white shadow-lg w-[270px] h-[193px] mt-10`}
    >
      <div className={index === 1 ? "text-black" : "text-white"}>
        <p className={`font-semibold `}>{value.title}</p>
        <p className="text-[12px] mt-3">{value.text}</p>
      </div>

      <Button
        className={`w-full py-2 mt-12 rounded-md shadow-lg ${
          index === 2 ? "bg-white text-blue" : "bg-blue text-white"
        }`}
      >
        {value.buttonText}
      </Button>
    </div>
  );
}

export default TripCard