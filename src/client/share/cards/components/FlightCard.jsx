import { Button } from "@heathmont/moon-core-tw";
import { useLocation } from "react-router-dom";
import AirplaneTakeoffIcon from "../../../share/svg/AirplaneTakeoff";
import LandingPlane from "../../../share/svg/LandingPlane";
import NairaIcon from "../../../share/svg/Naira";
import CardContainer from "../container/CardContainer";
import { FLIGTHS_DATA } from "../../../components/landingPage/constant/data";
import useFlight from "../../../context/flightsContext/useFlight";

export const FlightCard = (props) => {
  const router = useLocation();
  const { pathname } = router;
  const { handleAddFlightCard } = useFlight();
  const { iataCode, logoUrl, airLineName, currencyCode, unit, nanos } = props.value;
  const handleAddFlightToItinerary = () => {
    handleAddFlightCard(props.value)
  }

  return (
    <CardContainer id={iataCode}>
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center justify-start space-x-3">
          <img src={logoUrl} alt="Airline Logo alt" className="h-16 w-16" />
          <div>
            <p className="font-bold text-black text-xl">{airLineName}</p>
            <div className="flex items-center space-x-1">
              <p className="text-[12px] text-gray-500">{`${currencyCode} ${unit}`}</p>
              <p>.</p>
              <button className="bg-darkBlue text-white text-[12px] rounded-md p-2">
                First Class
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold">08:35</p>
            <p className="text-[11px] text-darkGray">Sun, 20 Aug</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <AirplaneTakeoffIcon />
              <p className="text-[11px] text-darkGray">Duration: 1h 45m</p>
              <LandingPlane />
            </div>

            <div className="flex items-center justify-center h-2 bg-[#E7F0FF] rounded-full w-[250px]">
              <div className="w-20 h-2 bg-blue rounded-full"></div>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-bold text-[11px]">LOS</p>
              <p className="text-[11px] text-darkGray">Direct</p>
              <p className="font-bold text-[11px]">SIN</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-bold">08:35</p>
            <p className="text-[11px] text-darkGray">Sun, 20 Aug</p>
          </div>
        </div>

        <div className="flex items-center">
          <NairaIcon />
          <p className="font-bold text-3xl">{`${nanos.toLocaleString()}.00`}</p>
        </div>
      </div>

      <hr className="w-full mt-4" />
      <div className="flex items-center p-6 space-x-4 text-gray-600 text-[14px] ">
        <p className="">Facilities:</p>
        {FLIGTHS_DATA.map((value, index) => (
          <div key={index} className="flex items-center space-x-2">
            {value.icon}
            <p>{value.title}</p>
          </div>
        ))}
      </div>

      <hr className="w-full" />

      <div className="flex items-center justify-between text-blue mt-4 px-6 font-semibold text-[14px]">
        <div className="flex items-center space-x-8">
          <p>Flight details</p>
          <p>Price details</p>
        </div>

        {pathname === "/" ? (
          <p>Edit details</p>
        ) : (
          <Button
            onClick={handleAddFlightToItinerary}
            className="text-white bg-blue font-bold rounded-lg shadow-md"
          >
            Add Flight
          </Button>
        )}
      </div>
    </CardContainer>
  );
};
