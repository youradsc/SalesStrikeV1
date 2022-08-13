import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import Withdrawls from '../components/withdrawls';
import Purchases from '../components/purchases';
import { useOutletContext } from 'react-router-dom';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Product Name', alignRight: false },
  { id: 'id', label: 'SKU', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'qty', label: "Qty", alignRight: false},
  { id: 'days', label: "Days Passed", alignRight: false},
  { id: 'cost', label: "Cost", alignRight: false},
  { id: 'returned', label: "Returned", alignRight: false},
  { id: 'remaining', label: "Remaining Inventory", alignRight: false},
  { id: 'sold', label: "Sold Inventory", alignRight: false},
  { id: '' },
];

// ----------------------------------------------------------------------


export default function Sales() {
  return (

    <div>
      <Purchases/>
      {/*<Withdrawls /> */}
     </div>

  );
}
