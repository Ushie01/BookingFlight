import React from "react";
import { SIDERBAR_LINKS } from "../../constant/data";
import { Button } from "@heathmont/moon-core-tw";
import { useLink } from "../../../../hooks/useLink";
import UpDownIcon from "../../../../share/svg/UpDown";

const SideBar = () => {
  const { link: click, handleClick } = useLink("Activities");
  return (
    <div className="w-[300px] border bg-white h-max p-5 rounded-md shadow-md">
      <div className="space-y-1">
        {SIDERBAR_LINKS.map((link, index) => (
          <div
            onClick={() => handleClick(link.name)}
            className={`flex items-center justify-start cursor-pointer space-x-3 p-3 ${
              link.name === click
                ? "bg-blue rounded-lg text-white hover:rounded-lg hover:transition hover:transform hover:duration-150 hover:translate-x-2"
                : ""
            }`}
            key={index}
          >
            <link.icon color={link.name === click ? "white" : "gray"} />
            <p className={link.name === click ? "text-white" : "text-gray-500"}>
              {link.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2 bg-lightGray p-3 my-12 rounded-md">
        <Button className="bg-blue px-3 py-3 rounded-lg">
          <p className="text-white font-extrabold">Go</p>
        </Button>

        <div className="flex items-center justify-between w-full space-x-2">
          <p className="text-gray-600 text-[12px]">Personal Account</p>
          <UpDownIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
