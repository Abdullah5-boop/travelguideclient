import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Fire.init';
import GoogleSignIn from '../SignOut/GoogleSignIn';
import './login.css'
import LoadingCom from './LoadingCom';

const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate()
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const HandleEmail = (e) => {
        setemail(e.target.value)

    }
    const HandlePASS = (e) => {
        setpassword(e.target.value)
    }
    if(loading)
    {
        return <LoadingCom></LoadingCom>
    }
    if (user) {

        navigate(from, { replace: true })

    }

    return (
        <div className=''>
            <div className='mt-5 formate'>
                <div className='loginformat'>
                    <h2 className='text-primary text-center mb-4'>LOG-IN</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-start'>Email address</Form.Label>
                            <Form.Control onBlur={HandleEmail} type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={HandlePASS} type="password" placeholder="Password" />
                        </Form.Group>

                        {
                            error ? `${error}` : " "
                        }
                        <br />
                        <Link to='/sinup'>Sign-In</Link> <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            {/* <GoogleSignIn></GoogleSignIn> */}
        </div>
    );
};

export default Login;