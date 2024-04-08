import React, { useState } from "react";
import Layout from "./Layout";
import flightsData from "../constant/searchFlight.json";
import { FlightCard } from "../../share/cards/components/FlightCard";
import flightLocationData from "./../constant/searchFlightLocation.json";

const Flights = () => {
  const [searchInput, setSearchInput] = useState('---');
  const [locationSelected, setLocationSelected] = useState(false);
  const data = flightsData?.data?.aggregation?.airlines;
  const newDataArray = data.map((value) => ({
    logoUrl: value.logoUrl,
    airLineName: value.name,
    currencyCode: value.minPrice.currencyCode,
    unit: value.minPrice.units,
    nanos: value.minPrice.nanos,
    iataCode: value.iataCode,
  }));

const filterData = flightLocationData.data.filter((value) => {
  const searchLowerCase = searchInput.toLowerCase();
  return (
    (value.name && value.name.toLowerCase().includes(searchLowerCase)) &&
    (value.countryName &&
      value.countryName.toLowerCase().includes(searchLowerCase)) &&
    (value.regionName &&
      value.regionName.toLowerCase().includes(searchLowerCase)) &&
    (value.cityName && value.cityName.toLowerCase().includes(searchLowerCase))
  );
});



  return (
    <Layout
      data={filterData}
      location
      title="Flights"
      locationSelected={locationSelected}
      setLocationSelected={setLocationSelected}
      setSearchInput={setSearchInput}
      card={
        <div className="w-full">
          <div className="space-y-4 px-36">
            {data.map((value, index) => (
              <FlightCard
                key={index}
                value={newDataArray[index]} 
              />
            ))}
          </div>
        </div>
      }
    />
  );
};

export default Flights;
