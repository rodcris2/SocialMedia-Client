import React from 'react';
import { useLocation } from 'react-router-dom';

export const PublicTopbar = () => {
    const path = useLocation();
    const pathname = path.pathname;

    return (
        <div className='h-[50px] w-full bg-blue-600 flex items-center justify-between sticky top-0 z-50 px-5'>

            <div>
                <a href='/' className='text-2xl font-bold text-white cursor-pointer'>Social Media</a>
            </div>

            {pathname === '/' ? (
                <div className='w-[140px] flex justify-between text-white'>
                    <a href='/login' className='text-white font-medium cursor-pointer'>Sign in</a>
                    <a href='/register' className='text-white font-medium cursor-pointer'>Sign up</a>
                </div>
            ) : (pathname === '/register') ? (
                <div>
                    <a href='/login' className='text-white font-medium cursor-pointer'>Sign in</a>
                </div>
            ) : (
                <></>
            )}

        </div>
    )
}