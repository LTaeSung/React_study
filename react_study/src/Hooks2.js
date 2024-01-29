import React, { useState, useEffect } from 'react';

const Hooks2 = () => {
  let [today, setToday] = useState(new Date());
  useEffect(() => {
    //매개변수x 콜백함수로 받는다
    setInterval(() => {
      const nextDay = {
        ...today,
        today: new Date(),
      };
      setToday(new Date());
      // console.log(today);
      console.log(nextDay);
    }, 1000);
  });
  return <>{today.toString()}</>;
};

export default Hooks2;
