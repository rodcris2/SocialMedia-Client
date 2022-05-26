import { createContext, useReducer } from "react";
import PostReducer from "./PostReducer";

const INITIAL_STATE = {
    posts: [],
    isFetching: false,
    isAddingLoading: false,
    isDeletingLoading: false,
    isUpdateLoading: false,
    error: false,
    addError: null,
    deleteError: null,
    editError: null,
    message: ""
};

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

    return(
        <PostContext.Provider value={{
                posts: state.posts, 
                isFetching: state.isFetching, 
                isAddingLoading: state.isAddingLoading, 
                isDeletingLoading: state.isDeletingLoading, 
                isUpdateLoading: state.isUpdateLoading,
                error: state.error,
                addError: state.addError,
                deleteError: state.deleteError,
                editError: state.editError,
                message: state.message,
                dispatch
            }}
        >
            {children}
        </PostContext.Provider>   
    )
}