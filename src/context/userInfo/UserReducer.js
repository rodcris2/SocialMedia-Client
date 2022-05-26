const UserReducer = (state, action) => {
    switch(action.type){
        case "USER_START":
            return {
                userInfo: null,
                isFetching: true,
                error: false
            };
        case "USER_SUCCESS":
            return {
                userInfo: action.payload,
                isFetching: false,
                error: false
            }
        case "USER_FAILURE":
            return {
                userInfo: null,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default UserReducer;