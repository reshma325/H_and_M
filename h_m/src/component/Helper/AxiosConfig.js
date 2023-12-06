
import axios from 'axios'
const BackEndURL="http://localhost:3000/api/v1";
if(process.env.MODE =="PROD"){
    BackEndURL="https://awdiz_4.com/api/v1"
    }
    const api= axios.create({baseURL:"http://localhost:8000/api/v1"})
    export default api;