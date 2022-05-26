export const UserInfoStart = () => ({
    type: "USER_START"
});

export const UserInfoSuccess = (userInfo) => ({
    type: "USER_SUCCESS",
    payload: userInfo
});

export const UserInfoFailure = (error) => ({
    type: "USER_FAILURE",
    payload: error
});