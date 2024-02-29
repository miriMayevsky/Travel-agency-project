import axios from "axios";

let baseUrl="http://localhost:4000/user";
export const getUser=()=>{
    return axios.get(`${baseUrl}`);
}
export const getUserByParameter=(id)=>{
    return axios.get(`${baseUrl}/${id}`);
}
export const DeleteUserByParameter=(id)=>{
    return axios.delete(`${baseUrl}/${id}`);
}
export const PostUser=(User)=>{
    return axios.post(`${baseUrl}`,User);
}
//מועד לפורענות
// זה מקביל לפונקציית לוגין של המורה
//כניסה
//המורה אמרה שכניסה עושים בפוסט למה?
export const PostUserByParameter=(User)=>{
    return axios.post(`${baseUrl}/login`,User);
}