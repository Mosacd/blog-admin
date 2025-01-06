import UsersList from "../../components/list";
import { mapUsersListForAdmin } from "../../../../util/utils";
import { useGetUsersList } from "../../../../../reactQuery/query/admin/users";

const UsersListView = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useGetUsersList({ queryOptions: { select: mapUsersListForAdmin } });

  if (isError) {
    console.log(error.message);
  }

  return <UsersList users={users || []} isLoading={isLoading} />;
};

export default UsersListView;
