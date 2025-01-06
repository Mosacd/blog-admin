import UsersCreateUpdateFrom from "../../components/form/create-update";
import { useParams } from "react-router-dom";
import UsersCreateUpdateFromSkeleton from "../../components/form/create-update/skeleton";
import { useGetSingleUser } from "../../../../../reactQuery/query/admin/users";
import { mapSingleUserForAdminUpdate } from "../../../../util/utils";
import { useUpdateUser } from "../../../../../reactQuery/mutation/admin/users";

const UsersUpdateView = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const { data: user, isLoading } = useGetSingleUser(
    {
      queryOptions: {
        select: mapSingleUserForAdminUpdate,
        enabled: !!id,
      },
    },
    id,
  );

  const { mutate: updateUser, isPending } = useUpdateUser();

  const handleSubmit = (values: { email: string; phone: string }) => {
    if (!id) {
      console.error("ID is undefined");
      return;
    }
    updateUser({ id, values });
  };

  return (
    <>
      <h1 className="font-bold mb-5 text-xl">Update User</h1>
      {isLoading ? (
        <UsersCreateUpdateFromSkeleton />
      ) : (
        <UsersCreateUpdateFrom
          initialValues={user}
          submitCallbackFn={handleSubmit}
        />
      )}
      {isPending && <p>Updating user...</p>}
    </>
  );
};

export default UsersUpdateView;
