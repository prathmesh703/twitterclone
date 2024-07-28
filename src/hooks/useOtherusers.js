
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getOtheruser } from "../redux/slice";
const useOtherusers=async (id)=>{
    console.log("ehool")
    const dispatch=useDispatch();
    useEffect( ()=>{
        const fetchOtherProfile=async()=>{
            
            try {
                
                const res= await axios.get(`http://localhost:3002/api/v1/user/othersprofile/${id}`,{
                     withCredentials: true 
                })
                console.log(res);
                dispatch(getOtheruser(res.data.user))
            } catch (error) {
                console.log(error)
            }
        }
        fetchOtherProfile();
        
    },[])
        
    

    
}
export default useOtherusers