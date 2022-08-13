import axios from 'axios';
import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';

export default function DataSouce() {
    const [allData, setAllData] = useState([])
    axios.get("https://api.salesstrikecorp.com/inventory/v1/getuserdashboard?email="+"saihanumanv@gmail.com")
        .then(res=>{console.log(res); setAllData(res)}).catch((err)=>{console.log(err)})
    
}