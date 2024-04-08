import React from "react";
import Modal from "../../modal";
import DeleteIcon from "../../svg/Delete";
import { useLocation } from "react-router-dom";
import { DeleteContent } from "../../../components/landingPage/deleteContent";
import { useVisibilityControl } from "../../../hooks/useVisibilityControl";

const CardContainer = ({ children, id }) => {
  const router = useLocation();
  const { pathname } = router;
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

  return (
    <>
      <div className="flex rounded-md h-max bg-white w-full mt-6">
        <div className="py-5 w-full">{children}</div>
        {pathname === "/" ? (
          <div
            onClick={handleClick}
            className="flex items-center justify-center cursor-pointer w-10 bg-red-50 rounded-r-md"
          >
            <DeleteIcon />
          </div>
        ) : (
          ""
        )}
      </div>

      <Modal
        openModal={isOpen}
        setOpenModal={setIsOpen}
        modalContent={<DeleteContent id={id} setIsOpen={setIsOpen} />}
      />
    </>
  );
};

export default CardContainer;
