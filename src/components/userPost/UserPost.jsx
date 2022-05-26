import React from 'react';
import { FaThumbsUp, FaThumbsDown, FaHeart, FaGrinSquintTears, FaComments } from 'react-icons/fa';

import defaultUser from '../../images/defaultUserImage.jpeg';

export const UserPost = () => {
    return (
        <div className="relative p-5">
            <div className="w-full rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]">
                <div className="relative p-5">
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={defaultUser} alt="postUserProfileImg" className="w-8 h-8 rounded-full object-contain" />
                            {/* Change to username or name */}
                            <span className="text-[15px] font-bold mx-2.5">CleverTie34</span>
                            {/* <span className="text-[15px] font-bold mx-2.5">{post?.userId}</span> */}
                        </div>
    
                        <div className="flex items-center">
                            {/* <span className="text-sm font-medium mr-5">{moment(post?.createdAt).format("lll")}</span> */}
                            <span className="text-sm font-medium mr-5">November 12</span>
                            {/* <MdOutlineMoreHoriz className='w-5 h-5 cursor-pointer' onClick={() => {setMore({id: post._id, condition: !more.condition});}}/> */}
                        </div>
                    </div>

                    <div className="mt-5">
                        {/* WORKS FOR NOW BUT NEED TO FIX */}
                        <span className="font-medium break-words select-none">This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description</span>
                        {/* <span className="font-medium break-words absolute top-0 bottom-0 left-0 right-0">{post?.description}</span> */}
                    </div>

                    <div className="flex items-center justify-between select-none mt-5">
                        <div className="flex items-center justify-center">
                            <div className="flex flex-row cursor-pointer">
                                <FaThumbsUp color='#0087FF' className='w-6 h-6 mr-2'/>
                                <span className="text-[16px] font-medium mr-3">0</span>
                            </div>

                            <div className="flex flex-row cursor-pointer">
                                <FaThumbsDown color='#0087FF' className='w-6 h-6 mx-2'/>
                                <span className="text-[16px] font-medium mr-3">0</span>
                            </div>

                            <div className="flex flex-row cursor-pointer">
                                <FaHeart color='red' className='w-6 h-6 mx-2'/>
                                <span className="text-[16px] font-medium mr-3">0</span>
                            </div>

                            <div className="flex flex-row cursor-pointer">
                                <FaGrinSquintTears color='#FFCD00' className='w-6 h-6 mx-2'/>
                                <span className="text-[16px] font-medium mr-3">0</span>
                            </div>
                        </div>

                        <div className="flex items-center mr-5 cursor-pointer">
                            <FaComments color='#02C9FA' className='w-6 h-6 mr-2'/>
                            <span className="text-[16px] font-medium">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}