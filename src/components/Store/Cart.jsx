import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';





export default function Cart(props) {
    const theme = useTheme();
    const [totalCost, setTotalCost] = useState(0);
    console.log(props.theCart);
    var temp2 = 0;
    (props.theCart).forEach(element => {
        temp2 = temp2 + ((parseFloat(element.Qty, 10))*(parseFloat(element.wholesale, 10)));
    });
    console.log(temp2)
    if(totalCost!=temp2){setTotalCost(temp2)};
    function ProductRow(props) {
        return (
            <Card sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia sx={{ aspectRatio: "1/1", width: "20%", height: "100%", objectFit: "scale", objectPosition: "center" }}
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="Live from space album cover"
                />
                <CardContent sx={{ display: "flex", flexGrow: 1, alignSelf: "stretch" }}>
                    <Box sx={{ display: 'flex', flexGrow: 1, alignSelf: "stretch", flexDirection: "row", pl: 1, pb: 1 }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography>Push Up Board</Typography>
                            <Typography>SKU: {props.data.sku}, Qty: {props.data.Qty} </Typography>
                            <Typography> Unit Cost: {props.data.wholesale}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "auto" }}>
                            <Typography> Total: {(parseFloat(props.data.Qty, 10) * parseFloat(props.data.wholesale, 10))}</Typography>
                            <EditIcon aria-label="play/pause" sx={{ marginLeft: "auto" }}>
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </EditIcon>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        );
    }

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
                        Fill in your Bank Info (Optional)
                    </Typography>
                    <Typography fullWidth component="h5" fontWeight={500} variant="h5" sx={{ marginY: 2 }}>
                        On the left is a risk calculator to understand your profit and loss. On the right is your cart with all your items.
                    </Typography>
                    <Box sx={
                        {
                            display: "flex",
                            flexDirection: { xs: "column", sm: "column", lg: "row" },
                            justifyItems: "center",
                            alignItems: "center",
                            paddingX: 5,
                            paddingY: 0,
                            marginY: 0,
                            marginX: { xs: 3 },

                        }
                    }>
                        <Box sx={
                            {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'flex-start',
                                mt: { sm: 2, md: 0 },
                                marginX: { sm: 0, md: 5 },
                                alignSelf: "stretch",
                            }
                        }>
                            {(props.theCart).map((card) => (
                                <ProductRow data={card}></ProductRow>
                            ))}
                            <Card sx={{ display: "flex", flexDirection: "row" }}>
                                <CardContent sx={{ display: "flex", flexGrow: 1, alignSelf: "stretch" }}>
                                    <Box sx={{ display: 'flex', flexDirection: "row", pl: 1, pb: 1, flexGrow: 1, alignSelf: "stretch" }}>
                                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                                            <Typography>Product: </Typography>
                                            <Typography>Fees: </Typography>
                                            <Typography> Total: </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "auto" }}>
                                            <Typography>${totalCost}</Typography>
                                            <Typography>${(Math.round(100*(0.1 * totalCost)))/100}</Typography>
                                            <Typography>${((Math.round(100*(0.1 * totalCost)))/100) + totalCost}</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: "100%", aspectRatio: "1/1"
                            }}
                            alt="The house from the offer."
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                        />
                    </Box>
                    <Box display="flex" sx={{ flexDirection: { xs: "colum", md: "row" } }}>
                        <Button variant="contained" sx={{ mt: 3, mb: 2, mx: 2 }} onClick={() => props.setP("Store")}>
                            Back
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2, mx: 2 }}

                        >
                            Checkout
                        </Button>
                    </Box>

                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}


