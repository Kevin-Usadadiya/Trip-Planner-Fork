import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

import { Link } from 'react-router-dom'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../../context/AuthContext'

function SignUp() {
    // For Google Auth

  const {googleSignIn, user} = UserAuth()
  const navigate = useNavigate()

    const handleGoogleSignIn = async() => {  
    try{
        await googleSignIn()
        
    }catch(error){
      console.log(error)
    }
  
  };

  useEffect(()=>{
      if(user != null){
          navigate('/')
      }
  },[user,navigate]) // On user change this effect will run

  return (
    <div className='signup_main_container'>
      <div className='signup_sub_container'>
      <h1 className='signup_heading'>Signup</h1>

      <form className='signup_form'>
        <div>
          <p><span style={{color:"red"}}><strong>*</strong></span> Indicates a required field</p>

          {/* Email Div */}
          <div className='form_element'>
            <p>Email Id <span style={{color:"red"}}>*</span></p>
            <input type="email" name='email' required/>
          </div>


          {/* Password Div */}
          <div className='form_element'>
            <p>Password <span style={{color:"red"}}>*</span></p>
            <input type="password" name='pass' required/>
          </div>


          {/* Forgot Password Div */}
          <div className='form_element'>
            <Link to="/"><strong>Forgot password?</strong></Link>
          </div>

          {/* Signup Button */}
          <div className='signup_button'>
            <button>Signup</button>
          </div>

          {/* Signup With Google */}
          <div className='additional_signup_button'>     
            <GoogleButton onClick={handleGoogleSignIn}/>
          </div>
          
          <div className='redirect_to_login'>
              <Link to="/login"><strong>Already have an account?</strong></Link>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignUp
