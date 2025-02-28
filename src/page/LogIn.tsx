import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "../lib/UserStore"
const LogIn = () => {
   const { setUser } = useUserStore();
   const [userId, setUserId] = useState<string>("");
   const navigate = useNavigate();
 
   const handleLogin = async () => {
     try {
       const response = await axios.post("http://localhost:3000/login", { id: userId });
       setUser(response.data);
       navigate("/");
     } catch (error) {
       console.error("Login error:", error);
     }
   return (
       <div className="h-96 flex flex-col items-center justify-center">
           <input 
           type="text" 
           onChange={(e)=>setUserId(e.target.value)}
           className="border border-black rounded-lg p-2"
           />
           <button onClick={handleLogin} className="mt-4 border border-black rounded-lg p-2">Войти</button>
       </div>
   )
}
}
export default LogIn