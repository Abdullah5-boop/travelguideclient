import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import auth from '../../Fire.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import useFirebase from './useFirebase';
import img1 from "./Google_Icons2.webp"
const SingOut = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirm, setConfiom] = useState('');
    const [error, seterror] = useState('');
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    // const { signInWithGoogle } = useFirebase();
    const provider = new GoogleAuthProvider()




    const handleSubmit = (event) => {
        event.preventDefault();
        if (confirm === password) {
            createUserWithEmailAndPassword(email, password)
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    // ...
                });
            // seterror('')
        }
        else {
            const a = "passworld does not match";
            seterror(a);
        }
    }
    const HandleEmail = (e) => {
        setemail(e.target.value)

    }
    const HandlePASS = (e) => {
        setpassword(e.target.value)
    }
    const handlecomfirm = (e) => {
        setConfiom(e.target.value)
    }



    const handlegoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
            })
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='mt-5 formate'>
            <div className='loginformat'>
                <h2 className='text-primary text-center mb-4'>Resister</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-start'>Email address</Form.Label>
                        <Form.Control onBlur={HandleEmail} type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={HandlePASS} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handlecomfirm} type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        error ? `${error}` : " "
                    }
                    <br />
                    <Link to='/Login'>Login</Link> <br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <div className='text-center mb-5'>
                        {/* <GoogleSignIn></GoogleSignIn> */}
                        <button className='btnStyle' onClick={handlegoogle}>
                            <img className='w-25 ' src={img1} alt="" />
                            <span>Google</span>
                        </button>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default SingOut;