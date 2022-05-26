import React from 'react';

import spongeBob from '../../images/SpongebobSendPants.png';
import birthdayImg from '../../images/birthday.png';
import MCDad from '../../images/mcad.jpg';

export const Rightbar = () => {
    return (
        <div className='flex-[3.5]'>
            <div className="pt-5 pr-5 ">
                <div className="flex">
                    <img src={birthdayImg} alt="birthdayImg" className="w-12 h-12 mr-2" />
                    <span className="text-[15px]">
                        <b>Cristian Rodriguez</b> and <b>4 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src={MCDad} alt="Advertisment" className="w-full rounded-xl my-5" />
                <h4 className='font-bold mb-2.5'>Online Friends</h4>
                <ul className="m-0 p-0 list-none">
                    <li className="flex items-center mb-4">
                        <div className="mr-[10px] relative">
                            <img src={spongeBob} alt="friendProfileImg" className="w-10 h-10 rounded-full object-cover" />
                            <span className="w-4 h-4 rounded-full bg-lime-500 absolute -top-2 right-0 border-2 border-white"></span>
                        </div>
                        <span className="font-medium">John Carter</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <div className="mr-[10px] relative">
                            <img src={spongeBob} alt="friendProfileImg" className="w-10 h-10 rounded-full object-cover" />
                            <span className="w-4 h-4 rounded-full bg-lime-500 absolute -top-2 right-0 border-2 border-white"></span>
                        </div>
                        <span className="font-medium">John Carter</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <div className="mr-[10px] relative">
                            <img src={spongeBob} alt="friendProfileImg" className="w-10 h-10 rounded-full object-cover" />
                            <span className="w-4 h-4 rounded-full bg-lime-500 absolute -top-2 right-0 border-2 border-white"></span>
                        </div>
                        <span className="font-medium">John Carter</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <div className="mr-[10px] relative">
                            <img src={spongeBob} alt="friendProfileImg" className="w-10 h-10 rounded-full object-cover" />
                            <span className="w-4 h-4 rounded-full bg-lime-500 absolute -top-2 right-0 border-2 border-white"></span>
                        </div>
                        <span className="font-medium">John Carter</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <div className="mr-[10px] relative">
                            <img src={spongeBob} alt="friendProfileImg" className="w-10 h-10 rounded-full object-cover" />
                            <span className="w-4 h-4 rounded-full bg-lime-500 absolute -top-2 right-0 border-2 border-white"></span>
                        </div>
                        <span className="font-medium">John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}