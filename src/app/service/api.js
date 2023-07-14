import axios from "axios";
const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://localhost:8080/api"

export async function getRequest(URL){
    const response = axiosClient.get(URL)
    .then(response => response)
    .catch(err=>console.log(err))

    return response.data
}

export async function postRequest(URl, payload){
    const response = axiosClient.get(URL, payload)
    .then(response => response)
    .catch(err=>console.log(err))

    return response
}

export async function putRequest(URl, payload){
    const response = axiosClient.get(URL, payload)
    .then(response => response)
    .catch(err=>console.log(err))

    return response
}

export async function deleteRequest(URL){
    const response = axiosClient.get(URL)
    .then(response => response)
    .catch(err=>console.log(err))

    return response
}