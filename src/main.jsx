import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PolicyPage from './pages/PolicyPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import TestimonialPage from './pages/TestimonialPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ServiceRoofingPage from './pages/ServiceRoofingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/private-policy',
        element: <PolicyPage />,
      },
      {
        path: '/faq',
        element: <FAQPage />,
      },
      {
        path: '/testimonials',
        element: <TestimonialPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/service/roof',
        element: <ServiceRoofingPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
