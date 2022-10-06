import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import { login } from '../services/userService';


import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const emailRegx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>([\].;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@]+\.)[^<>()[\].,;:\s@\"]{2,})$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z)-9]*).{8,}$/;


const useStyles = makeStyles({
    loginBox: {
        display: 'flex',
        position: 'relative',

    },
    contentLogin: {
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center', left: '0px',
        top: '10px',
        position: 'relative',
        // border: '1px solid lightgray',
        width: '30vw',
        height: '68vh', zIndex: '2',backgroundColor:'#FFFFFF'
    },
    heading: {
        // border: '1px solid blue',
        display: 'flex',
        fontSize: '25px',
        width: '75%',
        justifyContent: 'space-between'
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
    orSection: {
        display: 'flex',
        width: '75%',
        flexDirection: 'row',
        // border:'1px solid black',
        justifyContent: 'space-between', alignItems: 'center'
    },
    twoButton: {
        // border:'1px solid red',
        display: 'flex',
        justifyContent: 'space-around',
        width: '80%'
    },
    line1: { width: '25%', },
    line2: { width: '25%' },
    subtext: { width: '25%' },

    '@media only screen and (min-width: 320px) and (max-width: 480px)': {
        contentLogin: {
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center', left: '0px',
            top: '10px',
            position: 'relative',
            width: '100%',
            height: '68vh', zIndex: '2',backgroundColor:'#FFFFFF'
        },
    },

    '@media only screen and (min-width: 481px) and (max-width: 768px)': {
        loginBox: {
            // display: 'flex',
            position: 'relative',
    
        },
        contentLogin: {
            left: '0px',
            top: '10px',
            position: 'relative',
            width: '100%',
            height: '68vh', zIndex: '2',
        },
    },

    '@media only screen and (min-width:769px) and (max-width:1024px)': {
        loginBox: {
            // display: 'flex',
            position: 'relative',
    
        },
        contentLogin: {
            left: '0px',
            top: '10px',
            position: 'relative',
            width: '100%',
            height: '68vh', zIndex: '2',
        },
    },
     
})

function Login(props) {
    
    const classes = useStyles();

    const [userInput, setUserInput] = useState({ email: "", password: "" })

    const [rejexObject, setRegexObject] = useState({ emailBorder: false, emailHelper: "", passwordBorder: "", passwordHelper: "" })

    const takeEmail = (event) => {
        setUserInput(privousState => ({
            ...privousState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    const takePassword = (event) => {
         setUserInput(privousState => ({
            ...privousState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit=()=>{
        let emailTest = emailRegx.test(userInput.email)
        let passwordTest = passwordRegex.test(userInput.password)

        if (emailTest === false) {
            setRegexObject(privousState => ({
                ...privousState,
                emailBorder: true,
                emailHelper: "Enter vaild email id"
            }))
        }
        else if (emailTest === true) {
            setRegexObject(privousState => ({
                ...privousState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRegexObject(privousState => ({
                ...privousState,
                passwordBorder: true,
                passwordHelper: "Enter valid password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObject(privousState => ({
                ...privousState,
                passwordBorder: false,
                passwordHelper: " "
            }))
        }
        //here userInput is what email and password(get value from input field)

        if (emailTest === true && passwordTest === true) {
            login(userInput).then((response) => {
                console.log(response)
                localStorage.setItem("token", response.data.result.accessToken)
                // console.log("login successfully")
            }).catch((error) => { console.log(error) })
            console.log("login successfully")
        }
    }

    return (
        <div>
            <Box className={classes.loginBox}>
                <Box className={classes.contentLogin} >
                    <Box className={classes.textField1}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small" 
                        fullWidth="true" onChange={takeEmail} error={rejexObject.emailBorder} helperText={rejexObject.emailHelper}/>
                    </Box>
                    <Box className={classes.textField2}>
                        <TextField id="standard-password-input" label="Password" variant="outlined" size="small"  type="password"
                        fullWidth="true" onChange={takePassword} error={rejexObject.passwordBorder} helperText={rejexObject.passwordHelper}/>
                    </Box>
                    <Box className={classes.loginButton}>
                        <Button variant="contained" fullWidth="true" 
                        sx={{ backgroundColor: '#A03037' }} onClick={submit}>Login</Button>
                    </Box>
                    <Box className={classes.orSection}>
                        <Box className={classes.line1}><Divider sx={{ borderBottomWidth: 3, width: '100%' }} /></Box>
                        <Box className={classes.subtext}><h4>OR</h4></Box>
                        <Box className={classes.line2}><Divider sx={{ borderTopWidth: 3, width: '100%', }} /></Box>
                    </Box>
                    <Box className={classes.twoButton}>
                        <Button variant="contained" size="medium">Facebook</Button>
                        <Button variant="outlined" size="medium" sx={{ background: 'lightgray', color: 'black', borderColor: 'lightgray' }}>Google</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Login