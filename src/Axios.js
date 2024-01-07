import axios from 'axios'


const API = axios.create({baseURL:'http://localhost:3000/'})



export const joinInterview = ()=>{
     
    let res = API.post('/auth/enterInterview',{email:"123",roomID:"123"})
    return res;
}