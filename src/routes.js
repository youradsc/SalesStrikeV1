import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Transactions from './pages/Transactions';
//import Login from './pages/Login';
import NotFound from './pages/Page404';
import ComingSoon from './pages/Comingsoon';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import MainStore from "./components/MainStore"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import SignUp from "./components/Login";
import { CreateAccount } from "./components/CreateAccount";
import Login from "./components/Login";
import Home from './components/Home';
import AddBank from './components/AddBank';
import MainReset from './components/MainReset'
import Protected from './layouts/Protected';
import ViewStore from './components/Store/ViewStore';
import ContactUs from './components/ContactUs';


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'inventory', element: <Inventory /> },
        { path: 'sales', element: <Sales /> },
        { path: 'transactions', element: <Transactions /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: "viewstore", element: <ViewStore/>},
        { path: 'signup', element: <CreateAccount /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
        {path: 'comingsoon', element: <ComingSoon />},
        {path: 'reset', element: <MainReset />},
        {path: "contact", element: <ContactUs />}
      ],
    },
    {
      path: '/',
      element: <Protected />,
      children: [
        {path: 'addbank', element: <AddBank />},
        { path: 'store', element: <MainStore /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
