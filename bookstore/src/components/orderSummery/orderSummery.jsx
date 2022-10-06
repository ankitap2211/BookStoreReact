import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { addOrder, getCartItems } from '../services/dataService';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    cartBox: {
        width: '60vw', height: 'auto', display: 'flex',
        justifyContent: 'space-evenly', position: 'relative', top: '100px', left: '200px', flexDirection: 'column'
    },

    innerBox: {
        width: '100%', display: 'flex', flexDirection: 'column', height: 'auto',
        justifyContent: 'space-evenly', border: '1px solid lightgray'
    },

    box1: { width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', },

    cart: { width: '25%', fontSize: '20px', position: 'relative', top: '10px' },

    location: { width: '26%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', border: '1px solid lightgray' },

    priceBox: {
        display: 'flex', flexDirection: 'row', width: '30%', justifyContent: 'space-between',
        textAlign: 'start'
    },
    // image1:{display:'flex',justifyContent:'center',alignItem:'center'},

    details: { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '60%', },

    box2: { display: 'flex', width: '50%', justifyContent: 'space-between', height: '35%', flexDirection: 'column' },

    decrement: { borderRadius: '5px', border: 'none' },

    Button: {
        display: 'flex', width: '50%', justifyContent: 'space-evenly', margin: '5px',
        flexDirection: 'row',
    },

    checkoutButton: {
        width: '95%', display: 'flex', justifyContent: 'flex-end',
        position: 'relative', margin: '15px', padding: '5px'
    },

    text1: { width: '64%', textAlign: 'start' },

    text2: { width: '35%', fontSize: '13px', color: 'gray', textAlign: 'start' },

    price1: { fontSize: '15px' },
    price2: { fontSize: '10px', color: 'lightgray' },
    summeryBox: {
        display: 'flex', flexDirection: 'row', width: '50vw', height: '20vh',
        position: 'relative', top: '20px', justifyContent: 'space-evenly', margin: '10px'
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        cartBox: {
            width: '90vw', height: 'auto', 
             position: 'relative', top: '80px', left: '10px', flexDirection: 'column'
        },
    
        innerBox: {
            width: '100%', height: 'auto',
        },
        cart:{
            width:'50%'
        },
        box2:{
            width:'90%'
        },
        summeryBox:{
            width:'100%'
        },
        checkoutButton: {
            width: '90%', 
            position: 'relative', margin: '15px', padding: '5px'
        },
        text1: { width: '100%', textAlign: 'start', },
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        cartBox: {
            width: '90vw', height: 'auto', 
             position: 'relative', top: '80px', left: '10px', flexDirection: 'column'
        },
    
        innerBox: {
            width: '100%', height: 'auto',
        },
        cart:{
           width:'40%'
        },
        box2:{
            width:'90%'
        },
        summeryBox:{
            width:'100%'
        },
        checkoutButton: {
            width: '90%', display: 'flex', justifyContent: 'flex-end',
            position: 'relative', margin: '15px', padding: '5px'
        },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        cartBox: {
            width: '95vw', height: 'auto', 
             position: 'relative', top: '80px', left: '10px', flexDirection: 'column'
        },
    
        innerBox: {
            width: '100%', height: 'auto',
        },
        cart:{
            width:'25%'
        },
        box2:{
            width:'90%'
        },
        summeryBox:{
            width:'100%'
        }
    },

})

function OrderSummery(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const [getOrder, setGetOrder] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        getCartItems().then((response) => {
            console.log(response);
            setGetOrder(response.data.result)
            setInfo(response.data.result)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const orderGet = () => {
        let orderList = [];

        for (let i = 0; i < info.length; i++) {
            let objInfo = {
                product_id: info[i].product_id._id,
                product_name: info[i].product_id.bookName,
                product_quantity: info[i].product_id.quantity,
                product_price: info[i].product_id.discountPrice,
            }
            orderList.push(objInfo)
        }
        console.log(orderList, '....order....');
        let orderObject = { 
            orders: orderList
         }
        addOrder(orderObject).then((response) => {
            console.log(response, '.....response....');
            navigate('/placeOrder')
        }).catch((error) => {
            console.log(error);
        })

    }
    return (
        <React.Fragment>
            <Box className={classes.cartBox}>
                <Box className={classes.innerBox}>
                    <Box className={classes.box1}>
                        <Box className={classes.cart}>Order Summery</Box>
                    </Box>
                    <Box className={classes.box2}>
                        {
                            getOrder.map((items) => (

                                <Box className={classes.summeryBox}>
                                    <Box className={classes.image1}><img src={require("../Image111.png")} alt=""
                                        style={{ height: '90%', position: 'relative', top: '8px' }} /></Box>
                                    <Box className={classes.details}>
                                        <Box className={classes.text1}>{items.product_id.bookName}</Box>
                                        <Box className={classes.text2}>{items.product_id.author}</Box>
                                        <Box className={classes.priceBox}>
                                            <Box className={classes.price1}>Rs.{items.product_id.discountPrice}</Box>
                                            <Box className={classes.price2}><strike>Rs.{items.product_id.price}</strike></Box>
                                        </Box>
                                    </Box>
                                </Box>

                            ))
                        }
                    </Box>

                    <Box className={classes.checkoutButton}>
                        <Button variant="contained" sx={{ backgroundColor: '#3371B5' }}
                            onClick={orderGet}>Checkout</Button></Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default OrderSummery