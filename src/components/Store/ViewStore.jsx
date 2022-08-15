import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react'
import { DialogTitle } from '@mui/material';
import { Dialog } from '@mui/material';
import axios from 'axios'
import ResponsiveAppBar from '../NavBar';
import { useNavigate } from 'react-router-dom';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function ViewStore(props) {
    const navigate = useNavigate()
    const [prods, setProds] = useState([])

    React.useEffect(() => {
        if(prods.length == 0) {
                axios.get('https://api.salesstrikecorp.com/products/v1/getproducts').then((res)=>{console.log(res);setProds(Object.values(res.data))})
            }
        },[prods]
    )



    return (
        <div>
            <ResponsiveAppBar/>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 2,
                        pb: 0,
                        px: 2,
                        backgroundImage: "/img/storeheader.jpeg",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >

                    <Container maxWidth="sm" disableGutters>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                        >
                            Store
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Here you can look through all the products we have available. If you want to invest in a product sign up now!
                        </Typography>

                    </Container>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        pt={2}
                        width="100%"
                        sx={{ maxWidth: { md: "md", lg: "lg" }, px: { sm: 3, lg: 3 } }}
                    //sx={{justifySelf:"center",maxWidth:"sm"}}
                    >

                        <Button variant="outlined" onClick={()=>(navigate("/signup"))}>SignUp Now</Button>
                    </Stack>

                </Box>
                <Container sx={{ py: 2, maxWidth: { md: "md", lg: "lg" } }}>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {prods.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={card.Image}
                                        alt="random"
                                    //sx={{
                                    // 16:9
                                    //pt: '56.25%',
                                    //}}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            <b>SKU:</b> {card.Id}
                                        </Typography>
                                        <Typography>
                                            <b>Description: </b> {card.Description}
                                        </Typography>
                                        <Typography>
                                            <b>Wholesale: </b> {card.Wholesale}
                                        </Typography>
                                        <Typography>
                                            <b>MSRP: $</b> {card.MSRP}
                                        </Typography>
                                        <Typography>
                                            <b>Profit: </b> {card.Profit}
                                        </Typography>
                                        <Typography>
                                            <b>Idea Score: </b> {card.Rating}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
            
        </ThemeProvider>
        </div>
    );
    const cardData = [
        {
            sku: "1",
            title: "Push Up Board",
            description: "This is a great push up board to get jacked on!",
            wholesale: "12.99",
            msrp: "38.99",
            profit: "10 to 20%",
            ideascore: "4/5",
            image: "https://source.unsplash.com/random"
        },
    ]
}