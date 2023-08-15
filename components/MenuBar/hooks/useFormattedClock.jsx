import { useEffect, useState } from 'react';

/**
 * useFormattedClock returns the time as HH:MM AM  and updates the time every second
 */

const shortTime = new Intl.DateTimeFormat('en', {
  timeStyle: 'short',
});

const useFormattedClock = () => {
  const [clock, setClock] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(shortTime.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return [clock];
};

export default useFormattedClock;
