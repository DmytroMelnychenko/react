import axios from 'axios';

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users',
    headers:{}
});

const getUsers = () => axiosInstance.get('');
const getUserPosts = (id) => axiosInstance.get(`/${id}/posts`)


export {getUsers, getUserPosts};