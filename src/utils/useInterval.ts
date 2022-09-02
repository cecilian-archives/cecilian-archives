import { useEffect, useRef } from "react";

interface IntervalOptions {
  interval: number;
  delay?: number;
}

export const useInterval = (
  callback = () => {},
  { interval }: IntervalOptions
) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (interval !== null) {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};

export const useDelayedInterval = (
  callback = () => {},
  { interval, delay }: IntervalOptions
) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval after a delay.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id: ReturnType<typeof setInterval> | undefined = undefined;
    function setup() {
      tick();
      id = setInterval(tick, interval);
    }

    if (interval !== null && delay !== null) {
      setTimeout(setup, delay);
      return () => clearInterval(id);
    }
  }, [interval]);
};
