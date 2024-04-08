import React from "react";
import Header from "../../share/header";
import { Button } from "@heathmont/moon-core-tw";
import SearchIcon from "../../share/svg/Search";
import { SearchInput } from "../../share/searchInput";
// import { getFlightByLocation } from "../../../helper/apis/flights/getFlightByLocation";
// import { useMutation } from "@tanstack/react-query";
// import apiMessageHelper from "../../../helper/apiMessageHelper";

const Layout = ({
  title = "",
  card = null,
  setSearchInput = () => {},
  data = [],
}) => {
  // const { mutateAsync } = useMutation({ mutationFn: getFlightByLocation });

  const handleSearch = () => {
    // mutateAsync({ payload: "Lagos" }).then((res) => {
    //   apiMessageHelper({
    //     message: res?.message,
    //     statusCode: res?.statusCode,
    //     onSuccessCallback: () => {
    //       console.log("Hello world");
    //     },
    //   });
    // });
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center px-20 py-10 bg-white">
        {title && (
          <p className="text-blue text-4xl font-bold">{`Add ${title} To Your Itineraries`}</p>
        )}
        <div className="flex items-center justify-center space-x-2 pt-10  w-full">
          <div className="w-[900px]">
            <SearchInput width="w-full" setSearchInput={setSearchInput} />
          </div>
          <Button
            onClick={handleSearch}
            className="bg-blue h-[55px] w-[55px] rounded-lg shadow-md"
          >
            <SearchIcon />
          </Button>
        </div>
        <div className="mt-2 w-[900px]">
          {data.map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-start space-x-3 rounded-lg px-10 py-1  border"
            >
              <img src={value.photoUri} alt="" className="h-12 w-12" />
              <p className="font-bold">{value.name}</p>
            </div>
          ))}
        </div>
      </div>

      {card && (
        <div className="flex items-center justify-center bg-gray-200 border-t py-20 w-full border">
          {card}
        </div>
      )}
    </>
  );
};

export default Layout;
