import { createContext } from "react";

let UserContext = createContext();

export default UserContext;

export const UserProvider = ({children})=>{
return <UserContext.Provider value={{username:"vishwa"}}>
    {children}
</UserContext.Provider>

} 