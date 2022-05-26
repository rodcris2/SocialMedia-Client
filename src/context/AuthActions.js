export const LoginStart = () => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
});

export const NoUserFound = (error) => ({
    type: "NO_USER_FOUND",
    payload: error
});

export const UserFound = (user) => ({
    type: "USER_FOUND",
    payload: user
});