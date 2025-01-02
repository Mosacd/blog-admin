import { Outlet } from "react-router-dom";

const AdminAuthLayout = () =>{
    return (
        <>
        <div className="bg-blue-100 w-svw h-svh">
         <Outlet />
         </div>
         </> 
     );
}

export default AdminAuthLayout;