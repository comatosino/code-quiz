import { useRef, useState } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const interval = useRef<NodeJS.Timer | null>(null);

  const subtract = (t: number) => {
    setTime((prev) => {
      const next = prev - t;
      if (next <= 0) {
        stop();
        return 0;
      }
      return next;
    });
  };

  const countdown = (t: number) => {
    if (t < 0) {
      throw new Error('invalid time');
    }
    if (interval.current) {
      stop();
    }
    setTime(t);
    interval.current = setInterval(() => {
      subtract(1);
    }, 1000);
  };

  const decrement = (t: number) => {
    subtract(t);
  };

  const stop = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  return { time, countdown, stop, decrement };
};
