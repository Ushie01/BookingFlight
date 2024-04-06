import React from "react";

const HeaderContainer = ({ children }) => {
  return <div className="flex items-center justify-between p-4 bg-white border w-full">{children}</div>;
};

export default HeaderContainer;
