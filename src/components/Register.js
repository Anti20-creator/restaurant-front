import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './register.css'
import axios from 'axios'
import API from '../config'


function Register() {
    
    //this will store the data from the form
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
        restaurant: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
        restaurant: ''
    })
    
    async function handleInput(e){
        const {name, value} = e.target
        setSignupData({...signupData, [name]: value})
    }

    function validateForm(){
        let errorsToPush = {
            name: '',
            email: '',
            password: '',
            passwordRepeat: '',
            restaurant: ''
        }

        if (validateEmail(signupData.email)){
            //email is valid -> check if it isn't registered yet
            API.get('/userExists', {params : {
                    'email': signupData.email
            }}).then(available => {
                errorsToPush.email = available ? '' : 'Email is used!'
            })

        }else{
            errorsToPush.email = signupData.email == '' ? '' : 'Invalid email format!'
        }

        errorsToPush.name = signupData.name == "" ? "Name can't be empty!" : ''
        errorsToPush.restaurant = signupData.restaurant == '' ? "Restaurant name can't be empty!" : ''

        errorsToPush.passwordRepeat = signupData.password !== signupData.passwordRepeat ? "Passwords don't match!" : ''

        setErrors(errorsToPush)

    }

    function valid(){
        for(const e in errors){
            if(errors[e] !== '') return false
        }
        console.log(errors.passwordRepeat)
        return true
    }

    function validateEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function registerUser(e){
        e.preventDefault()
        if(valid()){
            const data = JSON.stringify(signupData)
            API.post('/register', data).then(resp => console.log(resp))
        }else{
            alert('NOT VALID')
        }
    }

    //can help to debugging too
    useEffect(() => {
        validateForm()
        console.log(signupData)
        console.log(errors)
    }, [signupData])
    
    return (
        <div>
            <div className="signupHolder">
                <div className="signupHolder--left">
                    <h2>Welcome back!</h2>
                    <h4>To keep connected with us please <br></br> login with your personal info </h4>
                    <button>Sign in</button>
                </div>

                <div className="signupHolder--right">
                    <h1>Create Account</h1>
                    <form action="" onSubmit={registerUser}>
                        <input onChange={handleInput} type="text" name="name" placeholder="Name" /> <br></br>
                        <p>{errors.name}</p>
                        <input onInput={handleInput} style={{outlineColor: errors.email == '' ? 'green' : 'red'}} type="text" name="email" placeholder="E-mail" /> <br></br>
                        <p>{errors.email}</p>
                        <input onInput={handleInput} type="text" name="restaurant" placeholder="Name of your restaurant" /> <br></br>
                        <p>{errors.restaurant}</p>
                        <input onInput={handleInput} type="text" name="password" placeholder="Password" /> <br></br>
                        <p>{errors.password}</p>
                        <input onInput={handleInput} type="text" name="passwordRepeat" placeholder="Verify password"/> <br></br>
                        <p>{errors.passwordRepeat}</p>
                        <input type="submit" value="Sign up"/> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
