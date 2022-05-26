import React, { useState } from 'react';
import axios from 'axios';

import { PublicTopbar } from '../../components/publicTopbar/PublicTopbar';

export const ForgotPassword = () => {
  const[error, setError] = useState("");
  const[email, setEmail] = useState("");

  const login = () => {      
      axios.post("https://social-media1-api.herokuapp.com/user/forgot", {email}).then((response) => {
          setError("");
          console.log(response);
      }).catch((error) => {
          console.log(error.response);
          setError(error.response.data.msg)
      })
  }

  return (
    <div className="h-screen w-screen bg-gray-50 flex flex-col item-center">
      <PublicTopbar/>
      <div className="h-[calc(100vh-50px)] w-full flex items-center">
        <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300">
          <div className="space-y-6">
            <div>
                <label className="text-sm font-bold text-gray-600 block">Email</label>
                <input name="email" type="email" className="w-full p-2 border border-gray-300 rounded mt-1" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <button type="button" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-lg font-medium" onClick={login}>Submit</button>
            {error && 
                <div className=''>{error}</div>
              }
          </div>
        </div>
      </div>
    </div>
  )
}