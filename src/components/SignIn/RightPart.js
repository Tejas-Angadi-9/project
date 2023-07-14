import React, { useState } from 'react'
import { GoogleLoginButton } from "react-social-login-buttons"
import { LoginSocialGoogle } from "reactjs-social-login"
import { Link } from 'react-router-dom';


const RightPart = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function emailHandler(e) {
    setEmail(e.target.value)
  }

  function passwordHandler(e) {
    setPassword(e.target.value)
  }


  function submitHandler(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <div className='right-container'>
      <div className='signIn-container'>
        <div className="signIn-inner-container">
          <div className='signIn-text-container'>
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>

          <div className="aut-buttons">


            <div className='google-btn'>
              <Link to='/dashboard'>


                <LoginSocialGoogle
                  client_id={"550385965392-8pcujkgr9taa0kv45cju2bl33dt27okk.apps.googleusercontent.com"}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  style={{ border: 'none' }}
                  onResolve={({ provider, data }) => {
                    console.log(provider, data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <GoogleLoginButton>
                    <span style={{ fontSize: '12px',textdecoration:"none"}}>Login with Google</span>
                  </GoogleLoginButton>



                </LoginSocialGoogle>
              </Link>
            </div>
            <button id='apple-btn'><img src="https://www.freepnglogos.com/uploads/mac-cosmetic-png-logo/apple-mac-cosmetic-png-logo-8.png" alt="" width={"20px"} className='logos' />Sign in with Apple</button>
          </div>



          <div className="email-container">
            <form onSubmit={submitHandler}>
              <label htmlFor="email" className='form-text' >Email Address</label>
              <input type="email"
                id='email'
                placeholder='enter your email'
                name='email'
                onChange={emailHandler}
                className='input-container'
                value={email} />

              <label htmlFor="password" className='form-text'>Password</label>
              <input type="password"
                id='password'
                placeholder='enter your password'
                name='password'
                onChange={passwordHandler}
                className='input-container'
                value={password} />


              <a href="#" className='forgot-password'>Forgot Password?</a>
              <button className='sign-in-btn'>Sign in</button>

            </form>

          </div>
          <div className='footer-container'>
            <p className='footer-text'>Don't have an account? <span id='register-here'> <a href="">Register here</a></span> </p>
          </div>
        </div>
      </div>



    </div >
  )
}

export default RightPart