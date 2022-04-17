import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Fire.init';

const Header1 = () => {
    const [user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary p-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">IamTravelGuide</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='text-dark ms-4 me-4' to='/Home'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className='text-dark ms-4 me-4' to='/card'>Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-dark ms-4 me-4' to='/blog'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-dark ms-4 me-4' to='/About'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-dark ms-4 me-4' to='/sinup'>Sign-up</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user ? 
                                    <Link onClick={handleSignOut} className='text-dark ms-4 me-4' to='/Login'>SignOut</Link>

                                    :
                                    <Link className='text-dark ms-4 me-4' to='/Login'>Log in</Link>


                                }
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header1;