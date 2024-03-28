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
    <div className="bg-green-500 absolute w-3/4 h-3/4 block rounded-lg p-4 ">
      <h1 className="text-2xl font-bold mb-5 ">Register your revenue</h1>
      <h3 className="text-xl mb-10">1.Enter the value of the revenue</h3>
      <input
        required
        type="number"
        step="10.00"
        className="bg-gray-500 text-white p-2 rounded-md mb-4 w-3/4"
        placeholder="ex: 234"
        onChange={(e) => setNumberInputValue(e.target.value)}
      />
      <h3 className="text-xl mb-10">2.Write something about the transaction</h3>
      <div>
        <input
          required
          type="text"
          className="bg-gray-500 text-white p-2 rounded-md w-3/4 mb-5"
          placeholder="ex:Received from my mom"
          onChange={(e) => setTextInputValue(e.target.value)}
        />
      </div>

      <button onClick={onClose} className="bg-black text-white p-2 rounded-lg ">
        Close
      </button>
    </div>
  );
};

export default SubstractModal;
