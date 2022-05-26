import React, { useState, useContext, useRef, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown, FaHeart, FaGrinSquintTears, FaComments, FaImages } from 'react-icons/fa';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { Link } from "react-router-dom";
import moment from 'moment';

import patrickImg from '../../images/Patrick.png';
import { deletePost, editPost } from '../../utils/postApiCalls';
import { PostContext } from '../../context/postInfo/PostContext';
import { UserContext } from '../../context/userInfo/UserContext';
import TextareaAutosize from 'react-textarea-autosize';

export const Post = ({post}) => {
    const { posts, isDeletingLoading, isUpdateLoading, message, deleteError, editError, dispatch } = useContext(PostContext);
    const { userInfo } = useContext(UserContext);
    const hiddenFileInput = useRef(null);
    const[more, setMore] = useState({id: post._id, condition: false});
    const[del, setDel] = useState(false);
    const[edit, setEdit] = useState(false);
    const[ref, setRef] = useState("");
    const[des, setDes] = useState("");
    const[img, setImg] = useState();

    const postDelete = async (id) => {
        await deletePost(id, dispatch, posts)
    }

    const postEdit = async (id, description, image) => {
        await editPost(id, {description, image}, dispatch, posts)
        setRef("");
    }

    return (
        <div className='w-full rounded-xl mt-8 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]'>

            <div className="relative p-5">

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to={`/profile/${post?.userId}`}>  
                            <img src={patrickImg} alt="postUserProfileImg" className="w-8 h-8 rounded-full object-contain cursor-pointer" />
                        </Link>
                        {/* Change to username or name */}
                        <Link to={`/profile/${post?.userId}`}>  
                            <span className="text-[15px] font-bold mx-2.5 cursor-pointer">{post?.userId}</span>
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <span className="text-sm font-medium mr-5">{moment(post?.createdAt).format("lll")}</span>
                        <MdOutlineMoreHoriz className='w-5 h-5 cursor-pointer' onClick={() => {setMore({id: post._id, condition: !more.condition});}}/>
                    </div>
                    {more.condition &&
                        <div className="absolute right-4 top-11 border-2 border-gray-300 bg-white rounded-2xl flex flex-col z-10">
                            {post?.userId === userInfo?._id ? (
                                <>
                                    <button className="cursor-pointer font-semibold px-3 pb-1 pt-2 hover:bg-gray-300 rounded-t-xl" onClick={() => {setEdit(!edit); setMore(!more); setDes(post?.description); setImg(post?.image);}}>Edit</button>
                                    <button className="cursor-pointer font-semibold px-3 py-1 hover:bg-gray-300" onClick={() => {setDel(!del); setMore(!more);}}>Delete</button>
                                    <button className="cursor-pointer font-semibold px-3 pb-2 pt-1 hover:bg-gray-300 rounded-b-xl">Other</button>
                                </>
                            ) : (
                                    <button className="cursor-pointer font-semibold px-3 pb-2 pt-1 hover:bg-gray-300 rounded-t-xl rounded-b-xl">Other</button>
                            )}
                        </div>
                    }
                    {del &&
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 rounded-xl flex flex-col items-center justify-center font-semibold text-white z-20 select-none">
                            <div className="mb-5">Are you sure you want to delete this post?</div>
                            <div className="flex flex-row gap-5">
                                <button className="cursor-pointer bg-red-700 py-2 px-5 rounded-xl hover:bg-red-600 font-semibold text-white" onClick={() => {setDel(!del); postDelete(post._id); setRef(post._id);}}>Yes</button>
                                <button className="cursor-pointer bg-blue-700 py-2 px-5 rounded-xl hover:bg-blue-600 font-semibold text-white" onClick={() => setDel(!del)}>No</button>
                            </div>
                        </div>
                    }
                    {isDeletingLoading && ref === post._id && 
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col text-lg text-white font-bold items-center justify-center bg-gray-800 bg-opacity-80 rounded-lg select-none z-20">
                            <svg role="status" className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            Deleting...
                        </div>
                    }
                    {isUpdateLoading && ref === post._id && 
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col text-lg text-white font-bold items-center justify-center bg-gray-800 bg-opacity-80 rounded-lg select-none z-20">
                            <svg role="status" className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            Updating...
                        </div>
                    }
                    {deleteError === false && ref === post._id &&
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-green-700 bg-opacity-80 rounded-xl flex flex-col items-center justify-center font-semibold text-white z-20 select-none">
                            <div className="mb-5">{message}</div>
                        </div>
                    }
                    {deleteError && ref === post._id && 
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-700 bg-opacity-80 rounded-xl flex flex-col items-center justify-center font-semibold text-white z-20 select-none">
                            <div className="mb-5">{message}</div>
                        </div>
                    }
                    {editError === false && ref === post._id &&
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-green-700 bg-opacity-80 rounded-xl flex flex-col items-center justify-center font-semibold text-white z-20 select-none">
                            <div className="mb-5">{message}</div>
                        </div>
                    }
                    {editError && ref === post._id && 
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-700 bg-opacity-80 rounded-xl flex flex-col items-center justify-center font-semibold text-white z-20 select-none">
                            <div className="mb-5">{message}</div>
                        </div>
                    }
                </div>

                <div className="mt-5 mb-2">
                    {post?.description && !edit ? (
                    <>
                        <div className="relative">
                            {/* WORKS FOR NOW BUT NEED TO FIX */}
                            <span className="font-medium break-all opacity-0 select-none">{post?.description}</span>
                            <span className="font-medium break-words absolute top-0 bottom-0 left-0 right-0">{post?.description}</span>
                        </div>
                    </>
                    ) : (
                        <TextareaAutosize defaultValue={des} onChange={(e) => setDes(e.target.value)} className="w-full font-medium resize-none scrollbar-none bg-gray-200 p-1 border-2 border-black rounded-xl"/>
                    )}
                    {post?.image &&
                        <img src={post?.image} alt="postImage" className="mt-5 w-full max-h-[500px] object-contain" />
                    }
                </div>

                {!edit ? (
                    <div className="flex items-center justify-between select-none">
                        <div className="flex items-center">
                            <FaThumbsUp color='#0087FF' className='w-6 h-6 m-[5px] cursor-pointer'/>
                            <span className="text-[15px] mr-[10px]">{post?.likes} Likes</span>

                            <FaThumbsDown color='#0087FF' className='w-6 h-6 m-[5px] cursor-pointer'/>
                            <span className="text-[15px] mr-[10px]">{post?.dislikes} Dislikes</span>

                            <FaHeart color='red' className='w-6 h-6 m-[5px] cursor-pointer'/>
                            <span className="text-[15px] mr-[10px]">{post?.loves} Hearts</span>

                            <FaGrinSquintTears color='#FFCD00' className='w-6 h-6 m-[5px] cursor-pointer'/>
                            <span className="text-[15px] mr-[10px]">{post?.funnies} Funny</span>
                        </div>

                        <div className="flex items-center">
                            <FaComments color='#02C9FA' className='w-6 h-6 mr-[5px] cursor-pointer'/>
                            <span className="text-[15px] cursor-default">{post?.comments} Comments</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center cursor-pointer" onClick={() => hiddenFileInput.current.click()}>
                            <FaImages color="tomato" className='text-2xl mr-3'/>
                            <span className="text-[14px] font-medium">Photo or Video</span>
                            <input type="file" ref={hiddenFileInput} className="hidden" onChange={(e) => setImg(e.target.files[0])}/>
                        </div>
                        <div className="flex items-center justify-end">
                            <button className="flex items-center p-2 bg-green-600 rounded-xl hover:bg-green-500 mr-3 font-medium text-white" onClick={() => {postEdit(post._id, des, img); setEdit(!edit); setRef(post._id);}}>Save</button>  
                            <button className="flex items-center p-2 bg-red-600 rounded-xl hover:bg-red-500 font-medium text-white" onClick={() => setEdit(!edit)}>Cancel</button>  
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}