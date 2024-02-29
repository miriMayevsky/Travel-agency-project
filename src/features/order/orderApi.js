import axios from "axios";

let baseUrl="http://localhost:4000/order";
export const getOrder=()=>{
    return axios.get(`${baseUrl}`);
}
export const getOrderByParameter=(id)=>{
    return axios.get(`${baseUrl}/${id}`);
}
export const DeleteOrderByParameter=(id)=>{
    return axios.delete(`${baseUrl}/${id}`);
}
export const PostOrder=(Order)=>{
    return axios.post(`${baseUrl}`,Order);
}
export const PostOrderByParameter=(Order)=>{
    return axios.put(`${baseUrl}/${Order.id}`,Order);
}