import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/main.css';

import { AppRoutes } from '@src/routes';

/**
 * Рендер приложения
 * @returns {void}
 */
export const render = (): void => {
  ReactDOM.render(<AppRoutes />, document.getElementById('app'));
};

window.addEventListener('load', render);
