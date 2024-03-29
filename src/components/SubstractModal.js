import React from "react";
import { useState } from "react";

const SubstractModal = ({
  handleModal,
  handleExpenseValue,
  handleExpenseMessage,
  handleTransactionValue,
}) => {
  const [numberInputValue, setNumberInputValue] = useState(null);

  const [textInputValue, setTextInputValue] = useState("");

  function onClose() {
    if (numberInputValue === null) {
      handleModal(false);
    } else if (textInputValue === "") {
      handleModal(false);
      handleExpenseValue(numberInputValue);
      handleExpenseMessage("details not specified");
      handleTransactionValue("-" + numberInputValue);
    } else {
      handleModal(false);
      handleExpenseValue(numberInputValue);
      handleExpenseMessage(textInputValue);
      handleTransactionValue("-" + numberInputValue);
    }
  }

  return (
    <div className="bg-white absolute w-3/4 h-3/4 grid  grid-rows-5 rounded-lg  p-4">
      <h1 className="text-2xl font-bold mb-5 underline text-red-700">
        Add your expense
      </h1>
      <h3 className="text-xl mb-5 font-semibold">
        1.Enter the value of the expense
      </h3>
      <div>
        {" "}
        <input
          type="number"
          step="10.00"
          className="bg-red-700 text-white p-2 rounded-md mb-20 w-3/4 font-semibold"
          onChange={(e) => setNumberInputValue(e.target.value)}
        />
      </div>

      <h3 className="text-xl mb-5 font-semibold">
        2.Write something about the transaction
      </h3>
      <div>
        <input
          type="text"
          className="bg-red-700 text-white p-2 rounded-md w-3/4 mb-5 placeholder:text-white placeholder:text-sm"
          placeholder="ex:Dinner out"
          onChange={(e) => setTextInputValue(e.target.value)}
        />
      </div>

      <button
        onClick={onClose}
        className="bg-yellow-700 hover:bg-red-700 text-white w-1/3 sm:w-1/5 p-2 rounded-lg self-center place-self-center"
      >
        Close
      </button>
    </div>
  );
};

export default SubstractModal;
