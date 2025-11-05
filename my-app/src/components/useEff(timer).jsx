import { useState, useEffect } from "react";

function TimerExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // This runs once when component mounts
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); // increment every second
    }, 1000);

    // Cleanup function → runs when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default TimerExample;
