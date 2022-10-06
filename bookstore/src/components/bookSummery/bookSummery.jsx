import React, { useEffect, useReducer, useState } from 'react'
import { makeStyles } from '@mui/styles'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Header from '../header/header';
import { addCartItem, addQuantity, getCartItems, getWishlistItems } from '../services/dataService';
import { addWishlist } from '../services/dataService';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Footer from '../footer/footer';

const useStyles = makeStyles({
    mainBox: {
        width: '75vw', height: '90vh', display: 'flex', position: 'relative',
        left: '50px', top: '0px',backgroundColor:'white'
    },
    Box1: {
        width: '35vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
       flexDirection:'column'
    },
    imgBox: { width: '75%', },

    bag: {
        width: '90%',height:'10%',
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', left: '0px'
    },

    addBag: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '48%', border: 'none' },

    wishlist: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '48%'
        , backgroundColor: 'black', color: 'white'
    },

    Box2: {
        width: '45vw', position: 'relative', left: '0px', display: 'flex',
        justifyContent: 'space-between', flexDirection: 'column', height: '90vh',
        alignItems: 'flex-start'
    },
    text1: { textAlign: 'start', fontSize: '30px', position: 'relative', },

    text2: { textAlign: 'start', position: 'relative', fontSize: '15px', color: 'gray' },

    text3: { width: '10%', position: 'relative', top: '0px', backgroundColor: 'green', color: 'white', left: '5px' },

    text4: {
        display: 'flex', flexDirection: 'row',
        justifyContent: 'space-around', width: '20%', position: 'relative', top: '0px', fontSize: '20px'
    },
    subtext2: { fontSize: '15px', color: 'gray' },
    subtext3: { display: 'flex', fontSize: '20px', position: 'relative', top: '0px', },

    subtext4: {
        fontSize: '13px', display: 'flex', justifyContent: 'flex-start', height: '58%'
        , overflow: 'hidden', textAlign: 'justify'
    },

    subtext5: { fontSize: '20px', width: '33%', },

    detail1: {
        height: '25%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column',
        width: '100%'
    },
    detail2: {
        display: 'flex', justifyContent: 'space-around', flexDirection: 'column',
        height: '22%',
    },
    detail3: { height: '40%', display: 'flex', flexDirection: 'column', },
    subtext6: {
        width: '100%', display: 'flex',
        flexDirection: 'column', justifyContent: 'space-around', position: 'relative',
        top: '10px', backgroundColor: '#F5F5F5', height: '100%'
    },
    rating: { width: '30%' },
    star: { width: '33%', position: 'relative', top: '0px' },

    button1: { 
        display: 'flex', justifyContent: 'flex-end', position: 'relative', top: '0px', width: '50%', left: '250px' },

    twenty: { position: 'absolute', fontSize: '10px', top: '5px', left: '70px', color: 'gray' },

    blackbox: {
        width: '90%', border: '1px solid lightgray', height: '80%', 
         display: 'flex',justifyContent:'center',alignItems:'center'
    },
    home: {
        display: 'flex', flexDirection: 'row', position: 'absolute', top: '-55px',
        backgroundColor: 'white', height: '10vh', width: '90vw',
    },

    home1: { color: 'gray' },
    smallImg1: { position: 'absolute', left: '15px', top: '0px' },
    smallImg2: { position: 'absolute', left: '15px', top: '50px' },
    counterBox: {
        width: '14vw', height: '6vh', display: 'flex',
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', position: 'relative', left: '0px'
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
    wishlistButton: {
        border: '1px solid lightgray', width: '45%'
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        smallImg1:{
            display:'none'
        },
        smallImg2:{display:'none'},
        mainBox: {
            width: '90vw', display: 'flex', position: 'relative',flexDirection:'row',
           flexWrap:'wrap',left:'0px',height:'auto',
        },
        Box1:{
            width: '80vw',top:'0px',height:'60vh',
            position: 'relative', left: '0px',
        },
        Box2: {
            // display:'none'
            width: '80vw', position: 'relative', left: '0px', display: 'flex',top:'100px',
            flexDirection: 'column', height: '100vh',
        },
        bag: {
            position: 'absolute', top: '350px', width: '100%', 
            left: '0px',display:'flex',
        },
        addBag: { 
           width: '48%', 
         },
         blackbox: {
            width: '100%', border: '1px solid lightgray', height: '100%', position: 'absolute'
            , display: 'flex', top: '0px', left: '0px',alignItems:'center',justifyContent:'center'
        },
        wishlistButton: {
            border: '1px solid lightgray', width: '45%',height:'6vh'
        },
        counterBox: {
            width: '34vw', height: '6vh', display: 'flex',
            flexDirection: 'row',position: 'relative', left: '0px',
        },
      
        imgBox: { width: '60%', position: 'absolute',  },
        
        text1:{width:'100%',},
        
        text3: { width: '16%', position: 'relative', top: '0px', left: '0px' },
        text4: {
         width: '35%', position: 'relative', top: '0px', fontSize: '20px',
        },
        subtext5: { fontSize: '20px', width: '70%',textAlign:'start' },
        rating: { width: '45%',textAlign:'start'},
        button1: { position: 'relative', 
        top: '0px', width: '95%', left: '0px' },
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        smallImg1:{
            display:'none'
        },
        smallImg2:{display:'none'},
        mainBox: {
            width: '90vw', display: 'flex', position: 'relative',flexDirection:'row',
           flexWrap:'wrap',left:'30px',height:'auto'
        },
        Box1:{
            width: '80vw',top:'0px',height:'60vh',
            position: 'relative', left: '50px',
        },
        Box2: {
            // display:'none'
            width: '80vw', position: 'relative', left: '0px', display: 'flex',top:'100px',
            flexDirection: 'column', height: '100vh',
        },
        bag: {
            position: 'absolute', top: '350px', width: '80%', 
            left: '0px',display:'flex',
        },
        addBag: { 
           width: '48%', 
         },
         blackbox: {
            width: '80%', border: '1px solid lightgray', height: '100%', position: 'absolute'
            , display: 'flex', top: '0px', left: '0px',alignItems:'center',justifyContent:'center'
        },
        wishlistButton: {
            border: '1px solid lightgray', width: '45%',height:'6vh'
        },
        counterBox: {
            width: '34vw', height: '6vh', display: 'flex',
            flexDirection: 'row',position: 'relative', left: '0px',
        },
      
        imgBox: { width: '48%',   },
        
        text1:{width:'100%',},
        
        text3: { width: '10%', position: 'relative', top: '0px', left: '0px' },
        text4: {
         width: '25%', position: 'relative', top: '0px', fontSize: '20px',
        },
        subtext5: { fontSize: '20px', width: '70%',textAlign:'start' },
        rating: { width: '45%',textAlign:'start'},
        button1: { position: 'relative', 
        top: '0px', width: '95%', left: '0px' },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        
        mainBox: {
            width: '75vw', height: '90vh', display: 'flex', position: 'relative',
            left: '50px', top: '0px'
        },
        Box1:{
            width: '35vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
       flexDirection:'column',height:'60vh',
        },
        Box2: {
            width: '45vw', position: 'relative', left: '0px', display: 'flex',
        justifyContent: 'space-between', flexDirection: 'column', height: '90vh',
        alignItems: 'flex-start'
        },
        bag: {
            width: '90%',height:'10%',
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', left: '0px'
        },
        addBag: { 
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '48%', border: 'none'
         },
         blackbox: {
            width: '90%', border: '1px solid lightgray', height: '80%', 
            display: 'flex',justifyContent:'center',alignItems:'center'
        },
        wishlistButton: {
            border: '1px solid lightgray', width: '45%'
        },
        counterBox: {
            width: '14vw', height: '6vh', display: 'flex',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', 
            position: 'relative', left: '0px'
        },
      
        imgBox: { width: '65%',   },
        
        text1:{textAlign: 'start', fontSize: '30px', position: 'relative', },
        
        text3: { width: '17%', position: 'relative', top: '0px', left: '5px' },
        text4: {
            display: 'flex', flexDirection: 'row',
            justifyContent: 'space-around', width: '30%', position: 'relative', top: '0px', fontSize: '20px'
        },
        subtext5: { fontSize: '20px', width: '100%',display:'flex'  },
        rating: { width: '30%' },
        button1: { 
            display: 'flex', justifyContent: 'flex-end', 
            position: 'relative', top: '0px', width: '50%', left: '160px' },

        text2: { textAlign: 'start', position: 'relative', fontSize: '15px', color: 'gray',left:'8px' },
        smallImg1: { position: 'absolute', left: '15px', top: '0px' },
        smallImg2: { position: 'absolute', left: '15px', top: '50px' },
   
    },
})

