import React from 'react';
import './Login.css';
function Login() {
    return (
        <div className="container">
            <h1>Login</h1>
            <form>
                <div className="text_field">
                    <label>User Name</label>
                    <input type="email" placeholder="Enter Email"></input>
                </div>
                <div className="text_field">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" pattern=".{8,}" required></input>
                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login" />
                <div className="signup">Not a member?<a href>Signup</a></div>
            </form>
        </div>
    );
}

export default Login;