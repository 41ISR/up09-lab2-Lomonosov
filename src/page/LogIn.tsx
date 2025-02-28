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
   }
   return (
      <div>
      <div className="absolute w-96 h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center bg-white border border-black rounded-lg">
         <h1 className="text-2xl font-bold mt-4">Вход в аккаунт</h1>
         <div className="h-96 flex flex-col items-center justify-center">
           <input 
           type="text" 
           onChange={(e)=>setUserId(e.target.value)}
           className="border border-black rounded-lg p-2"
           />
           <button onClick={handleLogin} className="mt-4 border border-black rounded-lg p-2">Войти</button>
       </div>
      </div>
     </div>

   );
}

export default LogIn