import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Radio from '@mui/joy/Radio';
import TextField from '@mui/material/TextField';
import OrderSummery from '../orderSummery/orderSummery';
import { detailsCustomer } from '../services/dataService';

const useStyles = makeStyles({
    outerBox: {
        width: '75vw', height: '95vh', display: 'flex',
        justifyContent: 'space-evenly', position: 'relative', top: '80px', left: '200px',
        flexDirection: 'column',
    },
    innerBox: {
        width: '80%', display: 'flex', flexDirection: 'column', height: '100%',
        justifyContent: 'space-evenly', border: '1px solid lightgray'
    },
    details: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '95%' },
    textField1: {
        display: 'flex', flexDirection: 'row', width: '80%',
        justifyContent: 'space-evenly'
    },
    addressText: { border: '1px solid #A03037', color: '#A03037', width: '20%' },
    nameLabel: { width: '23%', },
    nameField: { width: '40%', display: 'flex', flexDirection: 'column' },
    mobileLabel: { width: '45%', },
    mobileField: { width: '40%', display: 'flex', flexDirection: 'column' },

    address: {
        width: '70%', display: 'flex', flexDirection: 'column',
        position: 'relative', left: '39px',
    },

    addressField: { 
        display: 'flex', height: '100%', width: '100%', position: 'relative', left: '0px',
     },
    addressLabel: { width: '12%' },

    textField2: {
        display: 'flex', flexDirection: 'row', width: '80%',
        justifyContent: 'space-evenly'
    },
    cityLabel: { width: '23%', },
    cityField: { width: '40%', display: 'flex', flexDirection: 'column' },
    stateLabel: { width: '13%', },
    stateField: { width: '40%', display: 'flex', flexDirection: 'column' },
    type: { display: 'flex', justifyContent: 'space-between', flexDirection: 'column' },
    typeLabel: { fontSize: '18px', width: '19%' },
    radioButton: {
        display: 'flex', justifyContent: 'space-between', width: '78%', position: 'relative',
        left: '50px', top: '10px'
    },
    buttonStyle: { display: 'flex', justifyContent: 'flex-end', width: '95%', },
    custom: { width: '32%', fontSize: '20px' },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        outerBox: {
            width: '90vw', height: '100vh', 
           position: 'relative', top: '60px', left: '10px',
            flexDirection: 'column',
        },
        innerBox: {
            width: '100%', height: '100%',
        },
        addressText:{
            display:'none'
        },
        custom:{
            width:'55%'
        },
        mobileLabel:{
            width:'40%'
        },
        address: {
            width: '93%', 
            position: 'relative', left: '0px'
        },
        addressLabel:{
            width:'29%',
        },
        addressField: { 
            display: 'flex', height: '100%', width: '96%', position: 'relative', left: '10px'
         },
        nameField: { 
            width: '90%', position:'relative',left:'10px'
         },
         mobileField: { 
            width: '90%',position:'relative',left:'10px'
         },
        radioButton:{
            width: '78%', position: 'relative',
            left: '20px', top: '10px'
        },
        textField1: {
            display: 'flex', flexDirection: 'column', width: '100%',height:'27%',
        },
        textField2: {
            display: 'flex', flexDirection: 'column', width: '100%',height:'27%',
        },
        cityField: { width: '90%',position: 'relative', left: '10px'  },
        stateField: { width: '90%',position: 'relative', left: '10px'  },
        buttonStyle: { width: '90%',position:'relative',top:'10px',padding:'20px' },
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        outerBox: {
            width: '90vw', height: '95vh', 
           position: 'relative', top: '60px', left: '10px',
            flexDirection: 'column',
        },
        innerBox: {
            width: '100%', height: '100%',
        },
        addressText:{
            display:'none'
        },
        custom:{
           width:'45%'
        },
        textField1:{
           width:'80%'
        },
        mobileLabel:{
           width:'100%'
        },
        addressField: { 
            display: 'flex', height: '80%', width: '100%', position: 'relative', left: '0px',
         },
        address: {
            width: '68%', 
            position: 'relative', left: '30px',
        },
        addressLabel:{
            width:'20%'
        },
        radioButton:{
            width: '68%', position: 'relative',
            left: '40px', top: '10px'
        },
        nameField: { width: '40%',  },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        outerBox: {
            width: '95vw', height: '95vh', 
           position: 'relative', top: '60px', left: '10px',
            flexDirection: 'column',
        },
        innerBox: {
            width: '100%', height: '100%',
        },
        addressField: { 
            display: 'flex', height: '80%', width: '99%', position: 'relative', left: '8px',
         },
        address: {
            width: '70%', 
            position: 'relative', left: '33px',
        },
        custom:{
           width:'25%'
        },
        mobileLabel:{
           width:'50%'
        },
        addressLabel:{
            width:'15%'
        },
        radioButton:{
            width: '68%', position: 'relative',
            left: '45px', top: '10px'
        }
    },

})

const addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
const stateRegex = /[A-Z][a-z]+(?: +[A-Z][a-z]+)*/
const cityRegex = /^[a-zA-Z',.\s-]{1,25}$/;


function CustomerDetails(props) {
    const classes = useStyles();

    const [hideButton, setHideButton] = useState(true)

    const [custmerDetail, setCustomerDetail] = useState({
        addressType: "",
        fullAddress: "",
        city: "",
        state: ""
    })

    const [regexObjects, setRegexObjects] = useState({
        addressBorder: false, addressHelper: "",
        cityBorder: false, cityHelper: "",
        stateBorder: false, stateHelper: "",
    })

    const takeType = (event) => {
        setCustomerDetail(prevstate => ({
            ...prevstate,
            addressType: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeAddress = (event) => {
        setCustomerDetail(prevstate => ({
            ...prevstate,
            fullAddress: event.target.value
        }))
        console.log(event.target.value)
    }

    const takeCity = (event) => {
        setCustomerDetail(prevstate => ({
            ...prevstate,
            city: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeState = (event) => {
        setCustomerDetail(prevstate => ({
            ...prevstate,
            state: event.target.value
        }))
        console.log(event.target.value)
    }

    const oepnOrder = () => {
        props.oepnOrderSummery()
        setHideButton(false)

        let addressTest = addressRegex.test(custmerDetail.fullAddress)
        let stateTest = stateRegex.test(custmerDetail.state)
        let cityTest = cityRegex.test(custmerDetail.city);

        if (addressTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                addressBorder: true,
                addressHelper: "Enter address"
            }))
        }
        else if (addressTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                addressBorder: false,
                addressHelper: ""
            }))
        }

        if (stateTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                stateBorder: true,
                stateHelper: "Enter state"
            }))
        }
        else if (stateTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                stateBorder: false,
                stateHelper: ""
            }))
        }

        if (cityTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                cityBorder: true,
                cityHelper: "Enter city"
            }))
        }
        else if (cityTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                cityBorder: false,
                cityHelper: ""
            }))
        }


        if (addressTest === true && cityTest === true && stateTest === true) {
           detailsCustomer(custmerDetail).then((response => {
                console.log(response.data.result, ".....response.....");
            })).catch((error) => { console.log(error); })

        }
    }

    return (
        <div>
            <Box className={classes.outerBox}>
                <Box className={classes.innerBox}>
                    <Box className={classes.details}>
                        <Box className={classes.custom}>Customer Details</Box>
                        <Box className={classes.addressText}>Add New Address</Box>
                    </Box>
                    <Box className={classes.textField1}>
                        <Box className={classes.nameField}>
                            <label className={classes.nameLabel}>FullName</label>
                            <TextField size="small" fullWidth="true" variant="outlined" placeholder="Full Name"/>
                        </Box>
                        <Box className={classes.mobileField}>
                            <label className={classes.mobileLabel}>Mobile Number</label>
                            <TextField size="small" fullWidth="true" variant="outlined"  placeholder="Mobile Number" />
                        </Box>
                    </Box>


                    <Box className={classes.address}>
                        
                        <Box className={classes.addressLabel}> <label>Address</label></Box>
                        
                        <Box className={classes.addressField}>
                            <TextField size="small" fullWidth="true" variant="outlined" multiline rows={3}
                                onChange={takeAddress}  placeholder="Address"
                                error={regexObjects.addressBorder} helper={regexObjects.addressHelper} /></Box>
                    </Box>

                    <Box className={classes.textField2}>
                        <Box className={classes.cityField}>
                            <label className={classes.cityLabel}>City/town</label>
                            <TextField size="small" fullWidth="true" variant="outlined"  placeholder="City/town"
                                onChange={takeCity} error={regexObjects.cityBorder} helper={regexObjects.cityHelper} />
                        </Box>
                        <Box className={classes.stateField}>
                            <label className={classes.stateLabel}>State</label>
                            <TextField size="small" fullWidth="true" variant="outlined"  placeholder="State"
                                onChange={takeState} error={regexObjects.stateBorder} helper={regexObjects.stateHelper} />
                        </Box>
                    </Box>

                    <Box className={classes.type}>
                        <Box className={classes.typeLabel}><label>Type</label></Box>
                        <Box className={classes.radioButton}>
                            <Box>
                                <input type="radio" value="Home" onChange={takeType}
                                    name="home" id="home" />
                                <label>Home</label>
                            </Box>
                            <Box>
                                <input type="radio" value="Work" onChange={takeType}
                                    name="work" id="work" />
                                <label>Work</label>
                            </Box>
                            <Box>
                                <input type="radio" value="Other" onChange={takeType}
                                    name="other" id="other" />
                                <label>Other</label>
                            </Box>
                        </Box>
                    </Box>

                    {
                        hideButton ? <Box className={classes.buttonStyle} onClick={oepnOrder}>
                            <Button variant="contained" sx={{ backgroundColor: '#3371B5' }}>Continue</Button>
                        </Box> : null
                    }

                </Box>
            </Box>
            
        </div>
    )
}

export default CustomerDetails