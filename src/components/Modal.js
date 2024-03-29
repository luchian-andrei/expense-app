import React from "react";

const Modal = ({ dark, handleModal }) => {
  return (
    <div className="bg-white absolute w-3/4 h-3/4 sm:w-1/2 sm:h-2/3 grid grid-rows-4 rounded-lg  p-4">
      <h1 className="text-2xl font-bold mb-5">Don't worry !</h1>
      <h3 className="text-xl mb-10 sm:mb-5 lg:mb-10">
        This login form isn't valid
      </h3>
      <p className="mb-16 sm:mb-8 lg:mb-16">
        Just write anything you have in mind and submit to proceed forward{" "}
      </p>
      <button
        onClick={() => handleModal(false)}
        className="bg-black text-white p-2 rounded-lg hover:bg-purple-700 hover:dark:bg-purple-400 w-1/3 self-center place-self-center"
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
