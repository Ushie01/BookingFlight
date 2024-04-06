import React from "react";
import Header from "../../share/header";
import MainContainer from "./mainSection/container";
import SideBar from "./mainSection/sideBar";
import RightSection from "./mainSection/rightSection";

const Landing = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <SideBar/>
        <RightSection/>
      </MainContainer>
    </>
  );
};

export default Landing;
