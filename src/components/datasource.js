import axios from 'axios';
import { Auth } from 'aws-amplify';

export default function DataSouce() {
    
    Auth.currentUserInfo().then(res=>{
        axios.get("https://api.salesstrikecorp.com/inventory/v1/getuserdashboard?email="+res.username)
            .then(res=>{console.log(res)}).catch((err)=>{console.log(err)})})
}