import LogInForm from "../component/LogInForm"
import { useNavigate } from "react-router-dom"
import useStoreUserData from "../lib/StoreUserData"
import axios from "axios"
const LogIn=()=>{
   const {us}
   const navigate=useNavigate()

    return(
       <div>
          <div className="log-in">
          <h1>Вход в аккаунт</h1>
          <LogInForm />
          </div>
       </div>   
    )
}
export default LogIn