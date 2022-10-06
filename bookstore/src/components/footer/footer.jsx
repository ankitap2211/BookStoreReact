import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';

const useStyles = makeStyles({
    footer: {
        width: '100vw', backgroundColor: '#2E1D1E', position: 'relative', top: '180px', height: '7vh',
        display: 'flex', color: 'white', justifyContent: 'center',alignItems:'center'
      },
      footerStyle: { width:'80%',textAlign:'left' },

      '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        footer: {
            width: '100vw',position: 'relative', top: '130px', 
          },
          footerStyle: { fontSize:'12px' },
      },

      '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        footer: {
            width: '100vw',position: 'relative', top: '130px', 
          },
          footerStyle: { fontSize:'14px'},
      },

      '@media only screen and (min-width:769px) and (max-width:1024px)': {
        footer: {
            width: '100vw',position: 'relative', top: '120px', 
          },
      },
})

function Footer() {
    const classes = useStyles();
  return (
    <Box>
        <Box className={classes.footer}>
        <Box className={classes.footerStyle}>
          Copyright @2020, Bookstore Private Limited
        </Box>
      </Box>
    </Box>
  )
}

export default Footer