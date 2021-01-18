import React from 'react'
import ReactDOM from 'react-dom'
import './register.css'

function Register() {
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
                    <form action="">
                        <input type="text" name="name" placeholder="Name" /> <br></br>
                        <input type="text" name="email" placeholder="E-mail" /> <br></br>
                        <input type="text" name="restaurant" placeholder="Name of your restaurant" /> <br></br>
                        <input type="text" name="password" placeholder="Password" /> <br></br>
                        <input type="text" name="passwordRepeat" placeholder="Verify password"/> <br></br>
                        <input type="submit" value="Sign up"/> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
