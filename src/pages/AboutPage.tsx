import React from 'react';
import * as L from 'korus-ui';
import { Link } from 'react-router-dom';

/**
 * Страница "О нас"
 * @returns {JSX}
 */
export const AboutPage: React.FC = () => (
  <>
    <L.H1>About page</L.H1>
    <Link to="/">to home page</Link>
  </>
);
