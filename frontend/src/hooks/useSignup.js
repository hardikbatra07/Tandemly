import { useState } from "react";
import {useAuthContext} from './useAuth'
import { useNavigate } from "react-router-dom";

export const useSignup=()=>{
 const [error,setError]=useState(null)
 const [isLoading,setIsLoading]=useState(false)
 const{dispatch}=useAuthContext()
 const navigate=useNavigate()

 const signup=async(email,password)=>{
    setError(null)
    setIsLoading(true)

    const response=await fetch('/api/user/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
    })
    const json=await response.json()
    if(!response.ok){
        setIsLoading(false)
        setError(json.error)
    }
    if(response.ok){
        localStorage.setItem('user',JSON.stringify(json))
        localStorage.setItem('userToken', response.token);
        dispatch({type:'LOGIN',payload:json})
        setIsLoading(false)
        navigate('/profilesetup');
    }
 }
 return {signup,isLoading,error}
}
