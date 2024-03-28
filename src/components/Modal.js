import React from "react";

const Modal = ({ dark, handleModal }) => {
  return (
    <div className="bg-white absolute w-1/2 h-1/2 block rounded-lg  p-4">
      <h1 className="text-2xl font-bold mb-5">Don't worry !</h1>
      <h3 className="text-xl mb-10">This login form isn't valid</h3>
      <p className="mb-16">
        Just write anything you have in mind and submit to proceed forward{" "}
      </p>
      <button
        onClick={() => handleModal(false)}
        className="bg-black text-white p-2 rounded-lg"
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
