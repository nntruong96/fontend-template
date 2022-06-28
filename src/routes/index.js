import { lazy } from 'react';
const Main = lazy(() => import('pages/Main'));
const indexRoutes = [
  {
    path: `/`,
    component: Main,
  },
];

export default indexRoutes;
