import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Dashboard from '../../pages/dashboard/dashboard'
import ImageContainer from '../imgContainer/imgContainer'
import MyCart from '../myCart/myCart'
import MyWishlist from '../myWishlist/myWishlist'
import PlaceOrder from '../placeOrder/placeOrder'

function Router1() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/imgContainer' element={<ImageContainer />}></Route>
                    <Route exact path='/' element={<Dashboard />}></Route>
                    <Route exact path='/myCart' element={<MyCart />}></Route>
                    <Route exact path='/placeOrder' element={<PlaceOrder />}></Route>
                    <Route exact path='/myWishlist' element={<MyWishlist />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Router1