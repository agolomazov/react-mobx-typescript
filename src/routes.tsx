import React from 'react';
import { QueryParamProvider } from 'use-query-params';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { AboutPage, HomePage } from '@pages';
import { MainLayout } from '@layouts';

/**
 * @param {AppRoutesProps} props - пропсы компонента
 *
 * @returns {JSX.Element} Компонент с роутами приложения
 */
export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <MainLayout>
          <Switch>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </MainLayout>
      </QueryParamProvider>
    </BrowserRouter>
  );
}
