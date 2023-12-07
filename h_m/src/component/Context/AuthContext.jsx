import { createContext, useEffect, useReducer } from "react";
import api from "../Helper/AxiosConfig";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, member: action.payload };
        case "LOGOUT":
            return { ...state, member: null }



        default:
            return state;
    }
}

const ParentAuthContext = ({ children }) => {
    const initialState = { member: null }
    const [state, dispatch] = useReducer(reducer, initialState)
    const Login = (data) => {
        dispatch({ type: "LOGIN", payload: data })
        toast.success("logged in successfully")
    }
    const Logout = () => {
        localStorage.removeItem("my_token")
        dispatch({ type: "LOGOUT", })
        toast.success("Logged out successfully")
    }
    useEffect(() => {
        async function getCurrentMember() {
            try {
                const response = await api.post("/auth/getcurrentmember", { token }) 
                if(response.data.success){
                    Login(response.data.member)
                }
            } catch (error) {
                toast.error(error.response.data.error)
            }
           
        }
        const token = JSON.parse(localStorage.getItem("my_token"))
        if (token) {
            getCurrentMember()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )


}
export default ParentAuthContext;