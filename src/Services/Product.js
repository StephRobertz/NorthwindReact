import axios from "axios";

const baseUrl="https://localhost:7204/api/Products"


//let token = null

// Tämä on metodi jota kutsutaan aina ennen kuin tehdään muu pyyntö serviceen
// Parametrina annetaan token joka otetaan local storagesta
// const setToken = newToken => {
//     token = `bearer ${newToken}`
// }


const getAll = () => {
    // const config = {
    //     headers: { Authorization: token },
    // }
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addNew = (object) => {
    // const config = {
    //     headers: { Authorization: token },
    // }
    const request = axios.post(baseUrl,object)
    return request.then(response => response.data)
}

 const remove = (id) => {
//     const config = {
//         headers: { Authorization: token },
//     }
const request = axios.delete(baseUrl + "/" + id)
return request.then(response => response.data)
}

const update = (product) => {
//     const config = {
//         headers: { Authorization: token },
//     }
    const request = axios.put(baseUrl + "/" + product.productId, product)
    return request.then(response => response.data)
}

export default {getAll, addNew, remove, update}
// , addNew, remove, update, setToken