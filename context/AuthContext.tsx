'use client';

import { IUser } from "@/types/ITypes";
import { createContext, useContext, useEffect, useState } from "react";

interface IAuthContext{
    user: IUser | null
    token: string | null
    login: (data: { user: IUser; token: string }) => void;
    logout: ()=> void
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider = ({children}:{children: React.ReactNode})=>{
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(()=>{
        const savedSesion = localStorage.getItem('userSesion')
        if(savedSesion){
            const {user, token } = JSON.parse(savedSesion) 
            setUser(user)
            setToken(token)
        }
    },[])

    const login = (data: {user: IUser, token: string})=>{
        setUser(data.user)
        setToken(data.token)
        localStorage.setItem('userSesion', JSON.stringify(data))
    }

    const logout = ()=>{
        setUser(null)
        setToken(null)
        localStorage.removeItem('userSesion')
    }
    return(
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context) throw new Error('useAuth debe usarse dentro de un AuthProvider')
    return context
}