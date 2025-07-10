import axios from "axios";

export const baseUrl = " https://staging.darveys.com/index.php/mobileappbuilder/apicall/";

// axios instance 
export const axiosInstance  = axios.create({
    baseURL: baseUrl,
    headers : {
        'Content-Type': 'application/json'
    }
})