import * as api from '../../Axios'

export const currentUser = async()=>{
  try {
    const cUser = await api.currentUser();

    console.log(cUser)
    return cUser ;
  } catch (error) {
    
  }
}