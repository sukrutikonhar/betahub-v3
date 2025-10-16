import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AgentsPage from '../pages/AgentsPage';
import ContactPage from '../pages/ContactPage';
import GartnerPage from '../pages/GartnerPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsOfServicePage from '../pages/TermsOfServicePage';
import CookiePolicyPage from '../pages/CookiePolicyPage';
import NotFoundPage from '../pages/NotFoundPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'agents',
        element: <AgentsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'gartner-2025',
        element: <GartnerPage />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: 'terms-of-service',
        element: <TermsOfServicePage />,
      },
      {
        path: 'cookie-policy',
        element: <CookiePolicyPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
