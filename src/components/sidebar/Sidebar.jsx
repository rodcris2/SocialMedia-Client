import React from 'react';
import { FaRss, FaComments, FaVideo, FaUsers, FaBookmark, FaQuestion, FaBriefcase, FaCalendarDay, FaGraduationCap } from 'react-icons/fa'

import spongeBob from '../../images/SpongebobSendPants.png';

export const Sidebar = () => {
    return (
        <div className='flex-[3] h-[calc(100vh-50px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 sticky top-[50px]'>

            <div className="p-5">
                <ul className="p-0 m-0 list-none">
                    <li className="flex items-center mb-5">
                        <FaRss className='mr-4'/>
                        <span className="">Feed</span>
                    </li>
                    <li className="flex items-center mb-5">
                        <FaComments className='mr-4'/>
                        <span className="">Chats</span>
                    </li>
                    <li className="flex items-center mb-5">
                        <FaVideo className='mr-4'/>
                        <span className="">Videos</span>
                    </li>
                    <li className="flex items-center mb-5">
                        <FaUsers className='mr-4'/>
                        <span className="">Groups</span>
                    </li>
                    <li className="flex items-center mb-5">
                        <FaBookmark className='mr-4'/>
                        <span className="">Bookmarks</span>
                    </li>
                    <li className="flex items-center mb-5">
                        <FaQuestion className='mr-4'/>
                        <span className="">Questions</span>
                    </li>
                    <li className="flex items-center mb-5">
                        <FaBriefcase className='mr-4'/>
                        <span className="">Jobs</span>
                    </li>
                    <li className="flex items-center mb-5">
                        <FaCalendarDay className='mr-4'/>
                        <span className="">Events</span>
                    </li>
                    <li className="flex items-center mb-5">
                        <FaGraduationCap className='mr-4'/>
                        <span className="">Courses</span>
                    </li>
                </ul>
                <button className='w-40 border-none p-3 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-500'>Show More</button>
                <hr className='my-5'/>

                <ul className="p-0 m-0 list-none">
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={spongeBob} alt="friendProfileImg" className="w-8 h-8 rounded-full object-contain mr-3" />
                        <span className="">SpongeBob SquarePants</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}