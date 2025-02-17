import { Outlet, useNavigate} from "react-router-dom"
import { useEffect } from "react"
import useStoreUser from '../lib/StoreUserData';
const Auth = () => {
    const navigate=useNavigate()
    const { userIdStore } = useStoreUser(); 
    useEffect(()=>{
          if(!userIdStore){
            navigate('/login')
          }
    })
    return (
        <Outlet />
    )
}
export default Auth