import { useAuthContext } from "../../../context/auth/hooks/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuardLogOut: React.FC<PropsWithChildren> = ({children}) =>{
    const { user } = useAuthContext();

    if(!user){
        return <Navigate to="/auth/signin"/>
    }

    return children || <Outlet/>;
}

export default AuthGuardLogOut;