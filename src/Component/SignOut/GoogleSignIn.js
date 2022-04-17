import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Fire.init';
import useFirebase from './useFirebase';
import img1 from '../SignOut/Google_Icons2.webp'
import './style.css'


const GoogleSignIn = () => {
    const {signInWithGoogle,user}= useFirebase();
 
    return (
        // <div className='text-center'>
        //     <button  className='btnStyle' onClick={signInWithGoogle}>
        //     <img  className='w-25 ' src={img1} alt="" />  
        //     <span>Google</span>  
        //     </button>
        // </div>
        console.log('hello')
    );
};

export default GoogleSignIn;