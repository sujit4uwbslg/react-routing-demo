import { useNavigate } from "react-router-dom"
export const Profile = () => {
    const navigate=useNavigate()
  return(
    <div>
        <h1>This is profile component</h1>
        <button onClick={()=>navigate('login')}>Login</button>
        </div>
   )

 }