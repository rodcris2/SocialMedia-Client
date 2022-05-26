import axios from "axios";
import { getAccessToken, setAccessToken } from "./accessToken";

export const login = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("http://localhost:5000/user/login", userCredential, {
            withCredentials: true
        });
        if(res && res.data) {
            setAccessToken(res.data.access_token);
        }
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.access_token });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data.msg });
    }
}

export const userLoggedIn = async (token, dispatch) => {
    try {
        await axios.get("http://localhost:5000/user/checkUser", {
            headers: {
                Authorization: token
            },
            withCredentials: true
        })
        dispatch({ type: "USER_FOUND", payload: token });
    } catch (err) {
        dispatch({ type: "NO_USER_FOUND", payload: err.response.data.msg })
    }
}

export const profile = async (dispatch) => {
    dispatch({ type: "USER_START" });
    try {
        const res = await axios.get("http://localhost:5000/user/info", {
            headers: {
                Authorization: getAccessToken()
            },
            withCredentials: true
        });
        dispatch({ type: "USER_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "USER_FAILURE", payload: err.response.data.msg })

    }
}