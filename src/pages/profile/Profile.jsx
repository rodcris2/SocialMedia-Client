import React, { useContext } from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Topbar } from '../../components/topbar/Topbar';
import { UserProfileInfo } from '../../components/userProfileInfo/UserProfileInfo';
import { UserContext } from '../../context/userInfo/UserContext';

export const Profile = () => {
    const { userInfo } = useContext(UserContext);
    return (
        <>
            <Topbar/>
            <div className="flex w-full">
                <Sidebar/>
                <UserProfileInfo/>
            </div>
        </>
    )
}