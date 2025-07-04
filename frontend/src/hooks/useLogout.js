import { useAuthContext } from "./useAuth"

export const useLogout=()=>{
    const {dispatch}=useAuthContext()
    const logout=()=>{
        //remove user from localstorage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type:'LOGOUT'})
    }
    return {logout}
}