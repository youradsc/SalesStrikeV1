import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from "./NavBar"
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ErrorHandleLogin from './PopUps/ErrorHandleLogin';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [open, setOpen] = useState(false)


    Auth.currentAuthenticatedUser().then((user) => {
        navigate("/dashboard/app")
    });




    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var email = data.get('email')
        var password = data.get('password')
        Auth.signIn(email, password).then((res) => { console.log(res); navigate("/store") }).catch((e) => { console.log(e); setError(e.toString()); setOpen(true) })
    };

    return (
        <div>
            <ResponsiveAppBar />

            <ThemeProvider theme={theme}>
                <Container component="main" disableGutters maxWidth={false} maxHeight={false} sx={
                    {
                        backgroundColor: "white",
                    }
                }>
                    <CssBaseline />
                    <Box
                        sx={
                            {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                bgcolor: "white",
                            }
                        }>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography fullWidth component="h1" fontWeight={900} variant="h5">
                            Login with SalesStrike
                        </Typography>
                        <Box sx={
                            {
                                display: "flex",
                                flexDirection: { xs: "column", md: "row", },
                                alignItems: "center",
                                bgcolor: "white",
                                paddingX: 5,
                                paddingY: 0,
                                marginY: 0,
                                marginX: { xs: 3, md: 20 },
                            }
                        }>
                            <Box
                                sx={{
                                    marginTop: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, pt: { sm: "3px" } }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography width="100%" variant="p">
                                                Please fill out your Email and Password!
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="Rember Me"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={
                                {
                                    minHeight: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: 'space-between',
                                    mt: { sm: 2, md: 4 },
                                    marginX: { sm: 0, md: 5 },
                                    alignSelf: "stretch"
                                }
                            }>
                                <Typography fullWidth variant='h5' fontWeight={600}> Not Registered Yet. Sign Up Now!</Typography>
                                <Typography fullWidth variant='p'>Not registered with SalesStrike yet? Get to know our system with no payment information needed!</Typography>
                                <Typography fullWidth variant='p'>SalesStrike simply put allows users to invest and make money off of rapidly selling products on the most popular E-Commerce sites.</Typography>
                                <Button
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, width: "100%", alignSelf: "left", backgroundColor: "green" }}
                                    onClick={() => (navigate("/signup"))}
                                >
                                    Sign Up Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <ErrorHandleLogin open={open} changeState={setOpen} error={error}></ErrorHandleLogin>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </div>
    );
}