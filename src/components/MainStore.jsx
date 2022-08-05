import * as React from 'react';
import { useState } from 'react';
import Store from './Store/Store'
import Cart from './Store/Cart'
import ResponsiveAppBar from "./NavBar"




export default function MainStore() {
    console.log("This happens again")
    let [cart, setCart] = useState([])
    let [position, setPosition] = useState("Store")
    

    switch (position) {
        case 'Store':
            return (<div><ResponsiveAppBar/><Store theCart={cart} setTheCart={setCart} theP={position} setP={setPosition} /></div>)
        case 'Cart':
            return (<div><ResponsiveAppBar/><Cart theCart={cart} setTheCart={setCart} theP={position} setP={setPosition} /></div>)
        default:
            return (<div><ResponsiveAppBar/><Store theCart={cart} setTheCart={setCart} theP={position} setP={setPosition} /></div>)
    }
}
