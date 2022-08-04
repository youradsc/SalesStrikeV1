import * as React from 'react';
import { useState } from 'react';
import Store from './Store/Store'
import Cart from './Store/Cart'




export default function MainStore() {
    console.log("This happens again")
    let [cart, setCart] = useState([])
    let [position, setPosition] = useState("Store")
    

    switch (position) {
        case 'Store':
            return <Store theCart={cart} setTheCart={setCart} theP={position} setP={setPosition} />
        case 'Cart':
            return <Cart theCart={cart} setTheCart={setCart} theP={position} setP={setPosition} />
        default:
            return <Store theCart={cart} setTheCart={setCart} theP={position} setP={setPosition}/>
    }
}
