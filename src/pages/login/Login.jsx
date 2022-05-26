import React, { useState, useContext } from 'react';
import { Loader } from './Loader';
import { login } from '../../utils/userApiCalls';
import { AuthContext } from '../../context/AuthContext';
import { PublicTopbar } from '../../components/publicTopbar/PublicTopbar';

export const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const loginCall = (e) => {     
        e.preventDefault();
        login({ email, password }, dispatch);
    }

    return (
        <div className="w-screen h-screen bg-[#f0f2f5] flex flex-col items-center">
            <PublicTopbar/>
            <div className="w-[70%] h-[calc(100vh-50px)] flex items-center justify-center gap-3">
                <div className="flex-1 flex-col">
                    <h3 className="text-5xl font-extrabold text-[#1775ee] mb-2.5">Social Media</h3>
                    <span className="text-[24px]">
                        Connect with friends and the world around you on Social Media.
                    </span>
                </div>
                <div className="flex-1 flex-col">
                    <div className="p-5 bg-white rounded-xl flex flex-col gap-6 border-4 border-gray-500">
                        <input placeholder='Email' type="text" className="h-12 rounded-xl border border-gray-600 text-lg pl-5 focus:outline-none" onChange={(e) => setEmail(e.target.value)}/>
                        <input placeholder='Password' type="password" className="h-12 rounded-xl border border-gray-600 text-lg pl-5 focus:outline-none" onChange={(e) => setPassword(e.target.value)}/>
                        <button className={`h-12 rounded-xl border-none bg-[#1775ee] hover:bg-blue-500 text-white text-[20px] font-medium ${isFetching ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={(e) => loginCall(e)}>{isFetching ? <Loader/> : "Sign In"}</button>
                        {error && 
                            <div className="text-red-500 text-lg font-semibold">{error}</div>
                        }
                        <a href='/forgotpassword' className="text-right text-[#1775ee] cursor-pointer">Forgot Password</a>
                    </div>
                    <div className='h-[80px] flex justify-center bg-white mt-5 items-center rounded-xl border-4 border-gray-500'>
                        <span className="text-[16px] mr-3">Don't have an account?</span>
                        <a href='/register' className="text-[#1775ee] font-semibold cursor-pointer">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}