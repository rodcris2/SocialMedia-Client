import React, { useEffect, useContext } from 'react';
import { Post } from '../post/Post';
import { Share } from '../share/Share';

import { PostContext } from '../../context/postInfo/PostContext';
import { allPosts } from '../../utils/postApiCalls';
import { LoadingPost } from '../loadingPost/LoadingPost';

export const Feed = () => {
    const { posts, isFetching, dispatch } = useContext(PostContext);

    useEffect(() => {
        const res = async () => {
            await allPosts(dispatch);
        }
        res()
    }, [])

    return (
        <div className='flex-[5.5]'>
            <div className="p-5">
                <Share/>
                {!isFetching ? (
                    posts.map((post) => (
                        <Post key={post._id} post={post}/>
                    ))
                ) : (
                    <LoadingPost />
                )}
            </div>
        </div>
    )
}