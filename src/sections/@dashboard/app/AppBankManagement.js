// --- Imports --- //
import React from "react";
import ReactDOM from "react-dom";

// --- Material Ui Imports --- //

import { Typography, Button } from "@mui/material";


// --- Fill Image Card Component Imports --- //
import { CardActionArea, Card, CardActions, CardContent, CardMedia } from "@mui/material";

// --- Style --- //

export default function AppBankManagement() {

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
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography
                variant="body2"
                component="p"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
  );
}

