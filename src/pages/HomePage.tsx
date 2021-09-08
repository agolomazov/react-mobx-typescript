import React, { useState, useEffect } from 'react';
import * as L from 'korus-ui';
import { Link } from 'react-router-dom';

import { Timer, TimerView } from '@features/timer';

/**
 * Главная страница
 * @returns {JSX}
 */
export const HomePage: React.FC = () => {
  const [timer] = useState(new Timer());

  useEffect(() => {
    const interval = setInterval(() => timer.incrementTimer(), 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <L.H1>Home page!!</L.H1>
      <Link to="/about">to about page</Link>
      <TimerView timer={timer} />
    </>
  );
};
