import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hotels from "./client/components/itinerary/Hotels";
import Landing from "./client/components/landingPage";
import Flights from "./client/components/itinerary/Flights";
import Activities from "./client/components/itinerary/Activities";
import HotelProvider from "./client/context/hotelsContext/HotelProvider";
import FlightProvider from "./client/context/flightsContext/FlightProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <FlightProvider>
        <HotelProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/add-to-itinerary/hotels" element={<Hotels />} />
              <Route path="/add-to-itinerary/flights" element={<Flights />} />
              <Route
                path="/add-to-itinerary/activities"
                element={<Activities />}
              />
            </Routes>
          </BrowserRouter>
        </HotelProvider>
      </FlightProvider>
    </QueryClientProvider>
  );
}

export default App;
