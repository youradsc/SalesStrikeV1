import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import ResponsiveAppBar from '../../components/NavBar';


// ----------------------------------------------------------------------

//const APP_BAR_MOBILE = 64;
//const APP_BAR_DESKTOP = 92;
const APP_BAR_MOBILE = 0;
const APP_BAR_DESKTOP = 0;

const RootStyle = styled('div')({
  display: 'flex',
  overflow: 'hidden',
  flexDirection: "row"
});

const RootStyle2 = styled('div')({
  display: 'flex',
  minWidth: '100%',
  overflow: 'hidden',
  flexDirection: "column"
});
const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      
      <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
        <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        <MainStyle>
          <Outlet />
        </MainStyle>
      </RootStyle>
    </div>
  );
}
