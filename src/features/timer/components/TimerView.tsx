import React from 'react';
import { observer } from 'mobx-react-lite';
import { Timer } from '../Timer';

interface TimerViewProp {
  timer: Timer;
}

export const TimerView: React.FC<TimerViewProp> = observer(({ timer }) => (
  <span>Seconds passed: {timer.secondPassed}</span>
));
