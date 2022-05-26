const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            }
        case "NO_USER_FOUND":
            return {
                user: null,
                isFetching: false,
                error: false
            }
        case "USER_FOUND":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        default:
            return state;
    }
};

export default AuthReducer;