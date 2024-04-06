import React from "react";
import HeaderContainer from "./HeaderContainer";
import Logo from "./assets/logo.png";
import { GenericSearch } from "@heathmont/moon-icons-tw";
import { HEADER_LINK_DATA } from "./constant/data";
import { Button } from "@heathmont/moon-core-tw";
import Avatar from "./assets/Avatar.png";
import ArrowDownIcon from "../svg/ArrowDown";
import { useLink } from "../../hooks/useLink";


const SearchBar = () => {
  return (
    <div className="flex items-center border px-2 rounded-lg h-[56px] bg-gray-100">
      <GenericSearch height={25} width={25} color="gray" />
      <input
        type="text"
        className="w-[200px] borderless-input rounded-md pl-2 h-12 borderless-input bg-gray-100"
        placeholder="Search"
      />
    </div>
  );
};

const NavItem = ({ link, handleClick, click }) => {
  const isActive = link.name === click;
  const textColor = isActive ? "text-black" : "text-gray-500";
  const iconColor = isActive ? "black" : "gray";

  return (
    <div
      onClick={() => handleClick(link.name)}
      className={`flex flex-col items-center justify-center space-y-1 cursor-pointer ${iconColor} ${textColor}`}
    >
      <link.icon color={iconColor} />
      <p className={textColor}>{link.name}</p>
    </div>
  );
};

const Header = () => {
  const { link: click, handleClick } = useLink("Home");

  return (
    <HeaderContainer>
      <div className="flex items-center justify-between w-[1920px] h-16">
        <div className="flex space-x-3">
          <img src={Logo} alt="logo alt" />
          <SearchBar />
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-4 pr-4">
            {HEADER_LINK_DATA.slice(0, 5).map((link, index) => (
              <NavItem
                key={index}
                link={link}
                handleClick={handleClick}
                click={click}
              />
            ))}
          </div>
          <div className="flex items-center border-l px-4 space-x-4">
            <Button className="bg-blue text-white p-2 rounded-lg">
              Subscribe
            </Button>
            <div className="flex items-center space-x-4">
              {HEADER_LINK_DATA.slice(5, 8).map((link, index) => (
                <NavItem
                  key={index}
                  link={link}
                  handleClick={handleClick}
                  click={click}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <img
                src={Avatar}
                alt="avatar alt"
                className="h-12 w-12 rounded-full border"
              />
              <ArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
