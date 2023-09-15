import React, { useState, useEffect } from "react";
import Header from "./Header";
import Timer1 from "./Timer";
import Timer2 from "./Timer2";

const ChessClock = () => {
  const [activeTimer, setActiveTimer] = useState(1); // 1 for timer1, 2 for timer2
  const [isTimer1Running, setIsTimer1Running] = useState(false);
  const [isTimer2Running, setIsTimer2Running] = useState(false);

  // Time 1
  const initialTime = 1200; // 20 minutes in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (isTimer1Running) {
      const timer1 = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer1);
            setIsTimer1Running(false);
            return prevTime;
          }
        });
      }, 1000);
      return () => clearInterval(timer1);
    }
  }, [isTimer1Running]);

  // Timer2
  const initialTime2 = 1200; // 20 minutes in seconds
  const [time2, setTime2] = useState(initialTime2);

  useEffect(() => {
    if (isTimer2Running) {
      const timer2 = setInterval(() => {
        setTime2((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer2);
            setIsTimer2Running(false);
            return prevTime;
          }
        });
      }, 1000);
      return () => clearInterval(timer2);
    }
  }, [isTimer2Running]);

  const toggleTimers = () => {
    if (activeTimer === 1) {
      setActiveTimer(2);
      setIsTimer1Running(false);
      setIsTimer2Running(true);
    } else {
      setActiveTimer(1);
      setIsTimer1Running(true);
      setIsTimer2Running(false);
    }
  };

  const formatTime1 = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const formatTime2 = (time2) => {
    const minutes = Math.floor(time2 / 60);
    const seconds = time2 % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="border container h-full">
      <div className="">
        <Header />
        <div className="bg-gray-300 flex justify-center">
          <div
            onClick={toggleTimers}
            className={`border bg-blue-800 w-full  text-white flex justify-center text-[12rem] p-16 ${
              activeTimer === 1 ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            {formatTime1(time)}
          </div>

          <div
            onClick={toggleTimers}
            className={`border bg-red-800 w-full  text-white flex justify-center text-[12rem] p-16 ${
              activeTimer === 2 ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            {formatTime2(time2)}
          </div>
        </div>
        <div className="bg-gray-300 flex justify-center text-center gap-1">
          <p className="bg-green-500 w-full p-3 text-2xl font-bold">Moves 1</p>
          <p className="bg-green-500 w-full p-3 text-2xl font-bold">Moves 2</p>
        </div>
      </div>
    </div>
  );
};

export default ChessClock;
