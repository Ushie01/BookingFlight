import React from "react";
import CardContainer from "../container/CardContainer";
import Hotel from "../../../assets/Hotel.png";
import MapPointer from "../../../../../share/svg/MapPointer";
import StarIcon from "../../../../../share/svg/Star";
import BedIcon from "../../../../../share/svg/Bed";
import NairaIcon from "../../../../../share/svg/Naira";
import SwimmingPool from "../../../../../share/svg/SwimmingPool";
import BarIcon from "../../../../../share/svg/Bar";
import Calendar from "../../../../../share/svg/Calendar";

const HotelCard = () => {
  const FACILITIES = [
    { name: "Pool", icon: <SwimmingPool /> },
    { name: "Bar", icon: <BarIcon /> },
  ];

  const FLIGHT_TIME = ["Check In: 20-04-2024", "Check Out: 29-04-2024"];

  return (
    <CardContainer>
      <div className="flex space-x-3 px-4 w-full">
        <img src={Hotel} alt="Hotel alt" />

        <div className="w-full">
          <div className="">
            <div className="flex items-start justify-between">
              <div className="pr-5 space-y-1 w-8/12">
                <p className="font-bold text-xl">Riviera Resort, Lekki</p>
                <p className="text-sm">
                  18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                  Lekki Phase1
                </p>

                <div className="flex space-x-3 text-sm">
                  <div className="flex items-center justify-start space-x-1">
                    <MapPointer />
                    <p className="text-blue">Show in map</p>
                  </div>

                  <div className="flex items-center justify-between text-gray-500 space-x-1">
                    <StarIcon />
                    <p className="text-gray-600">8.5(436)</p>
                  </div>

                  <div className="flex items-center justify-between text-gray-500 space-x-1">
                    <BedIcon />
                    <p className="text-gray-600">King size room</p>
                  </div>
                </div>
              </div>

              <div className="w-4/12 items-end justify-end">
                <div className="flex items-center justify-end">
                  <NairaIcon />
                  <p className="font-bold text-3xl">123,450.00</p>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <p className="text-sm">Total Price: NGN 560,000</p>
                  <p className="text-sm">1 room x 10 nights incl. taxes</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center py-4 space-x-4 text-gray-600 text-[14px] ">
              <p className="">Facilities:</p>
              {FACILITIES.map((value, index) => (
                <div key={index} className="flex items-center space-x-1">
                  {value.icon}
                  <p>{value.name}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 w-fu text-gray-600">
              {FLIGHT_TIME.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm space-x-1"
                >
                  <Calendar color="gray" />
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <hr />

          <div className="flex items-end justify-between text-blue mt-4 font-semibold text-[14px]">
            <div className="flex items-center space-x-4">
              <p>Hotel details</p>
              <p>Price details</p>
            </div>
            <p>Edit details</p>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default HotelCard;
