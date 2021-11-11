import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefa-backend-malafaia.herokuapp.com'
})
 
export default api;