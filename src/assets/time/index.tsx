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
    // Convert the current time to Islamabad time
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Karachi",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return <>{formatTime(time)}</>;
};

export default GetTime;
