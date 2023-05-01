import { useState, createContext, useContext } from "react";
const authorContext=createContext()

export const AuthProvider=({children})=>{
    const [user, setUser]=useState(null)

    const login=(user)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)
    }
return <authorContext.Provider value={{user,login,logout}}>
    {children}
    
    </authorContext.Provider>
}

export const useAuth=()=>{
    return useContext(authorContext)
}