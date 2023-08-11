import React from 'react';
import {
  PersonalCard,
  Like,
  Home,
  Document,
  Moneys,
  Status,
  Setting,
  Receipt,
  Ticket,
} from '@/components/assets';

const SidebarData = [
  {
    id: '1',
    title: 'Dashboard',
    path: '/',
    icon: <Home />,
  },
  {
    id: '2',
    title: 'Pay Links',
    path: '/paylink',
    icon: <Ticket />,
  },
  {
    id: '3',
    title: 'Invoices',
    path: '',
    icon: <PersonalCard />,
  },
  {
    id: '3',
    title: 'Balances',
    path: '/team',
    icon: <Moneys />,
  },
  {
    id: '4',
    title: 'Transation',
    path: '/messages',
    icon: <Receipt />,
  },
  {
    id: '5',
    title: 'Product',
    path: '/support',
    icon: <Status />,
  },
  {
    id: '6',
    title: 'Customer',

    path: '/support',
    icon: <Like />,
    cName: 'nav-text',
  },
  {
    id: '7',
    title: 'Address Book',
    path: '/support',
    icon: <Document />,
    cName: 'nav-text',
  },
  {
    id: '8',
    title: 'Setting',
    path: '/support',
    icon: <Setting />,
    cName: 'nav-text',
  },
];
export default SidebarData;
