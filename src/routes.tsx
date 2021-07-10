import { Suspense, lazy } from 'react';
import type { PartialRouteObject } from 'react-router';
import AuthGuard from './components/AuthGuard';
import MainLayout from './components/layout/MainLayout';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Overview = Loadable(lazy(() => import('./pages/general/Overview')));

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Overview />,
      },
    ],
  },
];

export default routes;
