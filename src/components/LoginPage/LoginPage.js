import React from 'react'
import TextField from '@material-ui/core/TextField'
import {useState, useEffect} from 'react'
import API from '../../config'
import { useHistory } from "react-router-dom";

import axios from 'axios'

function LoginPage() {
    
    const history = useHistory();
    const [loginData, setLoginData] = useState({
        'email' : '',
        'password' : ''
    })
    const [errors, setErrors] = useState({
        'email' : '',
        'password' : ''
    })
    
    useEffect(() => {
        validateForm()
        console.log(loginData)
        console.log(errors)
    }, [loginData])
    
    function validateForm(){
        
        let errorsToPush = {
            'email' : '',
            'password' : ''
        }
        if(loginData.email === ''){
            errorsToPush.email = "Email can't be blank"
            console.log(loginData.email)
        }else if(!validateEmail(loginData.email)) {
            errorsToPush.email = "Email is not valid"
        }
        
        if(loginData.password === ''){
            errorsToPush.password = "Password can't be blank"
        }

        setErrors(errorsToPush)
    }

    async function handleInput(e){
        const {name, value} = e.target
        setLoginData({...loginData, [name]: value})
    }
    
    function validateEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    async function loginUser(e){
        e.preventDefault()
        await API.post('/login', loginData).then(result => {
            if(result.status == 200){
                history.push("/");
            }
        }).catch((error) => {
            console.log('Wrong credentials!')
        })
        
    }

    return (
        <div>
            <form action="" onSubmit={loginUser}>
                <TextField
                    name="email"
                    error={errors.email}
                    onInput={handleInput}                
                    id="standard-error-helper-text"
                    label="Full Name"
                    defaultValue=""
                    helperText={errors.email}
                />
                <br></br>
                <TextField
                    name="password"
                    error={errors.password}
                    onInput={handleInput}                
                    label="Password"
                    defaultValue=""
                    helperText={errors.password}
                />
                <br></br>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginPage
