let access_token = "";

export const setAccessToken = (token) => {
    access_token = token;
}

export const getAccessToken = () => {
    return access_token;
}