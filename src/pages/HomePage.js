import React from "react";
import { useState, useEffect } from "react";
import AddModal from "../components/AddModal";
import SubstractModal from "../components/SubstractModal";
import TransactionCard from "../components/TransactionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleUnbalanced,
  faScaleUnbalancedFlip,
  faScaleBalanced,
  faSun,
  faMoon,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../components/useLocalStorage";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { setItem, getItem } = useLocalStorage("mode");
  const navigate = useNavigate();

  console.log(getItem());

  const [theme, setTheme] = useState(getItem());
  const [balance, setBalance] = useState(123456);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSubstractModal, setShowSubstractModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionMessage, setTransactionMessage] = useState(null);
  const [transactionValue, setTransactionValue] = useState(null);
  const [lastTransaction, setLastTransaction] = useState(null);
  const [showSpan, setShowSpan] = useState(false);

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
        onClick={() => [
          setTheme(theme === "dark" ? "light" : "dark"),
          setItem(theme === "dark" ? "light" : "dark"),
        ]}
        className="bg-black dark:bg-white dark:text-black hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white text-white rounded-lg p-[5px]  font-bold absolute top-1 right-1 sm:top-5 sm:right-10"
      >
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faSun} style={{ color: "orange" }} />
        ) : (
          <FontAwesomeIcon icon={faMoon} style={{ color: "lightblue" }} />
        )}
      </button>
      <button
        className="bg-black dark:bg-white dark:text-black text-white rounded-full p-[5px] sm:p-[10px] font-bold absolute top-1 right-10 sm:top-20 sm:right-10"
        onClick={() => [navigate("/")]}
      >
        Log Out
      </button>{" "}
      <h1 className="text-violet-800 dark:text-violet-400 font-bold text-3xl  absolute top-0 mt-2 mr-16 sm:mr-0">
        Dashboard{" "}
      </h1>
      <div
        id="wrapper"
        className="bg-[#1b1b1b] dark:bg-blue-400 h-5/6  w-3/4 sm:w-3/5 md:w-1/2  rounded-lg flex justify-center items-center flex-wrap mt-4"
      >
        <div
          id="balance"
          className="bg-white dark:bg-black dark:text-white w-full h-1/4 flex justify-center items-center flex-wrap mr-6 ml-6 mt-6 rounded-lg text-2xl font-mono font-bold"
        >
          <div className="w-full font-bold text-xl">
            Balance{" "}
            {lastTransaction === null && (
              <p>
                <FontAwesomeIcon
                  icon={faScaleBalanced}
                  onMouseOver={() => setShowSpan(true)}
                  onMouseLeave={() => setShowSpan(false)}
                />
                {showSpan ? (
                  <span className="absolute bg-white dark:bg-black  p-2 top-1 left-1">
                    Add a transaction to use this option.
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
                  <span className="absolute bg-green-300  p-2 top-1 left-1 ">
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
                  <span className="absolute bg-red-300 p-2 top-1 left-1">
                    Your last transaction took money from your balance.
                  </span>
                ) : null}
              </p>
            )}
          </div>
          <span className="p-2">{CurrencyBalance.format(balance)}</span>
        </div>
        <div
          id="regiter-transaction"
          className="bg-white dark:bg-black dark:text-white w-full h-1/4 flex justify-center items-center flex-wrap mr-6 ml-6  rounded-lg overflow-y-scroll no-scrollbar"
        >
          <p className="w-full font-bold text-xl pt-4 pb-0 ">
            Add a transaction{" "}
            <FontAwesomeIcon
              style={
                lastTransaction > 0 ? { color: "green" } : { color: "red" }
              }
              icon={faMoneyBillTransfer}
            />{" "}
          </p>
          <button
            id="add"
            className="w-1/3 h-1/2 hover:bg-green-500 text-4xl pb-3 rounded-lg"
            onClick={() => setShowAddModal(true)}
          >
            +
          </button>
          <button
            id="substract"
            className="w-1/3 h-1/2 hover:bg-red-500 text-4xl pb-3 rounded-lg"
            onClick={() => setShowSubstractModal(true)}
          >
            -
          </button>
        </div>
        <div
          id="transactions-history"
          className="bg-white dark:bg-black dark:text-white w-full h-1/4 flex justify-center items-start flex-wrap mr-6 ml-6 rounded-lg overflow-y-scroll no-scrollbar"
        >
          <p className="w-full font-bold text-xl p-2 ">Last transactions</p>

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
