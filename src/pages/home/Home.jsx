import React, { useEffect, useContext } from 'react'
import { Feed } from '../../components/feed/Feed';
import { Rightbar } from '../../components/rightbar/Rightbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Topbar } from '../../components/topbar/Topbar';
import { PostContextProvider } from '../../context/postInfo/PostContext';
import { profile } from '../../utils/userApiCalls';
import { UserContext } from '../../context/userInfo/UserContext';

export const Home = () => {
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        const res = async () => {
            await profile(dispatch);
        }
        res()
    }, []);

    return (
        <>        
            <Topbar/>
            <div className='flex w-full'>
                <Sidebar/>
                <PostContextProvider>
                    <Feed/>
                </PostContextProvider>
                <Rightbar/>
            </div>
        </>
    )
}