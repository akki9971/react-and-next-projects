import axios from 'axios'

export const FetchProducts= async ()=>{

    const API_BASE_URL = 'http://fakestoreapi.com/products'
    const fetchingProcess = await axios.get(API_BASE_URL).catch((error)=>{
        alert(error.message)
    })
    return fetchingProcess

}