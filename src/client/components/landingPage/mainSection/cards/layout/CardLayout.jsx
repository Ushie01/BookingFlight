import React from "react";
import { Button } from "@heathmont/moon-core-tw";

const CardLayout = ({
  icon,
  cardTitle,
  buttonTitle,
  card,
  bgColor,
  titleTextColor,
  buttonTextColor,
}) => {
  return (
    <div className={`mt-6  h-max w-full rounded-md p-4 ${bgColor}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {icon}
          <p className={`font-bold text-xl ${titleTextColor}`}>{cardTitle}</p>
        </div>
        <Button
          className={`bg-lightBlue rounded-lg px-5  py-2 font-bold shadow-lg bg-white text-blue ${buttonTextColor}`}
        >
          {buttonTitle}
        </Button>
      </div>

      <div className="space-y-4">{card}</div>
    </div>
  );
};

export default CardLayout;
