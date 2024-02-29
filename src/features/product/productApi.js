import axios from "axios";

let baseUrl="http://localhost:4000/product";
export const getProduct=()=>{
    return axios.get(`${baseUrl}`);
}
export const getProductByParameter=(id)=>{
    return axios.get(`${baseUrl}/${id}`);
}
export const DeleteProductByParameter=(id)=>{
    return axios.delete(`${baseUrl}/${id}`);
}
export const PostProduct=(product)=>{
    return axios.post(`${baseUrl}`,product);
}
export const PostProductByParameter=(product)=>{
    return axios.put(`${baseUrl}/${product.id}`,product);
}
