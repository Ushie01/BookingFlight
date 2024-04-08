import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HotelContext } from "./HotelContext";
import { ErrorToast, SuccessToast } from "../../share/toastBar";

export const HotelProvider = ({ children }) => {
  const initialRender = useRef(true);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const hotelFromLocalStorage = JSON.parse(
      localStorage.getItem("hotel") || "[]"
    );
    setHotel(hotelFromLocalStorage);
  }, []);

  const handleAddHotelCard = (selectedhotelCard) => {
    setHotel((prevCards) => {
      const isCardAvailable = prevCards.some(
        (item) => item?.id === selectedhotelCard?.id
      );
      if (!isCardAvailable) {
        SuccessToast({ text: "Added to itinerary 🎉😍" });
        return [...prevCards, selectedhotelCard];
      } else {
        ErrorToast({ text: "Itinerary already exist " });
        return prevCards;
      }
    });
  };

  const handleDelete = (id) => {
    console.log(id)
    if (id) {
      const updatedHotelList = hotel.filter(
        (card) => !(card.id === id)
      );
      setHotel(updatedHotelList);
    }
  };

  const handleDeleteAll = () => {
    setHotel([]);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    window.localStorage.setItem("hotel", JSON.stringify(hotel));
  }, [hotel]);

  return (
    <>
      <ToastContainer />
      <HotelContext.Provider
        value={{ hotel, handleDelete, handleDeleteAll, handleAddHotelCard }}
      >
        {children}
      </HotelContext.Provider>
    </>
  );
};

export default HotelProvider;