function BookSummery(props) {
    const classes = useStyles();
    
    const [refreshPage, setRefreshPage] = useReducer(x => x + 1, 0)

    const [qty, setQty] = useState(1)

    const [hideButton, setHideButton] = useState(true)
    const [hideWishButton, setWishButton] = useState(false)

    const [cartItems, setCartItems] = useState([])

    const [bookState, setBookState] = useState([])

    const [wishlistItem, setWishlistItem] = useState([])
    const [wishlistState, setWishlistState] = useState([])

    const addItem = () => {
        console.log(props.id);
        setHideButton(false)
        addCartItem(props.id).then((response => {
            console.log(response, "Added your book successfully");
            setRefreshPage()
        })).catch((error) => {
            console.log(error);
        })

    }
    const addWish = () => {
        setWishButton(true)
        console.log(props.id);
        addWishlist(props.id).then((response => {
            console.log(response, "Book saved in your Wishlist");
            setRefreshPage()
        })).catch((error) => { console.log(error); })
    }

    const increment = () => {
        setQty(prevqty => prevqty + 1)
        let object = {
            quantityToBuy: qty + 1,
        }
        console.log("......obj", object);
        console.log(props.id);
        addQuantity(props.id, object).then((response => {
            console.log(response, "Incremented");
        })).catch((error) => {
            console.log(error);
        })
    }
    const decrement = () => {
        if (qty > 0) {
            setQty(prevqty => prevqty - 1)
            let object = {
                quantityToBuy: qty - 1,
            }
            console.log("......obj", object);
            addQuantity(props.id, object).then((response => {
                console.log(response, "Decremented");
            })).catch((error) => {
                console.log(error);
            })
        }
        else {
            setQty(1)
        }

    }
    const removeWishList = () => {
        setWishButton(false)
    }

    useEffect(() => {
        getCartItems().then((response => {
            console.log(response, "Book added in your bag");
            let listArray = response.data.result.filter((cart) => {
                if (props.id === cart.product_id._id) {
                    setQty(cart.quantityToBuy)
                    setCartItems(cart._id)
                    console.log(cart._id, cart.quantityToBuy, "Additing to cart......Quantity");
                    return cart
                }
            })
            setBookState(listArray)
        })).catch((error) => { console.log(error); })

        getWishlistItems().then((response => {
            console.log(response, "Book saved in your Wishlist");
            let listArray = response.data.result.filter((cart) => {
                if (props.id === cart.product_id._id) {
                    setWishlistItem(cart._id)
                    return cart
                }
            })
            setWishlistState(listArray)
        })).catch((error) => { console.log(error); })
    }, [refreshPage])


    return (
        <React.Fragment>
            {/* <Header /> */}
            <Box className={classes.home}>
                <Box className={classes.home1}>Home/</Box>
                <Box>Book (01)</Box>
            </Box>
            <Box>
                <Box className={classes.smallImg1}><img src={require("../Image1.png")} /></Box>
                <Box className={classes.smallImg2}><img src={require("../Image46.png")} /></Box>
            </Box>
            <Box>

            </Box>
            <Box className={classes.mainBox}>
                <Box className={classes.Box1}>
                    <Box className={classes.blackbox}>
                        <Box className={classes.imgBox}>
                            <img src={require("../think.jpg")} alt="" style={{ width: '100%' }} />
                        </Box>
                    </Box>

                    <Box className={classes.bag}>
                        {
                            (cartItems.length === 0)
                                ? <button className={classes.addBag}
                                    style={{ backgroundColor: "#A03037", color: 'white' }}
                                    onClick={addItem}>ADD TO BAG</button>
                                :
                                <Box className={classes.counterBox}>
                                    <span className={classes.decrementBox} onClick={decrement}>-</span>
                                    <Box className={classes.textBox5}><Typography>{qty}</Typography></Box>
                                    <Box className={classes.incrementBox}
                                        onClick={increment}>+</Box>
                                </Box>
                        }

                        {
                            (wishlistItem.length === 0) ?
                                <button className={classes.wishlist} onClick={addWish}>
                                    <FavoriteBorderIcon />WISHLIST</button>
                                :
                                <Box className={classes.wishlistButton}><Button
                                    onClick={removeWishList}><FavoriteBorderIcon style={{ color: "red" }} /></Button></Box>
                        }

                    </Box>

                </Box>

                <Box className={classes.Box2}>
                    <Box className={classes.detail1}>
                        <Box className={classes.text1}>{props.bookName}</Box>
                        <Box className={classes.text2}>{props.author}</Box>
                        <Box className={classes.text3}>
                            <Box>4.5<StarIcon sx={{ fontSize: '15px', position: 'relative', left: '5px', top: '2px' }} /></Box>
                            <Box className={classes.twenty}>({props.quantity})</Box>
                        </Box>
                        <Box className={classes.text4}>
                            <Box className={classes.subtext1}>Rs.{props.discountPrice}</Box>
                            <Box className={classes.subtext2}><strike><sub>Rs.{props.price}</sub></strike></Box>
                        </Box>
                    </Box>

                    <Divider sx={{ width: '100%' }} />

                    <Box className={classes.detail2}>
                        <Box className={classes.subtext3}>Book Detail</Box>
                        <Box className={classes.subtext4}>
                            {props.description}</Box>
                    </Box>

                    <Divider />

                    <Box className={classes.detail3}>
                        <Box className={classes.subtext5}>Customer Feedback</Box>

                        <Box className={classes.subtext6}>
                            <Box className={classes.rating}>Overall Rating</Box>
                            <Box className={classes.star}><Rating name="simple-controlled" /></Box>
                            <Box>  <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Write your review"
                                style={{ width: '90%', position: 'relative', height: '80%' }}
                            /></Box>
                            <Box className={classes.button1}><Button variant="contained">Submit</Button></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* <Footer/> */}
        </React.Fragment>
    )
}

export default BookSummery