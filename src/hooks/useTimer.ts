import { useRef, useState } from "react";

export const useTimer = () => {
  const interval = useRef<NodeJS.Timer | null>(null);
  const [time, setTime] = useState(0);

  const subtract = (n: number) => {
    setTime((prev) => {
      const next = prev - n;
      if (next <= 0) {
        stop();
        return 0;
      }
      return next;
    });
  };

  const countdown = (n: number) => {
    if (interval.current) {
      stop();
    }
    setTime(n);
    interval.current = setInterval(() => {
      subtract(1);
    }, 1000);
  };

  const decrement = (n: number) => {
    subtract(n);
  };

  const stop = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  return { time, countdown, stop, decrement };
};
