import "./clock.css";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Clock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function getTimeOffsetString(date: Date) {
    return moment(time).format("Z")
  }

  return (
    <div className="clock-container">
      <div className="clock-label">ВАШЕ МЕСТНОЕ ВРЕМЯ</div>
      <div className="clock-time-container">
        <div className="clock-time">{time.toLocaleTimeString()}</div>
        <div className="clock-timezone">{getTimeOffsetString(time)}</div>
      </div>
    </div>
  );
}
