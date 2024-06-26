import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";

const TransactionCard = ({ value, message }) => {
  let CurrencyBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <div className="flex justify-center items-center flex-wrap w-full sm:w-3/4 p-2">
      <div
        className={
          value === null
            ? ""
            : value < 0
            ? "bg-red-300 dark:bg-red-600 p-3 rounded-lg mb-2 w-full"
            : "bg-green-300 dark:bg-green-600 p-5 rounded-lg mb-2 w-full"
        }
      >
        <span className="font-bold text-xl ">
          {value !== null ? <p>{CurrencyBalance.format(value)}</p> : ""}{" "}
          {/* <FontAwesomeIcon
            // style={value > 0 ? { color: "green" } : { color: "orangered" }}
            className={
              value > 0
                ? "text-green-700 dark:text-green-900"
                : "text-red-700 dark:text-red-900"
            }
            icon={
              value !== null
                ? value < 0
                  ? faArrowTrendDown
                  : faArrowTrendUp
                : null
            }
          /> */}
          {value !== null ? (
            <FontAwesomeIcon
              className={
                value > 0
                  ? "text-green-700 dark:text-green-900"
                  : "text-red-700 dark:text-red-900"
              }
              icon={value < 0 ? faArrowTrendDown : faArrowTrendUp}
            />
          ) : null}
        </span>
        <p className="font-semibold"> {message}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
