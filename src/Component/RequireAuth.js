import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Fire.init';
import LoadingCom from './Login/LoadingCom';

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user,loading] = useAuthState(auth);
    if(loading){

        return <div className='d-flex justify-content-center align-items-center h-100 w-100'><LoadingCom></LoadingCom></div> 
    }
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;