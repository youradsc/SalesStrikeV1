import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// components
import Logo from '../components/Logo';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Protected() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  Auth.currentAuthenticatedUser().then(console.log("logged in")).catch((e)=>{console.log(e);navigate("/")})
  return (
    <>
      <Outlet />
    </>
  );
}
