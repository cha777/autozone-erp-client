import { Suspense, lazy } from 'react';
import type { PartialRouteObject } from 'react-router';
import MainLayout from './components/layout/MainLayout';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <MainLayout />,
  },
];

export default routes;
