import React, { ReactNode, createContext, useContext, useState } from "react";
import { validateValues } from "../utils/validation";
import { auth, database } from "../utils/firebase";
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc,collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "../utils/toastOptions";
import { useNavigate } from "react-router-dom";



interface Value {
    currentUser?: User,
    signup: ({fname, lname}:{fname:string, lname:string}, email:string, password:string)=>any,
    login: (email:string, password:string)=>Promise<UserCredential>, 
}

const AuthContext = React.createContext<Value | null>(null)


export const useAuth = ()=>{
    const context =  useContext(AuthContext)

    if(context === null) throw new Error("useAuth must be used within an AuthProvider")

    return context
}

type User = {
    firstName: string,
    lastName: string,
    email:string,
}



export const AuthProvider = ({children}: {children: ReactNode}) => {

    const [currentUser, setCurrentUser] = useState<User>()
    const navigate = useNavigate()
    const signup =  ({fname, lname}:{fname:string, lname:string}, email:string, password:string) =>  {
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {

            const user = userCredential.user;   
            
            if(!user) return false

            updateProfile(user, {
                displayName: `${fname} ${lname}`,
                photoURL: "default"
            })  

            toast.success("Account created successfully", toastOptions)
            navigate("/auth/login")

        }).catch((error) => {
            toast.error("Something went wrong", toastOptions)
            return false
        })
        
    }

    const login = (email:string, password:string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const value = {
        currentUser,
        signup,
        login
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    )

}