import { useNavigate } from "react-router-dom";
import UsersCreateUpdateFrom from "../../components/form/create-update"
import { createUserInAdmin } from "../../../../api/apiForUsers";

const UsersCreateView = () =>{

    const navigate = useNavigate();

  const handlCreate = async (values: { email: string; phone: string }) => {
    try {
      await createUserInAdmin(values);
      navigate("/admin/users");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>

    <h1 className="font-bold mb-5 text-xl">Create User</h1>
    <UsersCreateUpdateFrom
      initialValues={{ email: "", phone: "" }}
      submitCallbackFn={handlCreate}
    />

    </>
  );
};



export default UsersCreateView