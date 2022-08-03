import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Stack } from '@mui/material';
import EmailVerify from './EmailVerify';
import { Auth } from 'aws-amplify';




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


export default function CAStep4(props) {
    const [open, setOpen] = React.useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        var temp = props.data
        console.log(temp)
        Auth.signUp({
            username: temp["Email"],
            password: temp["Password"],
            attributes: {
                email: temp["Email"],
                phone_number: '+1'+temp["P31"],
                name: temp["FirstName"] + " " + temp["LastName"]
            },
        }).then(res=>{
            console.log(res)
            alert("Thank you for signing up! Please check your email for a verification link. If you have not recieved it then resend it from the profile page!")
        }).catch(e=>{alert(e)})
    }




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
                        User Agreemnt
                    </Typography>
                    <Container disableGutters maxWidth="md" sx={{ px: 2, py: 2, my: 2, display: { xs: "none", md: "block" } }}>
                        <Stack direction="row" spacing={1} sx={{ display: { xs: "none", sm: "none", md: "flex" }, alignSelf: "center", justifyContent: "space-evenly", border: "1px solid gray" }}>
                            {(props.data.menu).map(item => (
                                (item === "Confirmation") ?
                                    <Button variant="outlined" >{item}</Button> :
                                    <Button variant="outlined" sx={{ color: "gray" }}>{item}</Button>
                            ))}
                        </Stack>

                    </Container>
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
                                            Please open the contracts below and check the box when you have read them.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" sx={{alignItems: "center"}}>
                                            <IconButton sx={{paddingX:0}} onClick={() => window.open("https://adscv2files.s3.amazonaws.com/miniOrange_User_Agreement.pdf")}>
                                                <FileOpenIcon></FileOpenIcon>
                                            </IconButton>
                                            <Typography variant="body1">User Agreement</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <Stack direction="row" sx={{alignItems: "center"}}>
                                            <IconButton sx={{paddingX:0}} onClick={() => window.open("https://adscv2files.s3.amazonaws.com/miniOrange_User_Agreement.pdf")}>
                                                <FileOpenIcon></FileOpenIcon>
                                            </IconButton>
                                            <Typography variant="body1">Protection Againt Loss</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="I Agree to the contracts above"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, width: { xs: "100%", md: "50%" } }}
                                    onclick={() => (props.buttonf("Step3"))}
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
                                <Typography fullWidth variant='h6' fontWeight={600}>{props.data.Type}</Typography>
                                <IconButton sx={{ p: 0, marginLeft: "auto" }}>
                                    <EditIcon />
                                </IconButton>

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
                                <Typography fullWidth variant='p' sx={{ marginRight: "auto" }}>Please Read the Contracts. These are legally binding.</Typography>
                            </Box>
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: "100%", alignSelf: "left", backgroundColor: "gray", marginTop: "auto" }}
                                onClick={() => { props.buttonf("Step5") }}
                            >
                                Back
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <EmailVerify open={open} changeState={setOpen}></EmailVerify>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}