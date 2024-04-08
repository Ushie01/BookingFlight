import React from "react";
import Layout from "./Layout";
import HotelCard from "../../share/cards/components/HotelCard";
import hotelsData from "../constant/searchHotel.json";

const Hotels = () => {
  const data = hotelsData.data.hotels;

  // console.log(data);
  const newDataArray = data.map((value) => ({
    id: value.property.blockIds[0],
    name: value.property.name,
    address: value.accessibilityLabel,
    photo: value.property.photoUrls[0],
    reviewCount: value.property.reviewCount,
    checkInDate: value.property.checkinDate,
    checkOutDate: value.property.checkoutDate,
    price: value.property.priceBreakdown.grossPrice.value,
  }));

  return (
    <Layout
      title="Hotels"
      card={
        <div className="space-y-4 px-36">
          {data.map((value, index) => (
            <HotelCard key={index} value={newDataArray[index]} />
          ))}
        </div>
      }
    />
  );

};

export default Hotels;
