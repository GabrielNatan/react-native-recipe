import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({nome:""})
    
    function login(email,password){
        console.log("Email: ",email)
        console.log("Password: ",password)
        console.log("IGUAL: ",email === "email@email.com" && password === "123")
        if(email === "email@email.com" && password == "123"){
            setUser({nome:"Gabriel"})
            return 'Ok'
        }else{
            return 'erro'
        }
    }
    return(
        <AuthContext.Provider value={{user,login}}>
            {children}
        </AuthContext.Provider>
    )
}