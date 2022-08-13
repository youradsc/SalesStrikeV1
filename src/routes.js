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
        { path: 'store', element: <MainStore /> },
        { path: 'signup', element: <CreateAccount /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
        {path: 'comingsoon', element: <ComingSoon />}
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
