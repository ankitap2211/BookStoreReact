import React from 'react'
import { makeStyles } from '@mui/styles'
import { useState } from 'react';
import Login from '../login/login';
import Signup from '../signup/signup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



const useStyles = makeStyles({
    mainBox: {
        display: 'flex', width: '100vw', height: '100vh', position: 'relative', top: '0px', left: '0px',
        backgroundColor: '#878787'
    },
    imgBox: {
        // border:'1px solid green',
        width: '45%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around', position: 'relative',
        alignItems: 'flex-start', backgroundColor: '#F5F5F5',
        borderRadius: '18px', top: '120px', left: '300px', zIndex: '1', opacity: '1'
    },
    image: { width: '35%', height: '45%', position: 'relative', top: '20px', left: '50px' },
    heading: {
        textTransform: 'uppercase', position: 'relative', left: '65px', top: '15px'
    },
    loginBox: {
        width: '25%', position: 'relative', zIndex: '2', right: '30px', height: '65%', top: '70px',
        backgroundColor: '#FFFFFF', boxShadow: '0px 5px 15px #00000029',
    },
    heading1: {
        position: 'relative', top: '10px',
        display: 'flex',
        fontSize: '25px',
        width: '100%', borderRadius: '8px 8px 0px 0px',
        justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFFFFF',
    },
    innerBox:{
        border:'1px solid white'
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        mainBox: {
            display: 'flex', width: '100%',left:'10px' 
        },
        imgBox: {
           display:'none'
        },
        image: { display:'none' },
        heading: {
            display:'none'
        },
        loginBox: {
            width: '90%', position: 'relative', left: '15px', height: '65%', top: '70px',
         
        },
        heading1: {
            position: 'relative', top: '10px',
            display: 'flex',
            width: '100%',
        },
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        imgBox: {
            // border:'1px solid green',
            width: '50%',
            height: '60%',
            top: '120px', left: '30px', zIndex: '1', opacity: '1'
        },
        image: { width: '60%', height: '60%', position: 'relative', top: '0px', left: '30px' },
        heading: {
            display:'none'
        },
        loginBox: {
            width: '50%', position: 'relative', zIndex: '2', right: '50px', height: '65%', top: '70px',
        },
        heading1: {
            position: 'relative', top: '10px',
            display: 'flex',
            fontSize: '25px',
            width: '100%', 
        },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        imgBox: {
            border:'1px solid green',
            width: '50%',
            height: '60%',
            top: '120px', left: '30px', zIndex: '1', opacity: '1'
        },
        image: { width: '50%', height: '45%', position: 'relative', top: '0px', left: '50px' },
        heading: {
            textTransform: 'uppercase', position: 'relative', left: '70px', top: '20px'
        },
        loginBox: {
            width: '40%', position: 'relative', zIndex: '2', right: '120px', height: '65%', top: '70px',
        },
        heading1: {
            position: 'relative', top: '10px',
            display: 'flex',
            fontSize: '25px',
            width: '100%', 
        },
    },

})

function ImageContainer() {
    const classes = useStyles();

    
    const [toggle, setToggle] = useState(true)
    const [myColor, setmyColor] = useState('#000000');


    const listenTosignup = () => {
        setToggle(false)

    }
    const listenToLogin = () => {
        setToggle(true)
       setmyColor('#F0F0F0')
    }


    return (
        <React.Fragment>
            <Box className={classes.mainBox} style={{ backgroundColor: { myColor } }}>

                {/* <Box className={classes.innerBox}> */}
                <Box className={classes.imgBox} >
                    <Box className={classes.image}>
                        <img src={require("../logo.png")} alt="img" style={{ width: '90%', height: 'auto', borderRadius: '50%' }} />
                        <img src={require("../book.png")} alt="" style={{ width: '30%', height: 'auto', position: 'absolute', right: '20px', top: '10px' }} />
                    </Box>
                    <Box className={classes.heading}><h4>online book shopping</h4></Box>
                </Box>

                <Box className={classes.loginBox}>
                    <Box className={classes.heading1} >
                        <Box>
                            <text sx={{ fontSize: '20px', color: 'black' }} onClick={listenToLogin}>Login</text>
                        </Box>
                        <Box>
                            <text sx={{ fontSize: '20px', color: 'black' }} onClick={listenTosignup}>Signup</text>
                        </Box>
                    </Box>

                    <Box>
                        {
                            toggle ? <Login listenToLogin={listenToLogin} /> : <Signup listenTosignup={listenTosignup} />
                        }
                    </Box>
                </Box>
                {/* </Box> */}
            </Box>
        </React.Fragment>
    )
}

export default ImageContainer