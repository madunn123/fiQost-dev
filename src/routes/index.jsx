/* eslint-disable import/prefer-default-export */
import Login from '@/pages/test';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);


// test