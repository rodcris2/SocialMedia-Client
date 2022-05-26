import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { FaSearch, FaUserAlt, FaCommentDots, FaBell } from "react-icons/fa";
import { MdOutlineArrowDropDown, MdOutlineArrowForwardIos, MdLogout } from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { UserContext } from "../../context/userInfo/UserContext"
import patrickImg from '../../images/Patrick.png'

export const Topbar = () => {
    const { userInfo } = useContext(UserContext);
    const[dropDownMenu, setDropDownMenu] = useState(false);

    return (
        <div className='h-[50px] w-full bg-blue-600 flex items-center sticky top-0 z-50'>

            <div className='flex-[3]'>
                <Link to="/home">
                    <span className='text-2xl ml-5 font-bold text-white cursor-pointer'>Social Media</span>
                </Link>
            </div>

            <div className='flex-[5]'>
                <div className='w-full h-8 bg-white rounded-3xl flex items-center'>
                    <FaSearch className='text-lg ml-2'/>
                    <input placeholder='Search for friend, post or video' className='border-none w-4/5 ml-2 focus:outline-none'></input>
                </div>
            </div>

            <div className='flex-[3.2] flex items-center justify-between text-white mx-5'>
                <div className='flex'>
                    <div className='flex mr-4 cursor-pointer relative'>
                        <FaUserAlt/>
                        <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute -top-[10px] -right-[10px] flex items-center justify-center text-sm'>1</span>
                    </div>
                    <div className='flex mr-4 cursor-pointer relative'>
                        <FaCommentDots/>
                        <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute -top-[10px] -right-[10px] flex items-center justify-center text-sm'>1</span>
                    </div>
                    <div className='flex mr-4 cursor-pointer relative'>
                        <FaBell/>
                        <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute -top-[10px] -right-[10px] flex items-center justify-center text-sm'>1</span>
                    </div>
                </div>
                <div className="relative">
                    <MdOutlineArrowDropDown className='w-10 h-10 cursor-pointer' onClick={() => setDropDownMenu(!dropDownMenu)}/>
                    {dropDownMenu &&
                        <div className="absolute bg-white border-2 border-gray-500 rounded-2xl right-0 flex flex-col">
                            <Link to={`/profile/${userInfo?._id}`}>
                                <div className="flex items-center m-2 p-3 hover:bg-gray-300 cursor-pointer rounded-2xl">
                                    <div className="h-[72px] w-[72px] flex">
                                        <img src={patrickImg} alt='' className='w-full h-full rounded-full object-contain'/>
                                    </div>
                                    <div className="flex flex-col w-full px-2">
                                        <span className="whitespace-nowrap text-black text-lg font-bold">{userInfo?.email}</span>
                                        <span className="text-black text-lg font-semibold">View Profile</span>
                                    </div>
                                </div>
                            </Link>
                                <hr className='border-black mx-5'/>

                            <Link to="">
                                <div className="flex items-center mx-2 mt-2 p-3 hover:bg-gray-300 cursor-pointer rounded-2xl">
                                    <div className="flex p-3 bg-black rounded-full">
                                        <IoMdSettings className='text-[24px]'/>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full px-2">
                                        <span className="whitespace-nowrap text-black text-lg font-bold">Settings</span>
                                        <MdOutlineArrowForwardIos color='black' className='text-[24px]'/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="">
                                <div className="flex items-center mx-2 mt-2 p-3 hover:bg-gray-300 cursor-pointer rounded-2xl">
                                    <div className="flex p-3 bg-black rounded-full">
                                        <BsDisplay className='text-[24px]'/>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full px-2">
                                        <span className="whitespace-nowrap text-black text-lg font-bold">Display</span>
                                        <MdOutlineArrowForwardIos color='black' className='text-[24px]'/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="">
                                <div className="flex items-center mx-2 mb-2 p-3 hover:bg-gray-300 cursor-pointer rounded-2xl">
                                    <div className="flex p-3 bg-black rounded-full">
                                        <MdLogout className='text-[24px]'/>
                                    </div>
                                    <div className="flex w-full px-2">
                                        <span className="whitespace-nowrap text-black text-lg font-bold">Log Out</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
};