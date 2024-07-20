"use client";
import { useState, useEffect } from "react";

const GetTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    let minutes: any = date.getMinutes();
    let seconds: any = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return <>{formatTime(time)}</>;
};

export default GetTime;
