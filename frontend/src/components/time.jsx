// time.jsx

import React, { useState, useEffect } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{currentTime}</p>
    </div>
  );
}

export default Time;