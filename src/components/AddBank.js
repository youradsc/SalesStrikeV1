import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import { Stack } from '@mui/material';
import { Auth } from 'aws-amplify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


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

export default function AddBank() {
    let navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        var holderName = data.get("Bank Holder Name")
        var routing = data.get("Routing Number")
        var account = data.get("Account Number")
        console.log(holderName)
        console.log(routing)
        console.log(account)
        var body = {
            AccountNumber: parseInt(account),
            RoutingNumber: parseInt(routing),
            BankName: holderName
        }
        Auth.currentUserInfo().then((res) => {
            axios.post('https://api.salesstrikecorp.com/users/v1/adduserdata?email='+res.username,JSON.stringify(body)).then(res=>{console.log(res);  navigate("../", { replace: true });}).catch(e=>{console.log(e); alert(e)})
        })
    };

    return (
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
                    <Typography fullWidth component="h1" fontWeight={900} variant="h5" sx={{ marginTop: 2 }}>
                        Fill in your Bank Info
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
                                            Please fill out your Bank Info for us to send you payouts from your sold items!
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="Bank Holder Name"
                                            label="Bank Holder Name"
                                            name="Bank Holder Name"
                                            type="Bank Holder Name"
                                            defaultValue="Optional"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="Account Number"
                                            label="Account Number"
                                            id="Account Number"
                                            defaultValue="Optional"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="Routing Number"
                                            label="Routing Number"
                                            id="Routing Number"
                                            defaultValue="Optional"
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
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, width: { xs: "100%", md: "50%" } }}
                                    
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={
                            {
                                minHeight: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'flex-start',
                                mt: { sm: 2, md: 4 },
                                marginX: { sm: 0, md: 5 },
                                alignSelf: "stretch"
                            }
                        }>
                            <Box sx={
                                {
                                    borderRadius: 2,
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: 'flex-start',
                                    alignItems: "center",
                                    alignContent: "center",
                                    backgroundColor: "lightgray",
                                    paddingLeft: 0.5,
                                    marginY: 2
                                }
                            }>
                                <AccountCircleIcon />
                                <Typography fullWidth variant='h6' fontWeight={600}>Bank Info</Typography>


                            </Box>
                            <Box sx={
                                {
                                    borderRadius: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: 'flex-start',
                                    alignItems: "center",
                                    alignContent: "center",
                                    backgroundColor: "lightgreen",
                                    padding: 2,
                                    marginY: 2
                                }
                            }>
                                <PersonIcon sx={{ marginRight: "auto" }} />
                                <Typography fullWidth variant='p' sx={{ marginRight: "auto" }}>Your data is safe with SalesStrike! In no case will it be shared.</Typography>
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}