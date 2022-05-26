import React, { useState, useEffect, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken, setAccessToken } from './utils/accessToken';
import { AuthContext } from './context/AuthContext';
import { userLoggedIn } from './utils/userApiCalls';
import { Loading } from './pages/loading/Loading';

const ProtectedRoute = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://social-media1-api.herokuapp.com/user/refresh_token", {
            method: 'POST',
            credentials: "include"
        }).then(async x => {
            const accessToken  = await x.json();    
            setAccessToken(accessToken.access_token);
            await userLoggedIn(getAccessToken(), dispatch);
            setTimeout(function(){
                setLoading(false);
            },1750)
        });
    }, []);

    if(loading) {
        return <Loading/>
    }  

    return user ? <Outlet/> : <Navigate to="/login"/>
}


export default ProtectedRoute;