import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useEffect, useState, useReducer } from 'react';
import Header from '../header/header';
import { getWishlistItems, removeFromWishlist } from '../services/dataService';

const useStyles = makeStyles({
    home: { width: '100%', border: '1px solid black', display: 'flex', flexDirection: 'row', height: '10%' },
    mywishlist: {},
    mainBox: {
        border: '1px solid #E4E4E4', width: '80vw', height: 'auto', display: 'flex', flexDirection: 'column',
        position: 'relative', top: '70px', left: '150px',
    },
    outerBox: {
        width: '100%', display: 'flex', flexDirection: 'column', height: '80%'
    },
    innerBox: {
        width: '100%', display: 'flex', flexDirection: 'row', height: '160px', margin: '10px',
    },
    wishlist: {
        width: '100%', height: '45px', fontSize: '18px',
        display: 'flex', justifyContent: 'flex-start', backgroundColor: '#F5F5F5'
    },
    information: {
        border: '1px solid #E4E4E4', display: 'flex', height: 'auto', display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    },
    image1: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '15%',
        
    },
    details: {
        display: 'flex', flexDirection: 'column', width: '70%',
        justifyContent: 'space-evenly',
        // position:'relative',left:'50px',top:'50px'
    },
    removeBox: {
        display: 'flex', width: '10%', justifyContent: 'flex-end', height: '20%',
        position: 'relative'
    },
    wishlistStyle: {
        position: 'relative', left: '25px', top: '10px', display: 'flex', fontWeight: '700', fontSize: '19px'
    },
    text1: {
        textAlign: 'start', fontWeight: '500', fontSize: '17px'
    },
    text2: {
        textAlign: 'start', color: '#9D9D9D', fontSize: '12px'
    },
    priceBox: {
        display: 'flex', width: '23%', justifyContent: 'space-between'
    },
    price2: {
        fontSize: '13px', color: '#9D9D9D'
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        mainBox: {
           width: '90vw', height: 'auto', 
            position: 'relative', top: '10px', left: '10px !important',
        },
        outerBox: {
            width: '100%', height: '80%',
             position: 'relative', left: '0px',
        },
        details:{
            position:'relative',left:'40px',top:'10px',width:'65%'
        },
        image1:{
           position:'relative',left:'14px'
        },
        removeBox: {
            width: '10%',top:'25px',
            position: 'relative',
        },
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        mainBox: {
             width: '90vw', height: 'auto', 
            position: 'relative', top: '10px', left: '10px !important',
        },
        outerBox: {
            width: '100%', height: '80%',
             position: 'relative', left: '0px',
        },
        details:{
            position:'relative',left:'30px',top:'10px',width:'65%'
        },
        image1:{
           position:'relative',left:'10px'
        },
        removeBox: {
            width: '10%',top:'25px',
            position: 'relative',
        },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        mainBox: {
             width: '90vw', height: 'auto', 
            position: 'relative', top: '10px', left: '10px !important',
        },
        outerBox: {
            width: '100%', height: '80%',
             position: 'relative', left: '0px',
        },
        details:{
            position:'relative',left:'30px',top:'10px',width:'65%'
        },
        image1:{
           position:'relative',left:'10px'
        },
        removeBox: {
            width: '10%',top:'25px',
            position: 'relative',
        },
    },
})

function MyWishlist() {
    const classes = useStyles();
    const [wishlistList, setWishlistList] = useState([])
    const [refreshPage, setRefreshPage] = useReducer(x => x + 1, 0)

    useEffect(() => {
        getWishlistItems().then((response) => {
            console.log(response);
            setWishlistList(response.data.result)
        }).catch((error) => {
            console.log(error);
        })
    }, [refreshPage])

    const removeWishlist = (bookId) => {
        console.log(bookId, '....id printed....');
        let object = {
            'product_id': bookId
        }
        removeFromWishlist(object).then((response => {
            console.log(response.data.result, "Removed from Wishlist");
            setRefreshPage()
        })).catch((error) => { console.log(error); })
    }
    return (
        <>
            <Header />

            <Box className={classes.mainBox}>

                <Box className={classes.wishlist}>
                    <Box className={classes.wishlistStyle}>My Wishlist</Box>
                </Box>
                <Box className={classes.outerBox}>
                    {
                        wishlistList.map((items) => (
                            <Box className={classes.information}>
                                <Box className={classes.innerBox}>
                                    <Box className={classes.image1}>
                                        <img src={require("../Image111.png")} alt="" style={{ height: '70%' }} />
                                    </Box>
                                    <Box className={classes.details}>
                                        <Box className={classes.text1}>{items.product_id.bookName}</Box>
                                        <Box className={classes.text2}>{items.product_id.author}</Box>
                                        <Box className={classes.priceBox}>
                                            <Box className={classes.price1}>Rs.{items.product_id.discountPrice}</Box>
                                            <Box className={classes.price2}><strike>Rs.{items.product_id.price}</strike></Box>
                                        </Box>
                                    </Box>
                                    <Box className={classes.removeBox}><DeleteIcon onClick={() => removeWishlist(items.product_id._id)} /></Box>
                                </Box>
                                {/* <Divider sx={{ width: '100%' }} />  */}
                            </Box>

                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default MyWishlist