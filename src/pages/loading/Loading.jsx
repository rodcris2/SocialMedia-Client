import React from 'react';

export const Loading = () => {
    return (
        <>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="text-7xl font-bold flex items-center">
                <span>Social</span>
                <span className="bg-blue-500 p-2 text-7xl text-white font-semibold">Media</span>
            </div>
            <div className="max-w-md h-6 bg-black sm:w-1/2 rounded-xl mt-5 flex items-center">
                <div className="bg-blue-500 h-3 rounded-full animate-progress ml-2"></div>
            </div>
        </div>
        </>
    )
}