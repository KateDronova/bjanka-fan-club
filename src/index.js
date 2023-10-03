import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './Root';
import WelcomePage from './pages/welcomePage';
import SignUpPage from './pages/signUpPage'
import ErrorPage from './pages/errorPage';
import UserPage from './pages/userPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <WelcomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/user',
        element: <UserPage />,
        errorElement: <ErrorPage />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
