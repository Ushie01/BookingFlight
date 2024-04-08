import React from "react";

const Modal = ({ modalContent, openModal, setOpenModal, className }) => {
  return (
    <div>
      {openModal && (
        <div>
          <div
            onClick={() => setOpenModal(false)}
            className={`z-10000 fixed w-[100%] h-[100%] top-0 left-0 z-50 bg-black opacity-75`}
          ></div>
          <div
            className={`z-10000 fixed bg-white top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl ${className}`}
          >
            <div className="flex flex-col items-center w-full">
              {/* Modal Content */}
              <div>{modalContent}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
