import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://ul0a7kfzof.execute-api.us-east-1.amazonaws.com/beta",
});