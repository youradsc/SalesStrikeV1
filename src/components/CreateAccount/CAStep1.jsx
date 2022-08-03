import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';




export function CAStep1(props) {
    console.log(props)
    const tiers = [
        {
            title: 'Standard',
            maincontent: 'For Users who want to Invest in Products',
            description: [
                'Invest in Inventory',
                'Collect Payouts',
                'Product Stats Research'
            ],
            buttonText: 'Sign up for free',
            buttonVariant: 'outlined',
            data: {
                Type: "Standard",
                FirstName: "First Name",
                LastName: "Last Name",
                Email: "Email",
                P31: "Your Number",
                P32: "How Did You Find Us",
                Password: "Password",
                BankHolderName: "Bank Holder Name",
                RoutingNumber: "Routing Number",
                AccountNumber: "Account Number",
                menu: ["Account Type", "Your Data", "More Info", "Your Password", "Bank (Optional)", "Confirmation"]
            },
            menu: ["Account Type", "Your Data", "More Info", "Your Password", "Bank (Optional)", "Confirmation"]
        },
        {
            title: 'Business',
            maincontent: 'For Business who want to List their Products',
            description: [
                'Application for Product Investment',
                'View Prouct Investment Stats',
                'Collect Payouts from Investments'
            ],
            buttonText: 'Contact us',
            buttonVariant: 'outlined',
            data:  {
                Type: "Business",
                FirstName: "First Name",
                LastName: "Last Name",
                Email: "Email",
                P31: "Public Drive Link",
                P32: "Product Website URL",
                Password: "Password",
                BankHolderName: "Bank Holder Name",
                RoutingNumber: "Routing Number",
                AccountNumber: "Account Number",
                menu: ["Account Type", "Business Owner Data", "More Info", "Your Password", "Bank Optional", "Confirmation"]

            },
            menu: ["Account Type", "Business Owner Data", "More Info", "Your Password", "Bank Optional", "Confirmation"]
        }
    ];
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Choose Account Type
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Select your Account Type based on if you are a business or if you are an indviduals.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container disableGutters maxWidth="md" sx={{px: 2, py: 2, my: 2, display:{xs:"none", md:"block"}}}>
                <Stack direction="row" spacing={1} sx={{display:{xs:"none", sm:"none", md:"flex"}, alignSelf:"center", justifyContent:"space-evenly",  border: "1px solid gray"}}>
                    {(tiers[0].menu).map(item => (
                        (item === "Account Type") ?
                        <Button variant="outlined" >{item}</Button> :
                        <Button variant="outlined"  sx={{color:"gray"}}>{item}</Button>
                    ))}
                </Stack>

            </Container>
            <Container disableGutters maxWidth="md" sx={{px: 2, py: 2, my: 2, display:{xs:"block", md:"none"}, alignSelf:"center"}}>
                <Stack direction="column" spacing={1} sx={{display:{xs:"flex", md:"none"}, alignSelf:"center", justifyContent:"space-evenly",  border: "1px solid gray"}}>
                    {(tiers[0].menu).map(item => (
                        (item === "Account Type") ?
                        <Button variant="outlined" >{item}</Button> :
                        <Button variant="outlined"  sx={{color:"gray"}}>{item}</Button>
                    ))}
                </Stack>

            </Container>
            <Container maxWidth="md" component="main">

                <Grid container spacing={5} alignItems="flex-start">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={6}
                            md={6}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography variant="h5" color="text.primary" align="center">
                                            {tier.maincontent}
                                        </Typography>
                                    </Box>
                                    <ul>
                                        
                                        {tier.description.map((line) => (
                                            <Box sx={{display:'flex', flexDirection:"row", justifyContent:"center", py:1}}>
                                            <CheckCircleOutlineIcon sx={{color:"lightgreen"}}/>
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                            </Box>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={()=>{props.setData(tier.data); props.buttonf("Step2")}} fullWidth variant={tier.buttonVariant}>Continue</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}




