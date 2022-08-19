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

export default function Store(props) {
    const [cartPop, setCartPop] = useState(false)
    const [prods, setProds] = useState([])
    const handleClose = () => {
        setCartPop(false)
    };
    React.useEffect(() => {
        if(prods.length == 0) {
                axios.get('https://api.salesstrikecorp.com/products/v1/getproducts').then((res)=>{console.log(res);setProds(Object.values(res.data))})
            }
        },[prods]
    )
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var id = event.target.querySelector("input").getAttribute('id');
        console.log(id)
        var qty = data.get("Qty");
        var currCart = (props.theCart);
        console.log(prods)
        var img = ""
        var newStuff = (prods).filter((card) => (
            card.Id === id
        ));
        console.log(newStuff)
        var updateQuant = newStuff[0]
        updateQuant["Qty"] = qty
        var i = 0;
        var old = false;
        (props.theCart).forEach(element => {
            if (element.Id == id) {
                var temp = element
                temp["Qty"] = (parseInt(temp["Qty"])+parseInt(qty)).toString()
                var replace = props.theCart
                replace[i] = temp
                props.setTheCart(replace)
                old = true;
            }
        })
        if (!old) {
            props.setTheCart([...props.theCart, updateQuant])
        }
        setCartPop(true);
    }



    return (
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
                            Here you can look through all the products we have available. You can add everything to cart and click the cart button at the end to checkout.
                        </Typography>

                    </Container>

                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                        pt={2}
                        width="100%"
                        sx={{ maxWidth: { md: "md", lg: "lg" }, px: { sm: 3, lg: 3 } }}
                    //sx={{justifySelf:"center",maxWidth:"sm"}}
                    >

                        <Button variant="outlined" onClick={()=>props.setTheCart([])}>Clear Cart</Button>
                        <Button variant="contained" onClick={()=>props.setP("Cart")}>View Cart / Checkout</Button>
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
                                            {card.Name}
                                        </Typography>
                                        <Typography>
                                            <b>SKU:</b> {card.Id}
                                        </Typography>
                                        <Typography>
                                            <b>Description: </b> {card.Description}
                                        </Typography>
                                        <Typography>
                                            <b>Wholesale: </b> {"$"+card.Wholesale}
                                        </Typography>
                                        <Typography>
                                            <b>MSRP: </b> {"$"+card.MSRP}
                                        </Typography>
                                        <Typography>
                                            <b>ProfitShare: </b> {"$"+((card.MSRP-card.Wholesale)*(card.UserProfitFactor-0.05)).toFixed(2)+"-$"+((card.MSRP-card.Wholesale)*(card.UserProfitFactor+0.05)).toFixed(2)+" per unit sold"}
                                        </Typography>
                                        <Typography>
                                            <b>Idea Score: </b> {card.Rating}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing={true}>
                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "flex-start", md: "center" }, width: "100%" }}>
                                            <TextField sx={{ width: { xs: "100%", md: "50%" } }} id={card.Id} label="Qty" name="Qty" variant="outlined" />
                                            <Button
                                                size="small"
                                                type="submit"
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2, width: { xs: "100%", md: "30%" }, marginLeft: { xs: "auto" } }}
                                                onClick={() => (console.log("done"))}
                                            >
                                                Add to cart
                                            </Button>
                                        </Box>
                                    </CardActions>
                                    <CardActions disableSpacing={true}>
                                        <Button size="small">View</Button>
                                        <Button size="small" sx={{ marginLeft: "auto" }}>Edit</Button>
                                    </CardActions>
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
            <Dialog open={cartPop} onClose={handleClose} sx={{padding:2}} >
                <DialogTitle sx={{padding:2, textAlign:"center"}} >Added to Cart</DialogTitle>
                <Typography sx={{padding:2}}>Your item has been added to cart!</Typography>
                <Button variant="contained" sx={{margin:2}} onClick={() => props.setP("Cart")}>View Cart</Button>
            </Dialog>
        </ThemeProvider>
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