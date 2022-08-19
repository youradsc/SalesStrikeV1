// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Analytics',
    path: '/comingsoon',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Inventory',
    path: '/dashboard/inventory',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Sales',
    path: '/dashboard/sales',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Transactions',
    path: '/dashboard/transactions',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Add Bank Info',
    path: '/addbank',
    icon: getIcon('eva:person-add-fill'),
  }
];

export default navConfig;
