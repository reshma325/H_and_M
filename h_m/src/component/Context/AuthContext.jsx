import { createContext, useReducer } from "react";

export const AuthContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, member: action.payload }
        case "LOGOUT":
            return { ...state, member: null }


        default:
            return state;
    }
}

const ParentAuthContext = ({ Children }) => {
    const initialState = { member: null }
    const [state, dispatch] = useReducer(reducer, initialState);

    const Login = (data) => {
        dispatch({ type: "LOGIN", payload: data })

    }

    const Logout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <AuthContext.Provider value={{ state, Login, Logout }}>
            {Children}
        </AuthContext.Provider>
    )

}
export default ParentAuthContext;