import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { FormControlUnstyledContext } from '@mui/base';
import { signUp } from '../services/userService';

const mobileRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

const emailRegx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>([\].;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@]+\.)[^<>()[\].,;:\s@\"]{2,})$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z)-9]*).{8,}$/;

const firstNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;


const useStyles = makeStyles({
    signupBox: {
        display: 'flex',
    },
    contentLogin: {
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',
        // border: '1px solid lightgray',
        width: '30vw',
        height: '68vh', backgroundColor: '#FFFFFF',
        // left: '500px',
        top: '10px'
    },
    heading: {
        // border: '1px solid blue',
        display: 'flex',
        justifyContent: 'flex-end',
        textTransform: 'uppercase',
        fontSize: '25px',
        width: '75%',
    },
    textField1: {
        display: 'flex',
        width: '75%'
    },
    textField2: {
        display: 'flex',
        width: '75%',
    },
    loginButton: {
        // border:'1px solid pink',
        width: '75%',
        // background:'#A03037'
    },
    textField3: {
        display: 'flex',
        width: '75%'
    },
    textField4: {
        display: 'flex',
        width: '75%',
    },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        signupBox: {
            // display: 'flex',
        },
        contentLogin: {
            display: 'flex',
            position: 'relative',
            // border: '1px solid lightgray',
            width: '100%',
            height: '68vh',
            top: '10px'
        },
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        signupBox: {
            // display: 'flex',
        },
        contentLogin: {
            position: 'relative',
            // border: '1px solid lightgray',
            width: '100%',
            height: '68vh', 
            top: '10px'
        },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        signupBox: {
            // display: 'flex',
        },
        contentLogin: {
            position: 'relative',
            // border: '1px solid lightgray',
            width: '100%',
            height: '68vh', 
            top: '10px'
        },
    },
})



function Signup() {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: ""
    })

    const [regexObjects, setRegexObjects] = useState({
        firstNameBorder: false, firstNameHelper: "",
        phoneNumberBorder: false, phoneNumberHelper: "",
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: "",

    })

    const takeName = (event) => {
        setUserInfo(prevState => ({
            ...prevState,
            fullName: event.target.value
        }))
        console.log(event.target.value);
    }
    const takeEmail = (event) => {
        setUserInfo(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value);
    }

    const takePassword = (event) => {
        setUserInfo(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value);
    }
    const takeMobileNumber = (event) => {
        setUserInfo(prevState => ({
            ...prevState,
            phone: event.target.value
        }))
        console.log(event.target.value);
    }

    const submit = () => {
        let firstnameTest = firstNameRegex.test(userInfo.fullName)
        let emailTest = emailRegx.test(userInfo.email)
        let passwordTest = passwordRegex.test(userInfo.password)
        let phoneNumberTest = mobileRegex.test(userInfo.phone)

        if (firstnameTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                firstNameBorder: true,
                firstNameHelper: "Enter vaild name"
            }))
        }
        else if (firstnameTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }

        if (emailTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                emailBorder: true,
                emailHelper: "Enter vaild email id"
            }))
        }
        else if (emailTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                passwordBorder: true,
                passwordHelper: "Enter vaild password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        if (phoneNumberTest === false) {
            setRegexObjects(privousState => ({
                ...privousState,
                phoneNumberBorder: true,
                phoneNumberHelper: "Enter vaild phone number"
            }))
        }
        else if (phoneNumberTest === true) {
            setRegexObjects(privousState => ({
                ...privousState,
                phoneNumberBorder: false,
                phoneNumberHelper: ""
            }))
        }

        if (emailTest === true && passwordTest === true && firstnameTest===true && phoneNumberTest===true) {
            signUp(userInfo).then((result) => {
                console.log(result)
            }).catch((error) => { console.log(error) })
            console.log("signup successfully")
        }

    }
    return (
        <div>
            <Box className={classes.signupBox}>
                <Box className={classes.contentLogin} >
                    {/* <Box className={classes.heading}>
                        <Button variant="text" sx={{ fontSize: '20px', color: 'black' }}>Signup</Button>
                    </Box> */}
                    <Box className={classes.textField1}>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" size="small"
                            fullWidth="true" onChange={takeName} 
                            error={regexObjects.firstNameBorder} helper={regexObjects.firstNameHelper}/>
                    </Box>
                    <Box className={classes.textField2}>
                        <TextField id="outlined-basic" label="Email Id" variant="outlined" size="small"
                            fullWidth="true" onChange={takeEmail} 
                            error={regexObjects.emailBorder} helper={regexObjects.emailHelper}/>
                    </Box>
                    <Box className={classes.textField3}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" type="password"
                            fullWidth="true" onChange={takePassword}
                            error={regexObjects.passwordBorder} helper={regexObjects.passwordHelper} />
                    </Box>
                    <Box className={classes.textField4}>
                        <TextField id="outlined-basic" label="Mobile Number" variant="outlined" size="small"
                            fullWidth="true" onChange={takeMobileNumber}
                            error={regexObjects.phoneNumberBorder} helper={regexObjects.phoneNumberHelper} />
                    </Box>
                    <Box className={classes.loginButton}>
                        <Button variant="contained" fullWidth="true"
                            sx={{ backgroundColor: '#A03037' }} onClick={submit}>Signup</Button>
                    </Box>

                </Box>
            </Box>
        </div>
    )
}

export default Signup