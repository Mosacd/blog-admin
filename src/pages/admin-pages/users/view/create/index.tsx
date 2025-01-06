import UsersCreateUpdateFrom from "../../components/form/create-update";
import { useCreateUser } from "../../../../../reactQuery/mutation/admin/users";

const UsersCreateView = () => {
  const { mutate: createUser, isPending } = useCreateUser();

  const handleSubmit = (values: { email: string; phone: string }) => {
    createUser(values);
  };

  return (
    <>
      <h1 className="font-bold mb-5 text-xl">Create User</h1>
      <UsersCreateUpdateFrom
        initialValues={{ email: "", phone: "" }}
        submitCallbackFn={handleSubmit}
      />
      {isPending && <p>Creating user...</p>}
    </>
  );
};

export default UsersCreateView;
