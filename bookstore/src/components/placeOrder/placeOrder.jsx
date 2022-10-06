import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material';
import Header from '../header/header';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    outerBox: {
        width: '70vw', height: '100vh', position: 'relative', top: '0px', left: '200px',
    },
    innerBox: {
        width: '90%', height: '100%', display: 'flex', flexDirection: 'column'
        , justifyContent: 'space-around', alignItems: 'center', position: 'relative', left: '50px'
    },

    para: { width: '80%', display: 'flex', justifyContent: 'center', },

    paragraph: {
        display: 'flex', width: '55%',
        flexDirection: 'column', fontSize: '18px', color: '#333232'
    },
    tableBox: {
        display: 'flex', width: '100%', height: '20%', flexDirection: 'column', border: '1px solid #DCDCDC'
    },
    tableRow: {
        width: '100%', height: '40%',
        display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FAFAFA'
    },

    detailBox: {
        height: '90%', display: 'flex', flexDirection: 'row',
        position: 'relative',
    },

    addressBox: { display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px' },

    box1: { width: '33%', fontSize: '17px' }, box2: { width: '33%', fontSize: '17px' }, box3: { width: '33%', fontSize: '17px' },

    box4: { border: '1px solid #DCDCDC', width: '34%', fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', },

    buttonBox: {
        display: 'flex', justifyContent: 'center', width: '50%',
        alignItems: 'center'
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        outerBox: {
            width: '95vw', height: '70vh', position: 'relative', top: '0px', left: '0px',
        },
        innerBox: {
            width: '100%', height: '100%', position: 'relative', left: '0px',
        },
        imgBox:{},
        para: { width: '100%', display: 'flex', justifyContent: 'center',},

        paragraph: {
            display: 'flex', width: '100%',
            fontSize: '15px',
        },
        tableBox: {
            display: 'none',
        },
        buttonBox: {
            width: '80%',
        },
    
       },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        outerBox: {
            width: '100vw', height: '90vh', position: 'relative', top: '0px', left: '0px',
        },
        innerBox: {
            width: '100%', height: '100%', position: 'relative', left: '0px',
        },
        imgBox:{},
        para: { width: '100%', display: 'flex', justifyContent: 'center', },

        paragraph: {
            display: 'flex', width: '100%',
            fontSize: '15px', 
        },
        box4: {
             width: '34%', fontSize: '11px', },

        buttonBox: {
            width: '80%',
        },
        tableBox: {
            width: '90%', height: '20%'
        },
        box1: { width: '33%', fontSize: '15px' },
        box2: { width: '33%', fontSize: '15px' },
        box3: { width: '33%', fontSize: '15px' },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        outerBox: {
            width: '100vw', height: '90vh', position: 'relative', top: '0px', left: '0px',
        },
        innerBox: {
            width: '100%', height: '100%', position: 'relative', left: '0px',
        },
        imgBox:{},
        para: { width: '100%', display: 'flex', justifyContent: 'center', },

        paragraph: {
            display: 'flex', width: '100%',
            fontSize: '15px', 
        },
        box4: {
             width: '34%', fontSize: '11px', },

        buttonBox: {
            width: '80%',
        },
        tableBox: {
            width: '90%', height: '20%'
        },
        box1: { width: '33%', fontSize: '16px' },
        box2: { width: '33%', fontSize: '16px' },
        box3: { width: '33%', fontSize: '16px' },
    },
})

function PlaceOrder() {
    const classes = useStyles();
    const navigate = useNavigate();

    const wayToDashboard = () => {
        navigate('/')
    }
    return (
        <React.Fragment>
            <Header />
            <Box className={classes.outerBox}>
                <Box className={classes.innerBox}>
                    <Box className={classes.imgBox}>
                        <img src={require("../order.jpeg")} alt="" style={{ width: '45%' }} />
                    </Box>
                    <Box className={classes.para}>
                        <Box className={classes.paragraph}>
                            <Box> hurray!!! your order is confirmed</Box>
                            <Box>the order id is #123456 save the order id for </Box>
                            <Box>further communication</Box>
                        </Box>
                    </Box>
                    <Box className={classes.tableBox}>
                        <Box className={classes.tableRow}>
                            <Box className={classes.box1}>Email</Box>
                            <Box className={classes.box2}>Contact Us</Box>
                            <Box className={classes.box3}>Address</Box>
                        </Box>
                        <Box className={classes.detailBox}>
                            <Box className={classes.box4}>
                                <Box className={classes.text1}>admin@bookstore.com</Box>
                            </Box>

                            <Box className={classes.box4}>
                                <Box className={classes.text2}>+91 8163475881</Box>
                            </Box>

                            <Box className={classes.box4}>
                                <Box className={classes.text3}>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box className={classes.buttonBox}>
                        <Button variant="contained" onClick={wayToDashboard} sx={{ backgroundColor: '#3371B5' }}>Continue Shopping</Button>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default PlaceOrder