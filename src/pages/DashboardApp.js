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

// ----------------------------------------------------------------------
const data =
{
  ATR: "$1000",
  ATC: "$1000",
  ATP: "$1000",
  IRR: "72%"
}
export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="All Time Return" total={data["ATR"]} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="All Time Cost" total={data["ATC"]} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="All Time Profit" total={data["ATP"]} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Average IRR" total={data["IRR"]} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppBankManagement/>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Topup/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
