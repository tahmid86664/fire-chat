import React from 'react'

import './login.css';

// @ant-design icons
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

import { auth, googleProvider, facebookProvider } from '../../firebase';

const Login = () => {
  
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((result) => {
      console.log(result.user);
    }).catch(err => console.log("Google sign in error"));
  }

  const signInWithFacebook = () => {
    auth.signInWithPopup(facebookProvider).then((result) => {
      console.log(result.user);
    }).catch(err => console.log("facebook sign in error ", err));
  }

  return (
    <div className='login'>
      <div className="login__card">
        <h2 className="login__cardHeader">Welcome to FireChat 🔥🔥🔥!!!</h2>
        <div className="login__button google"
          onClick={signInWithGoogle}
        >
            <GoogleOutlined /> Sign in with Google
        </div>
        <div className="login__button facebook"
          onClick={signInWithFacebook}
        >
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
    </div>
  )
}


export default Login;