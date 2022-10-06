import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
   
})

function PaginationPage({setCurrentPage }) {
    const classes = useStyles();
    
    return (
        <Box className={classes.pagination}>
                 <Pagination count={4} sx={{color:'#A03037'}} onChange={(e,value)=>setCurrentPage(value)}/>
        </Box>
    )
}

export default PaginationPage