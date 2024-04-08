import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FlightContext } from "./FlightContext";
import { ErrorToast, SuccessToast } from "../../share/toastBar";

export const FlightProvider = ({ children }) => {
  const initialRender = useRef(true);
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    const flightFromLocalStorage = JSON.parse(
      localStorage.getItem("flight") || "[]"
    );
    setFlight(flightFromLocalStorage);
  }, []);

  const handleAddFlightCard = (selectedFlightCard) => {
    setFlight((prevCards) => {
      const isCardAvailable = prevCards.some(
        (item) => item?.iataCode === selectedFlightCard?.iataCode
      );
      if (!isCardAvailable) {
        SuccessToast({ text: "Added to itinerary 🎉😍" });
        return [...prevCards, selectedFlightCard];
      } else {
        ErrorToast({ text: "Itinerary already exist " });
        return prevCards;
      }
    });
  };

  const handleDelete = (iataCode) => {
    if (iataCode) {
      const updatedFlightList = flight.filter(
        (card) => !(card.iataCode === iataCode)
      );
      setFlight(updatedFlightList);
    }
  };

  const handleDeleteAll = () => {
    setFlight([]);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    window.localStorage.setItem("flight", JSON.stringify(flight));
  }, [flight]);

  return (
    <>
      <ToastContainer />
      <FlightContext.Provider
        value={{ flight, handleDelete, handleDeleteAll, handleAddFlightCard }}
      >
        {children}
      </FlightContext.Provider>
    </>
  );
};

export default FlightProvider;
