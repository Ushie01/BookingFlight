import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="flex items-start justify-between space-x-5 p-4 bg-lightGray border w-full">
      {children}
    </div>
  );
};

export default MainContainer;
