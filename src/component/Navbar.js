import { NavLink, Outlet } from "react-router-dom";
import '../App.css';
import { useAuth } from "./Auth";
export const Navbar=()=>{
const auth=useAuth()
return(
    <nav>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about' >About</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        {!auth.user?<p>Authenticated</p>:<>Nope you are not a valid user</>}
        <Outlet/>
    </nav>
)
}