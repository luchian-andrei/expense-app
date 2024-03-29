import React from "react";
import { useState } from "react";

const SubstractModal = ({
  handleModal,
  handleRevenueValue,
  handleRevenueMessage,
  handleTransactionValue,
}) => {
  const [numberInputValue, setNumberInputValue] = useState(null);

  const [textInputValue, setTextInputValue] = useState("");

  function onClose() {
    if (numberInputValue === null) {
      handleModal(false);
    } else if (textInputValue === "") {
      handleModal(false);
      handleRevenueValue(numberInputValue);
      handleRevenueMessage("details not specified");
      handleTransactionValue(numberInputValue);
    } else {
      handleModal(false);
      handleRevenueValue(numberInputValue);
      handleRevenueMessage(textInputValue);
      handleTransactionValue(numberInputValue);
    }
  }

  return (
    <div className="bg-white absolute w-3/4 h-3/4 grid grid-rows-5 rounded-lg p-4 ">
      <h1 className="text-2xl font-bold underline text-green-700">
        Add your revenue
      </h1>
      <h3 className="text-xl  font-semibold">
        1.Enter the value of the revenue
      </h3>
      <div>
        <input
          required
          type="number"
          step="10.00"
          className="bg-green-700 text-white font-semibold p-2 rounded-md w-3/4 "
          onChange={(e) => setNumberInputValue(e.target.value)}
        />
      </div>

      <h3 className="text-xl mb-5 font-semibold">
        2.Write something about the transaction
      </h3>
      <div>
        <input
          required
          type="text"
          className="bg-green-700 text-white font-semibold p-2 rounded-md w-3/4 placeholder:text-white placeholder:text-sm"
          placeholder="ex:Work bonus"
          onChange={(e) => setTextInputValue(e.target.value)}
        />
      </div>

      <button
        onClick={onClose}
        className="bg-yellow-700 text-white p-2 rounded-lg hover:bg-green-700 w-1/3 sm:w-1/5 self-center place-self-center"
      >
        Close
      </button>
    </div>
  );
};

export default SubstractModal;
