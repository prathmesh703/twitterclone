
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getmyprofile } from "../redux/slice";
const useGetprofile=async (id)=>{
    const dispatch=useDispatch();
    useEffect( ()=>{
        const fetchmyProfile=async()=>{
            
            try {
                
                const res= await axios.post("http://localhost:3002/api/v1/user/getprofile",{
                    id:id
                })
                
                dispatch(getmyprofile(res.data.user))
            } catch (error) {
                console.log(error)
            }
        }
        fetchmyProfile();
        
    },[])
        
    

    
}
export default useGetprofile