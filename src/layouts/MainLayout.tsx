import React, { ReactNode } from 'react';
import * as L from 'korus-ui';

import { Header, Footer } from '@common/components';

type LayoutProp = {
  children: ReactNode | ReactNode[];
};

/**
 * ### Базовый макет страницы
 *
 * @returns {JSX.Element} - Базовый макет страницы
 */
export const MainLayout: React.FC<LayoutProp> = ({ children }) => (
  <>
    <Header />
    <L.Div className="wrapper">
      <L.Main className="content-box items margin-y">{children}</L.Main>
    </L.Div>
    <Footer />
  </>
);
