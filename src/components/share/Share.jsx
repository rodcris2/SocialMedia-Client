import React, { useState, useContext } from 'react';
import { FaImages, FaHashtag, FaMapMarkerAlt, FaLaughWink } from 'react-icons/fa';
import { createPost } from '../../utils/postApiCalls';
import { PostContext } from '../../context/postInfo/PostContext';
import { UserContext } from '../../context/userInfo/UserContext';
import TextareaAutosize from 'react-textarea-autosize';

import patrickImg from '../../images/Patrick.png';

export const Share = () => {
    const { posts, isAddingLoading, message, addError, dispatch } = useContext(PostContext);
    const { userInfo } = useContext(UserContext);
    const[description, setDescription] = useState("");
    const[image, setImage] = useState("");

    const post = async (e) => {
        e.preventDefault();
        await createPost({description, image}, dispatch, posts)
    }

    return (
        <div className='relative w-full h-full rounded-lg shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]'>
            {isAddingLoading &&
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col text-lg text-white font-bold items-center justify-center bg-gray-800 bg-opacity-70 rounded-lg select-none">
                    <svg role="status" className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    Posting...
                </div>
            }

            <div className="p-2">
                <div className="flex flex-col p-3">
                    <div className="flex flex-row">
                        <img src={patrickImg} alt="sharedPostImg" className="w-12 h-12 rounded-full object-contain mr-2 ml-2" />
                        <span className="text-[18px] font-bold">{userInfo?.email}</span>
                    </div>
                    <TextareaAutosize placeholder="What's on your mind?" className="focus:outline-none font-medium mx-3 mt-5 px-1 resize-none" onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <hr className='m-3'/>

                <div className="flex items-center justify-between">
                    <div className="flex ml-5">
                        <div className="flex items-center mr-5 cursor-pointer">
                            <FaImages color="tomato" className='text-xl mr-3'/>
                            <span className="text-[14px] font-medium">Photo or Video</span>
                        </div>
                        <div className="flex items-center mr-5 cursor-pointer">
                            <FaHashtag color="blue" className='text-xl mr-3'/>
                            <span className="text-[14px] font-medium">Tag</span>
                        </div>
                        <div className="flex items-center mr-5 cursor-pointer">
                            <FaMapMarkerAlt color="green" className='text-xl mr-3'/>
                            <span className="text-[14px] font-medium">Location</span>
                        </div>
                        <div className="flex items-center mr-5 cursor-pointer">
                            <FaLaughWink color="gold" className='text-xl mr-3'/>
                            <span className="text-[14px] font-medium">Feelings</span>
                        </div>
                    </div>
                    <button className="border-none p-2 rounded-md bg-green-600 font-medium m-5 cursor-pointer text-white hover:bg-green-500" onClick={(e) => post(e)}>Share</button>
                </div>
                {addError &&
                    <div className="text-md font-semibold text-red-600 ml-3">
                        {message}
                    </div>
                }
                {addError === false &&
                    <div className="text-md font-semibold text-green-600 ml-3">
                        {message}
                    </div>
                }
            </div>

        </div>
    )
}
