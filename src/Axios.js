import axios from 'axios'

const APILink =  '/api/v1';

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

export const saveProblem =(questionObject)=>{
    let res = API.post('/problem/add', questionObject)
    console.log("Save Problem");
    
    console.log(questionObject)
    return res;
}