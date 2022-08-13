import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
  AppBankManagement
} from '../sections/@dashboard/app';

import Topup from '../components/topup';
import { useOutletContext } from "react-router-dom";
import { useState } from 'react';



// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const [tableData, setTableData] = useState([]);
  
  var {Inventory, Orders, Products, Sales} = JSON.parse(localStorage.getItem("allData"))
  var total = Inventory[Inventory.length - 1]
  console.log(total)
  const data ={
    ATR: total.TotalDollarsSold,
    ATC: total.TotalDollarsHeld,
    PT: total.ProductTurnOver,
    ROI: total.ROIPercent
  }
  return (
    
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="All Time Return" total={"$"+data["ATR"]} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="All Time Cost" total={"$"+data["ATC"]} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Product Turnover" total={+data["PT"]} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Return on Investment" total={data["ROI"]} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppBankManagement/>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Topup/>
          </Grid>
        </Grid>
      </Container>
    
  );
}
