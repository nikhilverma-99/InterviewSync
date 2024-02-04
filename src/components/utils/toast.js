import { toast } from 'react-toastify';

export const success =  (message)=>{
    toast.success(message, {
        position: "top-center",
         progress: undefined,
       theme: "colored", 
       style:{
         fontSize:'1.4rem'
       }
       }); 
}
  
export const error =  (message)=>{
    toast.error(message, {
        position: "top-center",
         progress: undefined,
       theme: "colored", 
       style:{
         fontSize:'1.4rem'
       }
       });
}