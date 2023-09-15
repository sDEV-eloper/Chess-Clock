import React, { useState} from 'react';


const Timer1 = () => {
  const initialTime = 1200; // 20 minutes in seconds
  const [time, setTime] = useState(initialTime);

  const start1 = () => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
  <div onClick={start1}>
  {formatTime(time)}
  </div>
    </>
  );
};

export default Timer1;
