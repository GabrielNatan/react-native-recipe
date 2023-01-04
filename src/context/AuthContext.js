import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({nome:""})
    const [newUser,setNewUser] = useState({})
    
    function login(email,password){

        if(email === newUser?.email && password == newUser?.password){
            setUser({nome:newUser?.name})
            return 'Ok'
        }else{
            return 'erro'
        }
    }

    function createAccount(name,email,password){
        setNewUser({name,email,password})
    }
    return(
        <AuthContext.Provider value={{user,login,createAccount}}>
            {children}
        </AuthContext.Provider>
    )
}