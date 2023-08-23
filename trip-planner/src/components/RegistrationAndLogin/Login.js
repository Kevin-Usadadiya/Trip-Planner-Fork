import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import { Link } from 'react-router-dom'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../../context/AuthContext'
import './Login.css'

function Login() {
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

      


  return (<>
    <div className='login_main_container'>
      <div className='login_sub_container'>
      <h1 className='login_heading'>Login</h1>

      <form className='login_form'>
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

          {/* Login Button */}
          <div className='login_button'>
            <button>Login</button>
          </div>

          {/* Login With Google */}
          <div className='additional_login_button'>     
            <GoogleButton onClick={handleGoogleSignIn}/>
          </div>
          
          <div className='create_account'>
              <Link to="/signup"><strong>Create an account</strong></Link>
          </div>

         

        </div>
      </form>
    </div>
    </div>
  </>
  )
}

export default Login
