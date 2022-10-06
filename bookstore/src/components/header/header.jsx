import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { makeStyles } from '@mui/styles'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
    HeaderMainContainer: {
        width: "100vw",
        height: "60px",
        backgroundColor: "#A03037",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    Blank1: {
        width: "10%",
        height: "100%"
    },

    LogoContainer: {
        width: "10%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        cursor: "pointer"
    },

    LogoText: {
        fontSize: "20px",
        color: "white"
    },

    SearchBoxContainer: {
        width: "40%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    SearchIconContainer: {
        width: "50px",
        height: "60%",
        backgroundColor: "white",
        borderRadius: "5px 0px 0px 5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    SearchBox: {
        width: "80%",
        height: "60%",
        borderRadius: "0px 5px 5px 0px",
        backgroundColor: "white"
    },

    Blank2: {
        width: "12%",
        height: "100%"
    },

    ProfileIconContainer: {
        width: "5%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        // border:'1px solid red'
    },

    ProfileIcon: {
        width: "60%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    ProfileHeading: {
        width: "100%",
        height: "40%",
        display: "flex",
        justifyContent: "center",
        color: "white"
    },

    WishlistIconContainer: {
        width: "8%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        // border:'1px solid blue'
    },

    CartIconContainer: {
        width: "5%",
        height: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        // border:'1px solid white'
    },

    CartIcon: {
        width: "60%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    CartHeading: {
        width: "100%",
        height: "40%",
        display: "flex",
        justifyContent: "center",
        color: "white"
    },
    MoreIconContainer:{
        display:'none'
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        LogoContainer: {
            width: "20%",
            height: "100%",
        },
        LogoText:{
           display:'none'
        },
        Blank2: {
            width: "18%",
            height: "100%",
        },
        ProfileIconContainer: {
            // width: "10%",
            // height: "30%",
            display:'none'
        },
        WishlistIconContainer: {
            // width: "10%",
            // height: "30%",
            display:'none'
        },
        CartIconContainer: {
            // width: "10%",
            // height: "30%", 
            display:'none'
        },
        MoreIconContainer:{
            width: "0%",
            height: "60%",
            display: "flex",
            alignItems: "center",color:'white',
            justifyContent: "center"
        },
        SearchBoxContainer: {
            // display: 'none'
        },
        SearchBox: {
            // display: 'none'
        },
        ProfileHeading: {
            display: 'none'
        },
        CartHeading: {
            display: 'none'
        }

    },
    '@media only screen and (min-width: 481px) and (max-width: 600px)': {
        SearchBoxContainer: {
           width:'55%'
        },
        LogoText:{
            // position:'relative',left:'10px'
            display:'none'
         },
        SearchBox: {
            // display:'none !important'
        },
        SearchIconContainer:{
        //   backgroundColor:'#A03037',color:'white !important'
        },
        ProfileHeading: {
            display: 'none'
        },
        CartHeading: {
            display: 'none'
        },
        ProfileIconContainer: {
            // width: "10%",
            // height: "30%",
            display:'none' 
        },
        WishlistIconContainer: {
            // width: "10%",
            // height: "30%", 
            display:'none'
        },
        CartIconContainer: {
            // width: "10%",
            // height: "30%", 
            display:'none'
        },
        MoreIconContainer:{
            width: "10%",
            height: "60%",
            display: "flex",
            alignItems: "center",color:'white',
            justifyContent: "center"
        },
    },

    '@media only screen and (min-width: 601px) and (max-width: 768px)': {
        LogoContainer: {
            width: "10%",
            height: "100%",
        },
        SearchBoxContainer: {
            width:'40%',position:'relative',left:'50px'
         },
         ProfileHeading: {
            //  display: 'none'
         },
         CartHeading: {
            //  display: 'none'
         },
         ProfileIconContainer: {
            //  width: "10%",
            //  height: "30%", 
            display:'none'
         },
         WishlistIconContainer: {
            //  width: "10%",
            //  height: "30%", 
            display:'none'
         },
         CartIconContainer: {
            //  width: "10%",
            //  height: "30%",
            display:'none' 
         },

        MoreIconContainer:{
            width: "10%",
            height: "60%",
            display: "flex",
            alignItems: "center",color:'white',
            justifyContent: "center"
        },
    },
    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        LogoContainer: {
            width: "5%",
            height: "100%",
        },
        LogoText:{
            position:'relative',left:'10px'
         },
        SearchBoxContainer: {
            width:'35%',position:'relative',left:'50px'
         },
         ProfileHeading: {
            //  display: 'none'
            fontSize:'14px'
         },
         CartHeading: {
            //  display: 'none'
            fontSize:'14px'
         },
         ProfileIconContainer: {
             width: "7%",
             height: "30%", 
         },
         WishlistIconContainer: {
             width: "7%",
             height: "30%", 
         },
         CartIconContainer: {
             width: "7%",
             height: "30%",
         },
    },
})


function Header({ searchValue, searchHandler }) {
    const navigate = useNavigate()

    const classes = useStyle()
    const openCart = () => {
        navigate('/myCart')
    }
    const openDashboard = () => {
        navigate('/')
    }
    const openWishlist = () => {
        navigate('/myWishlist')
    }

    //    const getSearchData=(e)=>{
    //     searchHandler()
    //     console.log(e);

    //    }
    return (
        <Box elevation={0} className={classes.HeaderMainContainer} >
            <Box className={classes.Blank1}></Box>
            <Box className={classes.LogoContainer} >
                <img src={require("../education.png")} id='Img' alt="Image" style={{ width: "30px", height: "25px" }} />
                <span className={classes.LogoText}>Bookstore</span>
            </Box>
            <Box className={classes.SearchBoxContainer}>
                <Box className={classes.SearchIconContainer}>
                    <SearchIcon sx={{ color: "#9D9D9D" }} />
                </Box>
                <InputBase className={classes.SearchBox} 
                placeholder="Search..."
                type="text"
                value={searchValue}
                onChange={searchHandler}
                ></InputBase>
            </Box>
            <Box className={classes.Blank2}></Box>
            <Box className={classes.ProfileIconContainer}>
                <Box className={classes.ProfileIcon}>
                    <PersonOutlineOutlinedIcon fontSize='medium' sx={{ color: "white" }} />
                </Box>
                <span className={classes.ProfileHeading}>Profile</span>
            </Box>

            <Box className={classes.WishlistIconContainer} onClick={openWishlist}>
                <Box className={classes.CartIcon}>
                    <FavoriteBorderOutlinedIcon fontSize='medium' sx={{ color: "white" }} />
                </Box>
                <span className={classes.CartHeading}>Wishlist</span>
            </Box>

            <Box className={classes.CartIconContainer} onClick={openCart}>
                <Box className={classes.CartIcon}>
                    <ShoppingCartOutlinedIcon fontSize='medium' sx={{ color: "white" }} />
                </Box>
                <span className={classes.CartHeading}>Cart</span>
            </Box>

            <Box className={classes.MoreIconContainer}>
                <MoreIcon/>
            </Box>

        </Box >

    );
}
export default Header