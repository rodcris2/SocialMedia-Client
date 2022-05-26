import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PublicTopbar from '../../components/publicTopbar/PublicTopbar';

export const ActivationEmail = () => {
    const {activation_token} = useParams();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const activationEmail = async () => {
        await axios.post("https://social-media1-api.herokuapp.com/user/activation", {activation_token}).then((response) => {
            setSuccess('Account has been activated! You may now login in.');
        }).catch((error) => {
            if(error.response.data.msg === 'jwt expired') {
                setError("Activation link has expired. Please sign up again.");
            } else if(error.response.data.msg === 'invalid signature' || error.response.data.msg === 'jwt malformed') {
                setError("Activation link is invalid.");
            } else {
                setError("Account has already been activated.");
            }
        })
    }

    // useEffect(() => {
    //     activationEmail()
    // }, [activation_token])

    return (
        <div className="h-screen w-screen bg-gray-50 flex flex-col item-center">
            <PublicTopbar />
            <div className="h-[calc(100vh-50px)] w-full flex items-center">
                <div className="max-w-md w-full mx-auto bg-white p-8 border-4 border-gray-400">
                    {error && 
                        <div className="text-lg font-semibold text-[#FF0000] mb-5">
                            {error}
                        </div>
                    }
                    {success && 
                        <div className="text-lg font-semibold text-[#13D600] mb-5">
                            {success}
                        </div>
                    }
                    <button className="w-full p-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600" onClick={activationEmail}>Activate</button>
                </div>
            </div>
        </div>
    )
}