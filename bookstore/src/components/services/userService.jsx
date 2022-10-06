//this is for login and signup

//axios it is liabrary through this we can communicate with server

import axios from 'axios';

export const login = (loginObj)=>{
    //here we provide login url
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", loginObj)
    
    return response
    console.log("login process")
} 

export const signUp = (signupObj) =>{

    let result = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration", signupObj)

    return result
    console.log("register processing")
}


