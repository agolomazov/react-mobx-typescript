import React, { useMemo } from 'react';
import * as L from 'korus-ui';

import packageData from '@packageSrc';
import { formatDate } from '@common/utils';

/**
 * Компонент подвала страницы
 * @returns {JSX}
 */
export const Footer: React.FC = () => {
  const currentYear = useMemo(() => formatDate('yyyy'), []);

  return (
    <L.Div className="wrapper">
      <L.Main className="content-box items margin-y">
        <L.Footer>
          <L.Div className="txt-gray txt-small">
            <L.Div className="right">8 (800) 100-8-812, бесплатно по РФ</L.Div>
            <L.Div>{`© СберКорус, 2012 — ${currentYear}`}</L.Div>
            Версия приложения:&nbsp;
            {packageData.version}
          </L.Div>
        </L.Footer>
      </L.Main>
    </L.Div>
  );
};
