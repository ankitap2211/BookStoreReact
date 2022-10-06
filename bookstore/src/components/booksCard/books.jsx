import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles({
    outerBox: {
        border: '1px solid lightgray', width: '16vw', height: '40vh', position: 'relative', top: '0px',
        marginTop: '30px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', marginRight: '60px'
        //  left: '170px'
    },
    imgBox: { backgroundColor: '#F5F5F5', height: '60%' },
    contentBox: {
        width: '100%', display: 'flex', flexDirection: 'column', height: '40%',
        justifyContent: 'space-evenly', alignItems: 'flex-start',
    },
    para1: {
        width: '75%', fontSize: '15px', display: 'flex', 
        justifyContent: 'flex-start', position: 'relative', left: '20px'
    },
    para2: {
        width: '50%', fontSize: '12px', color: 'gray', display: 'flex', justifyContent: 'flex-start',
        position: 'relative', left: '20px'
    },
    para3: {
        width: '20%', position: 'relative', left: '20px', display: 'flex', fontSize: '12px',
        backgroundColor: 'green', color: 'white', justifyContent: 'space-between'
    },
    para4: {
        width: '45%', position: 'relative', left: '20px', display: 'flex', fontSize: '12px',
        justifyContent: 'space-between'
    },
    sub1: { position: 'absolute' },
    sub2: { color: 'gray', position: 'relative', left: '50px' },
    twenty: { position: 'absolute', fontSize: '10px', top: '205px', left: '70px' },


    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        outerBox: {
            width: '50vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '5px',
        },
        imgBox: { backgroundColor: '#F5F5F5', height: '60%' ,width:'100%'},
        twenty: { 
            position: 'absolute', fontSize: '10px', top: '175px', left: '70px',
         },
    },
    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        outerBox: {
            width: '35vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',marginRight:'30px'
        },
        imgBox: { width:'100%' },
        contentBox: {
            width: '100%', display: 'flex', flexDirection: 'column', 
        },
        twenty: { 
            position: 'absolute', fontSize: '10px', top: '175px', left: '70px',
         },
       
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        outerBox: {
            width: '23vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',marginRight:'30px'
        },
        imgBox: { width:'100%' },
        contentBox: {
            width: '100%', display: 'flex', flexDirection: 'column', 
        },
        twenty: { 
            position: 'absolute', fontSize: '10px', top: '175px', left: '70px',
         },
    },
})

function Books(props) {
    const classes = useStyles();
    console.log(props, "Props printed");
    return (
        <Box>

            {/* <Paper elevation={0} />  */}
            {/* {props.currentPost} */}
            <Box className={classes.outerBox} >
                <Box className={classes.imgBox}>
                    <img src={require("../Image11.png")} alt="" srcset=""
                        style={{ width: '50%', position: 'relative', top: '10px', height: '90%' }} />
                </Box>
                <Box className={classes.contentBox}>
                    <Box className={classes.para1}>
                        {props.books.bookName}
                    </Box>
                    <Box className={classes.para2}>{props.books.author}</Box>
                    <Box className={classes.para3}>
                        <Box><span className={classes.star}
                            style={{ position: 'relative', left: '5px' }}>4.5<StarIcon sx={{ fontSize: '15px', position: 'relative', top: '2px', left: '3px' }} /></span></Box>
                    </Box>
                    <Box><span className={classes.twenty}>({props.books.quantity})</span></Box>
                    <Box className={classes.para4}>
                        <Box className={classes.sub1}><b>Rs.{props.books.discountPrice}</b></Box>
                        <Box className={classes.sub2}><strike>Rs.{props.books.price}</strike></Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

export default Books