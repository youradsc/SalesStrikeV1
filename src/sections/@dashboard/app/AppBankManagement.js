// --- Imports --- //
import React from "react";
import ReactDOM from "react-dom";

// --- Material Ui Imports --- //

import { Typography, Button } from "@mui/material";


// --- Fill Image Card Component Imports --- //
import { CardActionArea, Card, CardActions, CardContent, CardMedia } from "@mui/material";

// --- Style --- //

export default function AppBankManagement() {
  const data = {
    bankNumber: 1234567,
    routingNumber: 9028408,
    account: "Wells Fargo",
    total: 453.09
  }

  return (
        <Card>
          <CardActionArea>
            <CardMedia
             component="img"
              height="0"
              alt="Contemplative Reptile"
              image="/static/mock-images/products/product_1.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Bank Management
              </Typography>
              <Typography
                variant="h5"
                component="p"
              >
                Balance : {data.total}
              </Typography>
              <Typography
                variant="body1"
                component="p"
              >
                Account : {data.account}
              </Typography>
              <Typography
                variant="body1"
                component="p"
              >
                Routing Number : {data.routingNumber}
              </Typography>
              <Typography
                variant="body1"
                component="p"
              >
                Account Number : {data.bankNumber}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {data.bankNumber || data.bankNumber === 0 ?
            <Button size="small" color="primary">
            Withdraw
          </Button> :
            <Button size="small" color="primary" disabled>
              Withdraw
            </Button>}
            <Button size="small" color="primary">
              Add/Updated Bank Info
            </Button>
          </CardActions>
        </Card>
  );
}

