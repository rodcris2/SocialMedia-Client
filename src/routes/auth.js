import { axiosInstance } from "../config";
import { createContext } from "react";

export const config = {
    headers: {
        "x-api-key": "ZEA7P1Twzv8Ttcz5FIz2F34VYB7hybDY9GCpNTpy"
    }
}

export const register = async (user) => {
    return axiosInstance.post("/register", user, config);
}

export const verify = async (user) => {
    return axiosInstance.post("/verify", user, config);
}

export const userlogin = async (user) => {
    return axiosInstance.post("/login", user, config);
}

const ADMIN_STATE = {
    _45744549826894_admin_kjgshwf: JSON.parse(localStorage.getItem("_45744549826894_admin_kjgshwf")), 
};

export const AdminContext = createContext(ADMIN_STATE);