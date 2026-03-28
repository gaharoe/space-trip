import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

export function useAuth(){
    const context = useContext(UserContext)
    if(!context){
        throw new Error("useAuth harus digunakan didalam UseProvier")
    }

    return context
}