import { useNavigate } from "react-router-dom"
import { useState } from "react"
import useStoreUser from "../lib/StoreUserData"
import axios from "axios"
const LogInForm = () => {
    const { setUserIdStore: setGlobalUserId } = useStoreUser()
    const navigate = useNavigate()
    const [inputUserId, setInputUserId] = useState<string>("")
    async function handleSubmit(){
        try{ 
            const response = await axios.post("https://api.ktkv.dev/login", {"id": inputUserId})
            const arrayResponse = Object.values(response.data)
            const strResponse = arrayResponse.toString()
            setGlobalUserId({ id: strResponse })
            navigate("./main")
        } catch(error: any) {
            console.error("Ошибка при отправке запроса:", error.message); 
        }   
    }
    return (
        <div className="h-96 flex flex-col items-center justify-center">
            <input 
            type="text" 
            onChange={(e)=>setInputUserId(e.target.value)}
            className="border border-black rounded-lg p-2"
            />
            <button onClick={handleSubmit} className="mt-4 border border-black rounded-lg p-2">Войти</button>
        </div>
    )
}
export default LogInForm