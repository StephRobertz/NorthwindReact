import axios from "axios";

const baseUrl="https://localhost:7204/api/users"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const addNew = (object) => {
    const request = axios.post(baseUrl,object)
    return request.then(response => response.data)
}

const Login = (credentials) => {
    const request = axios.post("https://localhost:7204/api/Authentication",credentials)
    return request.then(response => response)
}

const remove = (id) => {
    const request = axios.delete(baseUrl + "/" + id)
    return request.then(response => response.data)
}

const update = (user) => {
    const request = axios.put(baseUrl + "/" + user.userId, user)
    return request.then(response => response.data)
}

export default {getAll, addNew, Login, remove, update}