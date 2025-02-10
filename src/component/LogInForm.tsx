import { useNavigate } from "react-router-dom"
import { useState } from "react"
import useStoreUserData from "../lib/StoreUserData"
import axios from "axios"
const LogInForm = () => {
    const {setuserIdStore} = useStoreUserData()
    const navigate = useNavigate()
    const [userId,setUserId]=useState<string>("") 
    async function handleSubmit(){
        try{ 
            const response= await axios.post("https://api.ktkv.dev/login",{"id":userId})
            //setuserIdStore(response);
            const arrayResponse=Object.values(response.data)
            const strResponce=arrayResponse.toString()
            setuserIdStore({id:strResponce})
            navigate("./main")
        }catch(error: any){
            console.error("Ошибка при отправке запроса:", error.message); 
        }   
    }
    return (
        <div className="log-form">
            <input 
            type="text" 
            onChange={(e)=>setUserId(e.target.value)}
            />
            <button onClick={handleSubmit}>Войти</button>
        </div>
    )
}
export default LogInForm