import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [theme, setTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function handleModal(arg) {
    setShowModal(arg);
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-wrap h-screen bg-blue-400 dark:bg-[#1b1b1b] justify-center items-center text-center">
      <h1 className="text-violet-800 dark:text-violet-300 font-bold text-5xl">
        Login
      </h1>
      <form
        className="grid grid-rows-4 justify-center items-center w-full"
        onSubmit={() =>
          navigate("/pages/HomePage", { state: { inheritedTheme: theme } })
        }
      >
        <input
          type="email"
          placeholder="Enter your email adress"
          className="rounded-lg p-4 mb-4"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="rounded-lg p-4"
          required
        />
        <p
          className="font-bold dark:text-white hover:text-white hover:cursor-pointer hover:underline"
          onClick={() => setShowModal(true)}
        >
          {" "}
          I have forgotten my password
        </p>
        {/* <Link to={"./pages/HomePage"}> */}
        <button
          type="submit"
          className="bg-red-400 rounded-xl p-[10px] font-bold mb-4"
        >
          Submit{" "}
        </button>
        {/* </Link> */}
      </form>
      {showModal && <Modal dark={theme} handleModal={handleModal} />}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-black dark:bg-white dark:text-black text-white rounded-[10px] p-[10px] font-bold absolute top-5 right-10"
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default LoginPage;
