// --- Imports --- //
import React from "react";
import ReactDOM from "react-dom";

// --- Material Ui Imports --- //

import { Typography, Button } from "@mui/material";


// --- Fill Image Card Component Imports --- //
import { CardActionArea, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Auth } from "aws-amplify";

// --- Style --- //

export default function AppBankManagement() {
  const navigate = useNavigate()
  const data = {
    bankNumber: 1234567,
    routingNumber: 9028408,
    account: "Wells Fargo",
    total: 453.09
  }
 const [bankData, setBankData] = useState([])
  useEffect(() => {
    Auth.currentUserInfo().then((res)=>{
      axios.get("https://api.salesstrikecorp.com/users/v1/getuserdata?email="+res.username)
        .then(res => { console.log(res); setBankData(res.data) }).catch((err) => { console.log(err) })})
  }, [])
  
if(bankData){
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
                Balance : Check Sales Data
              </Typography>
              <Typography
                variant="body1"
                component="p"
              >
                Account : {bankData.BankName}
              </Typography>
              <Typography
                variant="body1"
                component="p"
              >
                Routing Number : {bankData.AccountNumber}
              </Typography>
              <Typography
                variant="body1"
                component="p"
              >
                Account Number : {bankData.RoutingNumber}
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
            <Button size="small" color="primary" onClick={()=>(navigate("/addbank"))}>
              Add/Updated Bank Info
            </Button>
          </CardActions>
        </Card>
  );
            }
}

