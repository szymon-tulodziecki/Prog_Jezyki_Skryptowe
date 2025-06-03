import React, { useState, useEffect } from 'react';

function TimerCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) return;
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="TimerCounter-value">
      Licznik sekund: {count}
      {count === 10 && <div>Osiągnięto maksymalną wartość!</div>}
    </div>
  );
}

export default TimerCounter;
