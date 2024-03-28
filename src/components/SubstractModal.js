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

  // function onClose() {
  //   handleModal(false);
  //   handleExpenseValue(numberInputValue);
  //   handleExpenseMessage(textInputValue);
  //   handleTransactionValue("-" + numberInputValue);
  // }

  return (
    <div className="bg-red-500 absolute w-3/4 h-3/4 block rounded-lg  p-4">
      <h1 className="text-2xl font-bold mb-5">Register your expense</h1>
      <h3 className="text-xl mb-10">1.Enter the value of the expense</h3>
      <input
        type="number"
        step="10.00"
        className="bg-gray-500 text-white p-2 rounded-md mb-4 w-3/4"
        placeholder="ex: 150"
        onChange={(e) => setNumberInputValue(e.target.value)}
      />
      <h3 className="text-xl mb-10">1.Write something about the transaction</h3>
      <div>
        <input
          type="text"
          className="bg-gray-500 text-white p-2 rounded-md w-3/4 mb-5"
          placeholder="ex:Given to my friend"
          onChange={(e) => setTextInputValue(e.target.value)}
        />
      </div>

      <button onClick={onClose} className="bg-black text-white p-2 rounded-lg">
        Close
      </button>
    </div>
  );
};

export default SubstractModal;
