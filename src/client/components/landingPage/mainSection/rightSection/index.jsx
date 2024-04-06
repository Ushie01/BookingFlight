import React from "react";
import Banner from "./../../assets/banner.png";
import { Button } from "@heathmont/moon-core-tw";
import LeftArrow from "../../../../share/svg/LeftArrow";
import Calendar from "../../../../share/svg/Calendar";
import RightArrow from "../../../../share/svg/RightArrow";
import { FAMILY_TRIP_DATA } from "../../constant/data";
import MovingPlane from "../../../../share/svg/MovingPlan";
import { FlightCard } from "../cards/components/FlightCard";
import TripCard from "../cards/components/TripCard";
import CardLayout from "../cards/layout/CardLayout";
import ActivitiesIcon from "../../../../share/svg/Activities";
import HotelCard from "../cards/components/HotelCard";
import ActivityCard from "../cards/components/ActivityCard";
import HotelsIcon from "../../../../share/svg/Hotels";

const RightSection = () => {
  return (
    <div className="w-full h-max border p-6 bg-white rounded-md shadow-lg">
      <div className="relative w-full">
        <img src={Banner} alt="banner alt" className="w-full" />
        <Button className="absolute top-3 left-3 bg-white opacity-65 p-2 rounded-md">
          <LeftArrow />
        </Button>
      </div>

      <div className="space-y-1">
        <div className="flex items-center py-1 px-2 mt-3 bg-[#FEF4E6] text-brown text-[14px] space-x-2 w-max">
          <Calendar />
          <p>21 March 2024</p>
          <RightArrow />
          <p>21 April 2024</p>
        </div>
        <p className="text-[24px] font-bold text-black">Bahamas Family Trip</p>
        <p className="text-gray-500">
          New York,  United States of America | Solo Trip
        </p>
      </div>

      <div className="flex items-start justify-start space-x-2">
        {FAMILY_TRIP_DATA.map((value, index) => (
          <TripCard index={index} value={value} />
        ))}
      </div>

      <div className="mt-16">
        <div className="">
          <p className="font-bold">Trip itineraries</p>
          <p className="text-[11px] font-semibold text-gray-500">
            Your trip itineraries are placed here
          </p>
        </div>
      </div>

      <CardLayout
        icon={<MovingPlane />}
        cardTitle="Flights"
        buttonTitle="Add Flights"
        card={<FlightCard />}
        bgColor="bg-lightGray"
        titleTextColor="text-black"
        buttonTextColor="text-blue"
      />

      <CardLayout
        icon={<HotelsIcon color="white" />}
        cardTitle="Hotels"
        buttonTitle="Add Hotels"
        card={<HotelCard />}
        bgColor="bg-darkGray"
        titleTextColor="text-white"
        buttonTextColor="text-darkGray"
      />

      <CardLayout
        icon={<ActivitiesIcon color="white" />}
        cardTitle="Activities"
        buttonTitle="Add Activities"
        card={<ActivityCard />}
        bgColor="bg-blue"
        titleTextColor="text-white"
        buttonTextColor="text-blue"
      />
    </div>
  );
};

export default RightSection;
