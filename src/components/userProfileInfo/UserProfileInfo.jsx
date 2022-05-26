import React, { useState } from 'react';
import { BsFillFilePostFill } from 'react-icons/bs';
import { FaThumbsUp, FaThumbsDown, FaHeart, FaGrinSquintTears, FaComments, FaEdit } from 'react-icons/fa';
import { MdEdit, MdOutlineClose } from 'react-icons/md';

import defaultUser from '../../images/defaultUserImage.jpeg';
import { UserPost } from '../userPost/UserPost';

export const UserProfileInfo = () => {
    const[translate, setTranslate] = useState(0);
    const[showProfile, setShowProfile] = useState(false);
    const[showPosts, setShowPosts] = useState(true);
    const[likedPosts, setLikedPosts] = useState(false);
    const[postCount, setPostCount] = useState(1);

    return (
        <>
        {showProfile && 
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-opacity-30 bg-black z-[100] flex items-center justify-center">
                <div className=" w-[700px] bg-white flex flex-col rounded-t-xl rounded-b-xl">
                    <div className="flex flex-row px-6 pt-6 pb-3 items-center justify-between">
                        <span className="text-[24px] font-semibold">Edit profile</span>
                        <MdOutlineClose className='w-8 h-8 cursor-pointer' onClick={() => setShowProfile(!showProfile)}/>
                    </div>
                    <hr className='border-gray-300'/>
                    <div className="pt-2 px-6">
                        <div className="flex flex-row py-4">
                            <span className="w-[120px] text-[16px] font-semibold mr-6">Profile photo</span>
                            <div className="relative">
                                <div className="ml-[128px] w-[96px] h-[96px]">
                                    <span className="w-full h-full rounded-full cursor-pointer inline-block overflow-hidden">
                                        <img src={defaultUser} alt="userProfilePicture" className="" />
                                    </span>
                                </div>
                                <div className="absolute bottom-0 ml-[192px] bg-white rounded-full border border-gray-400 p-2 cursor-pointer">
                                    <span className='bg-black'>
                                        <MdEdit />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr className='border-gray-300'/>
                        <div className="flex flex-row py-4">
                            <span className="w-[120px] text-[16px] font-semibold mr-6">Username</span>
                            <div className="w-[360px]">
                                <input type="text" className="w-full bg-gray-200 rounded-lg px-4 py-2" defaultValue="user39483948394" placeholder='Username'/>
                                <p className="mt-[16px] text-xs text-gray-500">www.socialmedia.com/profile/3493483975465</p>
                                <p className="mt-[8px] text-xs text-gray-500">Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.</p>
                            </div>
                        </div>
                        <hr className='border-gray-300'/>
                        <div className="flex flex-row py-4">
                            <span className="w-[120px] text-[16px] font-semibold mr-6">Name</span>
                            <div className="w-[360px]">
                                <input type="text" className="w-full bg-gray-200 rounded-lg px-4 py-2" defaultValue="Cristain Rodriguez" placeholder='Name'/>
                            </div>
                        </div>
                        <hr className='border-gray-300'/>
                        <div className="flex flex-row py-4">
                            <span className="w-[120px] text-[16px] font-semibold mr-6">Bio</span>
                            <div className="w-[360px]">
                                <textarea type="text" className="w-full h-[120px] bg-gray-200 rounded-lg px-4 py-2 resize-none box-border" placeholder='Bio'></textarea>
                            </div>
                        </div>
                    </div>
                    <hr className='border-gray-300'/>
                    <div className="flex flex-row p-5 items-center justify-end rounded-b-xl">
                        <div className="flex gap-3">
                            <button className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100" onClick={() => setShowProfile(!showProfile)}>Cancel</button>
                            <button className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        <div className="w-[75%] p-8">
            <div className="flex flex-col mb-8">
                <div className="flex">
                    <div className="h-[112px] w-[112px]">
                        <img src={defaultUser} alt="defaultUser" className="h-[112px]" />
                    </div>

                    <div className="flex flex-col ml-5 items-left justify-center">
                        <div className="flex flex-col mb-3 cursor-default">
                            <span className="text-3xl font-bold">user3948953048304</span>
                            <span className="text-xl font-semibold">Cristian Rodriguez</span>
                        </div>
                        <div className="">
                            <button className="flex flex-row items-center px-3 border border-gray-400 rounded text-lg font-semibold hover:bg-gray-100" onClick={() => {setShowProfile(!showProfile);}}>
                                <FaEdit className='mr-1'/>
                                Edit profile
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-5 cursor-default">
                    <div className="flex flex-row">
                        <div className="mr-4">
                            <strong className="mr-2">0</strong>
                            <span className="">Following</span>
                        </div>
                        <div className="mr-4">
                            <strong className="mr-2">0</strong>
                            <span className="">Followers</span>
                        </div>
                        <div className="mr-4">
                            <strong className="mr-2">0</strong>
                            <span className="">Likes</span>
                        </div>
                    </div>

                    <span className="mt-3">No bio yet.</span>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="relative flex flex-row w-[460px] h-[44px] cursor-pointer after:bg-gray-500 after:bottom-0 after:w-full after:absolute after:h-[1px] mb-3">
                    <p className="flex-1 flex items-center justify-center" onClick={() => {setTranslate(0); setShowPosts(true); setLikedPosts(false);}}>
                        <span className="text-xl font-semibold">Posts</span>
                    </p>
                    <p className="flex-1 flex items-center justify-center" onClick={() => {setTranslate(230); setShowPosts(false); setLikedPosts(true);}}>
                        <span className="text-xl font-semibold">Liked</span>
                    </p>
                    <div className={`absolute w-1/2 h-[2px] bg-black bottom-0 ${translate === 0 ? 'translate-x-0' : 'translate-x-[230px]'} z-10 transition`}></div>
                </div>

                {showPosts && postCount === 0 ? (
                    <>
                    <div className="flex flex-col items-center justify-center mx-auto min-h-[500px]">
                        <div className="">
                            <BsFillFilePostFill className='w-20 h-20 text-blue-500'/>
                        </div>

                        <div className="flex flex-col items-center mt-5">
                            <span className="text-2xl font-bold">No posts made yet</span>
                            <span className="mt-2">Your posts will appear here</span>
                        </div>
                    </div>
                    </>
                ) : showPosts && (
                    <>
                    <div className="w-full min-h-[500px]">
                        <UserPost/>
                        <UserPost/>
                        <UserPost/>
                        <UserPost/>
                    </div>
                    </>
                )}
                {likedPosts && 
                    <div className="flex flex-col items-center justify-center mx-auto min-h-[500px]">
                        <div className="">
                            <FaThumbsUp className='w-20 h-20 text-blue-500'/>
                        </div>

                        <div className="flex flex-col items-center mt-5">
                            <span className="text-2xl font-bold">No liked posts made yet</span>
                            <span className="mt-2">Your liked posts will appear here</span>
                        </div>
                    </div>
                }

            </div>
        </div>
        </>
    )
}