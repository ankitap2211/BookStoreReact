import React, { useState, useEffect, useReducer } from 'react'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Header from '../header/header';
import CustomerDetails from '../customerDetails/customerDetails';
import { removeItemsFromCart } from '../services/dataService';
import OrderSummery from '../orderSummery/orderSummery';
import { getCartItems } from '../services/dataService';
import { addQuantity } from '../services/dataService';


const useStyles = makeStyles({

    cartBox: {
        width: '60vw', height: 'auto', display: 'flex', border: '1px solid lightgray',
        justifyContent: 'space-evenly', position: 'relative', top: '50px', left: '200px', flexDirection: 'column'
    },

    innerBox: {
        width: '100%', display: 'flex', flexDirection: 'column', height: 'auto',
        justifyContent: 'space-evenly',
    },

    box1: {
        width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
        position: 'relative', top: '10px'
    },

    cart: { width: '20%', fontSize: '20px', },

    location: {
        width: '26%', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        border: '1px solid lightgray'
    },

    priceBox: {
        display: 'flex', flexDirection: 'row', width: '25%', justifyContent: 'space-between',
        position: 'relative', left: '40px'
    },
    image1: { display: 'flex', justifyContent: 'flex-start', position: 'relative', left: '20px', top: '10px' },

    details: { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '50%', },

    box2: {
        display: 'flex', width: '100%', justifyContent: 'space-evenly',
        height: 'auto',
        flexDirection: 'column',
    },

    decrement: { borderRadius: '5px', border: 'none' },

    Button: {
        display: 'flex', width: '40%', justifyContent: 'space-evenly', margin: '5px',
        flexDirection: 'row', alignItems: 'center',
    },

    placeorder: {
        width: '95%', display: 'flex', justifyContent: 'flex-end',
        position: 'relative', margin: '15px', padding: '5px'
    },

    text1: { width: '50%', textAlign: 'start', position: 'relative', left: '40px' },

    text2: { width: '30%', fontSize: '13px', color: 'gray', textAlign: 'start', position: 'relative', left: '40px' },

    price1: { fontSize: '15px' },
    price2: { fontSize: '10px', color: 'lightgray' },

    addressDetails: {
        display: 'flex', flexDirection: 'column', width: '100%', border: '1px solid lightgray', height: '10%',
        position: 'relative', top: '220px'
    },
    textAddesss: { fontSize: '20px', display: 'flex', width: '40%', position: 'relative', top: '10px', left: '20px' },
    summeryDetails: { display: 'flex', flexDirection: 'column', width: '100%', border: '1px solid lightgray', height: '10%' },
    textSummery: { fontSize: '20px', display: 'flex', position: 'relative', top: '10px', left: '20px' },
    increment: { width: '30%', display: 'flex', justifyContent: 'space-evenly' },
    remove: { position: 'relative', left: '10px' },
    decrement: { border: '1px solid #DBDBDB', backgroundColor: '#FAFAFA', borderRadius: '28px' },
    incre: { border: '1px solid #DBDBDB', backgroundColor: '#FAFAFA', borderRadius: '30px' },
    mycart: { position: 'relative', display: 'flex', width: '50%', top: '30px', left: '200px' },
    home: { color: 'lightgray' },
    counterBox: {
        width: '10vw', height: '6vh', display: 'flex',
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
        position: 'relative', top: '0px', left: '50px'
    },
    decrementBox: {
        border: '1px solid #DBDBDB', width: '25px', borderRadius: '100%', height: '25px',
    },
    incrementBox: {
        border: '1px solid #DBDBDB', width: '25px', borderRadius: '100%', height: '25px'
    },
    textBox5: {
        border: '1px solid #DBDBDB', width: '32%'
    },
    addressDetails: {
        display: 'flex', width: '60vw', border: '1px solid lightgray', height: '8vh', position: 'relative',
        top: '80px', left: '200px'
    },
    textAddesss: { 
        fontSize: '20px', display: 'flex', width: '40%', position: 'relative', top: '10px', left: '20px'
     },
    orderDetails: {
        display: 'flex', width: '60vw', border: '1px solid lightgray', height: '8vh', position: 'relative',
        top: '110px', left: '200px'
    },
    textOrder: { 
        fontSize: '20px', display: 'flex', width: '40%', position: 'relative', top: '10px', left: '20px'
    },
    contentBox: {
        display: 'flex',
        position: 'relative', top: '5px', margin: '10px', flexDirection: 'column'
    },
    information: { display: 'flex', flexDirection: 'row' },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        cartBox: {
            width: '90vw', height: 'auto', display: 'flex',
            justifyContent: 'space-evenly', position: 'relative', top: '40px', left: '10px', flexDirection: 'column'
        },
        box1: {
            width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
            position: 'relative', top: '10px',
        },
        mycart: {
            position: 'relative', display: 'flex', width: '50%', top: '20px', left: '10px'
        },
        innerBox: {
            width: '100%', display: 'flex', height: 'auto',
        },
        location: {
            display: 'none'
        },
        text1: { width: '100%',fontSize:'15px' },
        cart: {
            width: '35%', fontSize: '20px',
        },
        Button: {
            width: '90%', margin: '5px',
            flexDirection: 'row',
        },
        counterBox: {
            width: '30vw', height: '6vh',
            position: 'relative', left: '30px',
        },
        addressDetails: {
            display: 'flex', width: '90vw', position: 'relative',
            top: '60px', left: '10px'
        },
        textAddesss: { 
            fontSize: '20px', width: '60%', 
            position: 'relative', top: '10px', left: '10px',
         },
         orderDetails:{
            display: 'flex', width: '90vw', border: '1px solid lightgray', height: '8vh', position: 'relative',
            top: '80px', left: '10px'
         },
         textOrder: {
             fontSize: '20px', display: 'flex', width: '60%', position: 'relative', top: '10px', left: '10px'
         },
         placeorder: {
            width: '90%', 
            position: 'relative', margin: '15px', padding: '5px'
        },
    
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        cartBox: {
            width: '90vw', height: 'auto', display: 'flex',
            justifyContent: 'space-evenly', position: 'relative', top: '40px', left: '10px', flexDirection: 'column'
        },
        box1: {
            width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
            position: 'relative', top: '10px',
        },
        location:{
            display:'none'
        },
        mycart: {
            position: 'relative', display: 'flex', width: '50%', top: '20px', left: '10px'
        },
        innerBox: {
            width: '100%', display: 'flex', height: 'auto',
        },
        text1: { width: '100%' },
        cart: {
            width: '30%', fontSize: '20px',
        },
        Button: {
            width: '50%', margin: '5px',
            flexDirection: 'row',
        },
        counterBox: {
            width: '20vw', height: '6vh',
            position: 'relative', left: '30px',
        },
        addressDetails: {
            display: 'flex', width: '90vw', position: 'relative',
            top: '60px', left: '10px'
        },
        textAddesss: { 
            fontSize: '20px', width: '60%', 
            position: 'relative', top: '10px', left: '10px',
         },
         orderDetails:{
            display: 'flex', width: '90vw', height: '8vh', position: 'relative',
            top: '80px', left: '10px'
         },
         textOrder: {
             fontSize: '20px', display: 'flex', width: '60%', position: 'relative', top: '10px', left: '10px'
         },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        cartBox: {
            width: '95vw', height: 'auto', display: 'flex',
            justifyContent: 'space-evenly', position: 'relative', top: '40px', left: '10px', flexDirection: 'column'
        },
        box1: {
            width: '95%', display: 'flex', 
            position: 'relative', top: '10px',
        },
        mycart: {
            position: 'relative', display: 'flex', width: '50%', top: '20px', left: '10px'
        },
        innerBox: {
            width: '100%', display: 'flex', height: 'auto',
        },
        cart: {
            width: '20%', fontSize: '20px',
        },
        location:{
            width:'30%'
        },
        Button: {
            width: '40%', margin: '5px',
            flexDirection: 'row',
        },
        counterBox: {
            width: '20vw', height: '6vh',
            position: 'relative', left: '30px',
        },
        addressDetails: {
            display: 'flex', width: '95vw', position: 'relative',
            top: '60px', left: '10px'
        },
        textAddesss: { 
            fontSize: '20px', width: '60%', 
            position: 'relative', top: '10px', left: '10px',
         },
         orderDetails:{
            display: 'flex', width: '95vw', height: '8vh', position: 'relative',
            top: '80px', left: '10px'
         },
         textOrder: {
             fontSize: '20px', display: 'flex', width: '60%', position: 'relative', top: '10px', left: '10px'
         },
    },

})
function MyCart(props) {
    const classes = useStyles();
    const [refreshPage, setRefreshPage] = useReducer(x => x + 1, 0)
    const [qty, setQty] = useState(1)
    const [custmerDetails, setCustomerDetails] = useState(false)
    const [orderToggle, setOrderToggle] = useState(false)
    const [hideButton, setHideButton] = useState(true)

    const [getItems, setGetItems] = useState([])
    const [quantity, setQuantity] = useState([])

    const increment = (id, qty) => {
        setQty(prevqty => prevqty + 1)
        console.log(id, "id");
        let object = {
            cartItem_id: id,
            quantityToBuy: qty + 1
        }
        console.log("......obj", object);
        addQuantity(object).then((response => {
            console.log(response, "Incremented");
            setRefreshPage()
        })).catch((error) => {
            console.log(error);
        })
        console.log(quantity, '.....quantity......');
    }
    const decrement = (id, qty) => {
        if (qty > 0) {
            setQty(prevqty => prevqty - 1)
            let object = {
                cartItem_id: id,
                quantityToBuy: qty - 1
            }
            console.log("......obj", object);
            addQuantity(object).then((response => {
                console.log(response, "Decremented");
                setRefreshPage()
            })).catch((error) => {
                console.log(error);
            })
        }
        else {
            setQty(1)
        }
        console.log(quantity, '.....quantity......');
    }

    const openCustomerDetails = () => {
        setCustomerDetails(true)
        setHideButton(false)
    }

    const oepnOrderSummery = () => {
        setOrderToggle(true)
    }

    useEffect(() => {
        getCartItems().then((response) => {
            console.log(response);
            setGetItems(response.data.result)
            setQuantity(response.data.result)
        }).catch((error) => {
            console.log(error);
        })
    }, [refreshPage])

    const removeItem = (bookId) => {
        let object = {
            'cartItem_id': bookId
        }
        console.log(object, ".....books");
        removeItemsFromCart(object).then((response => {
            console.log(response.data.result, "Book removed from cart");
            setRefreshPage()
        })).catch((error) => { console.log(error); })
    }

    return (
        <React.Fragment>
            <Header />
            <Box className={classes.mycart}>
                <Box className={classes.home}>Home / </Box>
                <Box className={classes.menu}>MyCart</Box>
            </Box>
            <Box className={classes.cartBox}>
                <Box className={classes.innerBox}>
                    <Box className={classes.box1}>
                        <Box className={classes.cart}>MyCart (1)</Box>
                        <Box className={classes.location}>
                            <Box><LocationOnIcon sx={{ color: '#A03037', fontSize: '18px' }} /></Box>
                            <Box>Use current location</Box>
                            <Box><ArrowDropDownOutlinedIcon sx={{ color: 'lightgray' }} /></Box>
                        </Box>
                    </Box>
                    <Box className={classes.box2}>

                        {
                            getItems.map((items) => (

                                <Box className={classes.contentBox}>
                                    <Box className={classes.information}>
                                        <Box className={classes.image1}>
                                            <img src={require("../Image111.png")} alt="" style={{ height: '90%' }} />
                                        </Box>
                                        <Box className={classes.details}>
                                            <Box className={classes.text1}>{items.product_id.bookName}</Box>
                                            <Box className={classes.text2}>{items.product_id.author}</Box>
                                            <Box className={classes.priceBox}>
                                                <Box className={classes.price1}>Rs.{items.product_id.discountPrice}</Box>
                                                <Box className={classes.price2}><strike>Rs.{items.product_id.price}</strike></Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box className={classes.Button}>
                                        <Box className={classes.counterBox}>
                                            <span className={classes.decrementBox}
                                                onClick={() => decrement(items._id, items.quantityToBuy)}>-</span>

                                            <Box className={classes.textBox5}><text>{items.quantityToBuy}</text></Box>

                                            <Box className={classes.incrementBox}
                                                onClick={() => increment(items._id, items.quantityToBuy)}>+</Box>
                                        </Box>

                                        <Box className={classes.remove}
                                            onClick={() => removeItem(items._id)}>Remove</Box>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>

                    {
                        hideButton ? <Box className={classes.placeorder}>
                            <Button variant="contained" sx={{ backgroundColor: '#3371B5' }}
                                onClick={openCustomerDetails}>Place Order</Button></Box>
                            : null

                    }
                </Box>
            </Box>
            {
                custmerDetails ? <CustomerDetails openCustomerDetails={openCustomerDetails}
                    oepnOrderSummery={oepnOrderSummery} /> :
                    <Box className={classes.addressDetails}>
                        <Box className={classes.textAddesss}>Address Deatils</Box>
                    </Box>

            }

            {
                orderToggle ? <OrderSummery /> :
                    <Box className={classes.orderDetails}>
                        <Box className={classes.textOrder}>Order Summery</Box>
                    </Box>
            }
        </React.Fragment>
    )
}

export default MyCart