import UsersCreateUpdateFrom from "../../components/form/create-update"
import { getSingleUserInAdmin, updateUserInAdmin } from "../../../../api/apiForUsers";
import { useNavigate, useParams } from "react-router-dom";
import UsersCreateUpdateFromSkeleton from "../../components/form/create-update/skeleton";
import { useQuery } from "@tanstack/react-query";

const UsersUpdateView = () =>{
    const {id} = useParams();
    
console.log(id);

    const { data: user, isLoading } = useQuery(
        {
            queryKey: ["singleUser",id],
            queryFn: () => getSingleUserInAdmin(id as string),
            select: (data) => ({
                  email: data?.email || "",
                  phone: data?.phone || "",
                }),
        }
      );

    const navigate = useNavigate();

const handleUpdate = (values: {email:string; phone:string}) => {
    console.log(values)
    updateUserInAdmin(id as string, values);
    navigate("/admin/users");
}

    return( 
    <>
    <h1 className="font-bold mb-5 text-xl">Update User</h1>
    {
isLoading ? <UsersCreateUpdateFromSkeleton/>:
<UsersCreateUpdateFrom initialValues={user} submitCallbackFn={handleUpdate}/>
}</>
    )
}

export default UsersUpdateView