"use client"

import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

type UserContext = {
    user: {id: string, name: string, username: string}|null,
    loading: boolean,
    isLogged: boolean,
    login: (data: {username: string, password: string}) => Promise<boolean>,
    logout: () => Promise<boolean>
}

export const UserContext = createContext<UserContext|null>(null)

export function UserPovider({children}:{children: React.ReactNode}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    useEffect(() => {
        async function loadUser(){
            const request = await fetch("/api/auth/user")
            const result = await request.json()
            if(result.success){
                setUser(result.user)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
                // router.push("/login")
            }
        }

        loadUser()
    }, [])
    
    async function login(data: {username: string, password: string}){
        const request = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await request.json()
        return result.success ? true : false
    }

    async function logout(){
        const request = await fetch("/api/auth/logout")
        const result = await request.json()
        return result.success ? true : false
    }

    return (
        <UserContext.Provider
            value={{
                user,
                loading,
                isLogged: !!user,
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}