import axios from 'axios'

const APILink =  'https://codecollab-k6wq.onrender.com/';

const API = axios.create({baseURL:APILink}) 

export const joinInterview = ({email})=>{

    let res = API.post('/auth/enterInterview',{email:email,roomID:"123"})
    return res;
}
export const saveInterviewID = ({roomID , peerID})=>{
    let res = API.post('/peer/interviewer',{roomID:roomID,peerID:peerID})
    return res;
}

export const saveCandidateID = ({roomID,peerID})=>{
    let res = API.post('/peer/candidate',{roomID:roomID,peerID:peerID})
    return res;
}

export const getCandidatePeerId = ({roomID})=>{
    let res = API.post('/peer/getcandidatepeerid',{roomID:roomID})
    return res;
}