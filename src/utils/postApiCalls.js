import axios from "axios";
import { getAccessToken } from "./accessToken";

function timeout(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const createPost = async (postInfo, dispatch, posts) => {
    dispatch({ type: "ADD_POST_START" });
    try {
        const res = await axios.post("http://localhost:5000/post/create", postInfo, {
            headers: {
                Authorization: getAccessToken()
            },
            withCredentials: true
        });
        await timeout(2000);
        dispatch({ type: "ADD_POST_SUCCESS", payload: posts, msg: res.data.msg });
        await timeout(4000);
        dispatch({ type: "ADD_POST_SUCCESS", payload: [res.data.post, ...posts], msg: "" });
    } catch (error) {
        await timeout(2000);
        dispatch({ type: "ADD_POST_FAILURE" , msg: error.response.data.msg });
        await timeout(4000);
        dispatch({ type: "ADD_POST_START", msg: "" });
    }
}

export const editPost = async (id, postInfo, dispatch, posts) => {
    dispatch({ type: "EDIT_POST_START" });
    try {
        const res = await axios.put("http://localhost:5000/post/edit/" + id , postInfo, {
            headers: {
                Authorization: getAccessToken()
            },
            withCredentials: true
        });
        await timeout(2000);
        dispatch({ type: "EDIT_POST_SUCCESS", payload: posts, msg: res.data.msg });
        await timeout(3000);
        dispatch({ type: "EDIT_POST_SUCCESS", payload: res.data.updatedPost, msg: "" });
    } catch (error) {
        await timeout(2000);
        dispatch({ type: "EDIT_POST_FAILURE" , msg: error.response.data.msg });
        await timeout(3000);
        dispatch({ type: "EDIT_POST_FAILURE" , msg: "" });
    }
}

export const deletePost = async (id, dispatch, posts) => {
    dispatch({ type: "DELETE_POST_START" });
    try {
        const res = await axios.delete("http://localhost:5000/post/delete/" + id , {
            headers: {
                Authorization: getAccessToken()
            },
            withCredentials: true
        });
        await timeout(2000);
        dispatch({ type: "DELETE_POST_SUCCESS", payload: posts, msg: res.data.msg });
        await timeout(3000);
        dispatch({ type: "DELETE_POST_SUCCESS", payload: posts.filter((post) => post._id !== id), msg: "" });
    } catch (error) {
        await timeout(2000);
        dispatch({ type: "DELETE_POST_FAILURE", msg: error.response.data.msg });
        await timeout(3000);
        dispatch({ type: "DELETE_POST_FAILURE", msg: "" });
    }
}

export const allPosts = async (dispatch) => {
    dispatch({ type: "POSTS_START" });
    try {
        const res = await axios.get("http://localhost:5000/post/all.info", {
            headers: {
                Authorization: getAccessToken()
            },
            withCredentials: true
        });
        dispatch({ type: "POSTS_SUCCESS", payload: res.data.reverse() });
    } catch (error) {
        dispatch({ type: "POSTS_FAILURE", payload: error.response.data.msg })
    }
}