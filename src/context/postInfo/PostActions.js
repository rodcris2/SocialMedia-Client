export const PostsStart = () => ({
    type: "POSTS_START"
});

export const PostsSuccess = (posts) => ({
    type: "POSTS_SUCCESS",
    payload: posts
});

export const PostsFailure = (error) => ({
    type: "POSTS_FAILURE",
    payload: error
});

// ADD POSTS
export const AddPostsStart = () => ({
    type: "ADD_POST_START"
});

export const AddPostsSuccess = (posts, msg) => ({
    type: "ADD_POST_SUCCESS",
    payload: posts,
    msg: msg
});

export const AddPostsFailure = (msg) => ({
    type: "ADD_POST_FAILURE",
    msg: msg
});

// DELETE POSTS
export const DeletePostsStart = () => ({
    type: "DELETE_POST_START"
});

export const DeletePostsSuccess = (posts, msg) => ({
    type: "DELETE_POST_SUCCESS",
    payload: posts,
    msg: msg
});

export const DeletePostsFailure = (msg, loading) => ({
    type: "DELETE_POST_FAILURE",
    msg: msg,
    loading: loading
});

// EDIT POSTS
export const EditPostsStart = () => ({
    type: "EDIT_POST_START"
});

export const EditPostsSuccess = (posts, msg) => ({
    type: "EDIT_POST_SUCCESS",
    payload: posts,
    msg: msg
});

export const EditPostsFailure = (msg) => ({
    type: "EDIT_POST_FAILURE",
    msg: msg
});