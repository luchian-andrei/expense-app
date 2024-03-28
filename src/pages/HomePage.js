import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AddModal from "../components/AddModal";
import SubstractModal from "../components/SubstractModal";
import TransactionCard from "../components/TransactionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import {
  faScaleUnbalanced,
  faScaleUnbalancedFlip,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const { state } = useLocation();
  const { inheritedTheme } = state;

  const [theme, setTheme] = useState(inheritedTheme);
  const [balance, setBalance] = useState(123456);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSubstractModal, setShowSubstractModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionMessage, setTransactionMessage] = useState(null);
  const [transactionValue, setTransactionValue] = useState(null);
  const [lastTransaction, setLastTransaction] = useState(null);
  const [showSpan, setShowSpan] = useState(false);

  console.log(lastTransaction);

  let CurrencyBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  function handleExpenseValue(expense) {
    let expenseValue = Number(expense);
    setBalance(balance - expenseValue);
  }

  function handleRevenueValue(revenue) {
    let revenueValue = Number(revenue);
    setBalance(balance + revenueValue);
  }

  function handleTransactionMessage(msg) {
    setTransactionMessage(msg);
  }

  function handleTransactionValue(val) {
    let valueOfTransaction = Number(val);
    setTransactionValue(valueOfTransaction);
  }

  function handleAddModal(arg) {
    setShowAddModal(arg);
  }
  function handleSubstractModal(arg) {
    setShowSubstractModal(arg);
  }

  useEffect(() => {
    setTransactions([
      ...transactions,
      {
        value: transactionValue,
        message: transactionMessage,
      },
    ]);
  }, [transactionValue]);

  useEffect(() => {
    if (transactions.length === 1) {
      setLastTransaction(null);
    } else if (transactions.length > 1) {
      setLastTransaction(transactions[transactions.length - 1].value);
    }
  }, [transactions]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={
        "flex flex-wrap h-screen bg-blue-400 dark:bg-[#1b1b1b] justify-center items-center text-center"
      }
    >
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-black dark:bg-white dark:text-black text-white rounded-full p-[10px] font-bold absolute top-5 right-10"
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
      <h1 className="text-violet-800 dark:text-violet-400 font-bold text-3xl  absolute top-0 mt-4">
        Dashboard{" "}
      </h1>
      <div
        id="wrapper"
        className="bg-[#1b1b1b] dark:bg-blue-400 h-5/6 w-3/5 sm:w-3/5 md:w-1/2  rounded-lg flex justify-center items-center flex-wrap mt-4"
      >
        <div
          id="balance"
          className="bg-white dark:bg-black dark:text-white w-full h-1/4 flex justify-center items-center flex-wrap mr-6 ml-6 mt-6 rounded-lg text-2xl font-mono font-bold"
        >
          <p className="w-full font-bold text-xl p-4">
            Balance{" "}
            {lastTransaction === null && (
              <p>
                <FontAwesomeIcon
                  icon={faScaleBalanced}
                  onMouseOver={() => setShowSpan(true)}
                  onMouseLeave={() => setShowSpan(false)}
                />
                {showSpan ? (
                  <span className="absolute bg-white dark:bg-black rounded-l-lg rounded-r-lg rounded-bl-none rounded-br-lg p-2 top-1 left-1">
                    Register a transaction and let us work on it
                  </span>
                ) : null}
              </p>
            )}
            {lastTransaction > 0 && (
              <p>
                <FontAwesomeIcon
                  style={{ color: "green" }}
                  icon={faScaleUnbalanced}
                  onMouseOver={() => setShowSpan(true)}
                  onMouseLeave={() => setShowSpan(false)}
                />
                {showSpan ? (
                  <span className="absolute bg-green-300 rounded-l-lg rounded-r-lg rounded-bl-none rounded-br-lg p-2 top-1 left-1 ">
                    Your last transaction added money to your balance.
                  </span>
                ) : null}
              </p>
            )}
            {lastTransaction < 0 && (
              <p>
                <FontAwesomeIcon
                  style={{ color: "red" }}
                  icon={faScaleUnbalancedFlip}
                  onMouseOver={() => setShowSpan(true)}
                  onMouseLeave={() => setShowSpan(false)}
                />
                {showSpan ? (
                  <span className="absolute bg-red-300 rounded-l-lg rounded-r-lg rounded-bl-none rounded-br-lg p-2 top-1 left-1">
                    Your last transaction took money from your balance.
                  </span>
                ) : null}
              </p>
            )}
          </p>
          {CurrencyBalance.format(balance)}
        </div>
        <div
          id="regiter-transaction"
          className="bg-white dark:bg-black dark:text-white w-full h-1/4 flex justify-center items-center flex-wrap mr-6 ml-6  rounded-lg"
        >
          <p className="w-full font-bold text-xl p-4">
            Register transaction{" "}
            <FontAwesomeIcon
              style={
                lastTransaction > 0 ? { color: "green" } : { color: "red" }
              }
              icon={faMoneyBillTransfer}
            />{" "}
          </p>
          <button
            id="add"
            className="w-1/3 h-1/2 hover:bg-green-500 text-4xl p-3 rounded-lg"
            onClick={() => setShowAddModal(true)}
          >
            +
          </button>
          <button
            id="substract"
            className="w-1/3 h-1/2 hover:bg-red-500 text-4xl p-3 rounded-lg"
            onClick={() => setShowSubstractModal(true)}
          >
            -
          </button>
        </div>
        <div
          id="transactions-history"
          className="bg-white dark:bg-black dark:text-white w-full h-1/4 flex justify-center items-start flex-wrap mr-6 ml-6 rounded-lg overflow-y-scroll no-scrollbar"
        >
          <p className="w-full font-bold text-xl p-4 ">Last transactions</p>

          {transactions.map((transaction, index) => (
            <TransactionCard
              key={index}
              value={transaction.value}
              message={transaction.message}
            />
          ))}
        </div>
      </div>
      {showAddModal && (
        <AddModal
          handleModal={handleAddModal}
          handleRevenueValue={handleRevenueValue}
          handleRevenueMessage={handleTransactionMessage}
          handleTransactionValue={handleTransactionValue}
        />
      )}
      {showSubstractModal && (
        <SubstractModal
          handleModal={handleSubstractModal}
          handleExpenseValue={handleExpenseValue}
          handleExpenseMessage={handleTransactionMessage}
          handleTransactionValue={handleTransactionValue}
        />
      )}
    </div>
  );
};

export default HomePage;
