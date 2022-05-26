const PostReducer = (state, action) => {
    switch(action.type){
        case "POSTS_START":
            return {
                posts: [],
                isFetching: true,
                error: false
            };
        case "POSTS_SUCCESS":
            return {
                posts: action.payload,
                isFetching: false,
                error: false
            }
        case "POSTS_FAILURE":
            return {
                posts: [],
                isFetching: false,
                error: action.payload
            }
        case "ADD_POST_START":
            return {
                posts: state.posts,
                isAddingLoading: true,
                addError: null,
                message: ""
            }
        case "ADD_POST_SUCCESS":
            return {
                posts: action.payload,
                isAddingLoading: false,
                addError: false,
                message: action.msg
            }
        case "ADD_POST_FAILURE":
            return {
                posts: state.posts,
                isAddingLoading: false,
                addError: true,
                message: action.msg
            }
        case "DELETE_POST_START":
            return {
                posts: state.posts,
                isDeletingLoading: true,
                deleteError: null,
                message: ""
            }
        case "DELETE_POST_SUCCESS":
            return {
                posts: action.payload,
                isDeletingLoading: false,
                deleteError: false,
                message: action.msg
            }
        case "DELETE_POST_FAILURE":
            return {
                posts: state.posts,
                isDeletingLoading: false,
                deleteError: true,
                message: action.msg
            }
        case "EDIT_POST_START":
            return {
                posts: state.posts,
                isUpdateLoading: true,
                editError: null,
                message: ""
            }
        case "EDIT_POST_SUCCESS":
            const updatedPost = action.payload;

            const updatedPosts = state.posts.map((post) => {
                if(post._id === updatedPost._id){
                    return updatedPost;
                }
                return post;
            });
            return {
                ...state,
                posts: updatedPosts,
                isUpdateLoading: false,
                editError: false,
                message: action.msg
            }
        case "EDIT_POST_FAILURE":
            return {
                posts: state.posts,
                isUpdateLoading: false,
                editError: true,
                message: action.msg
            }
        default:
            return state;
    }
};

export default PostReducer;