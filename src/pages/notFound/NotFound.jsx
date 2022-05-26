import React from 'react';
import { PublicTopbar } from '../../components/publicTopbar/PublicTopbar';

import eggImg from '../../images/egg.png';

export const NotFound = () => {
    return (
        <div className="bg-yellow-500 w-screen h-screen bg-cover">
            <PublicTopbar/>
            <div className="h-[calc(100vh-50px)] flex flex-col justify-center">
                <div className="w-full flex flex-col items-center">
                    <span className="text-blue-600 font-extrabold text-[200px] select-none flex items-center">
                        4<img src={eggImg} alt="egg" className="h-56 w-56" />4
                    </span>
                    <span className="text-blue-600 font-extrabold text-[100px] select-none">Error</span>
                    <span className="text-white font-semibold text-[50px] select-none">Page Not Found.</span>
                    <a href="/" className="bg-blue-500 px-20 py-5 mt-10 text-white text-xl font-bold rounded-lg select-none hover:bg-blue-600">Social Media Home</a>
                </div>
            </div>
        </div>
    )
}