import { Outlet, useNavigate} from "react-router-dom"
import { useEffect } from "react"
import useStoreUser from '../lib/UserStore';
const Auth = () => {
    const navigate=useNavigate()
    const { user } = useStoreUser(); 
    useEffect(()=>{
          console.log(user)
          if(!user){
            navigate('/')
          }
    },[user,navigate])
    return (
        <Outlet />
    )
}
export default Auth