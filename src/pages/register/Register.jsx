import React, { useState } from 'react';
import axios from 'axios';

import PublicTopbar from '../../components/publicTopbar/PublicTopbar';

export const Register = () => {
  const[message, setMessage] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const register = () => {      
    axios.post("https://social-media1-api.herokuapp.com/user/register", {email, password}).then((response) => {
      setMessage(response.data.msg);
    }).catch((error) => {
      setMessage(error.response.data.msg)
    })
  }

  return (
    <div className="w-screen h-screen bg-[#f0f2f5] flex flex-col items-center">
      <PublicTopbar/>
      <div className="w-[70%] h-[calc(100vh-50px)] flex items-center justify-center">
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
              <button className="h-12 rounded-xl border-none bg-[#1775ee] text-white text-[20px] font-medium cursor-pointer" onClick={register}>Sign Up</button>
              {message && 
                <div className="text-red-500 text-lg font-semibold">{message}</div>
              }
            </div>
        </div>
      </div>
    </div>
  )
}