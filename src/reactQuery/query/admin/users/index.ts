import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  getSingleUserInAdmin,
  getUsersList,
  User,
} from "../../../../pages/api/apiForUsers";
import { useUsersQueryKeys } from "./hooks/useUsersQueryKeys";

export const useGetUsersList = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], Error, T>, "queryKey">;
} = {}): UseQueryResult<T, Error> => {
  const { LIST } = useUsersQueryKeys();
  return useQuery<User[], Error, T>({
    queryKey: [LIST],
    queryFn: getUsersList,
    ...queryOptions,
  });
};

export const useGetSingleUser = <T>(
  {
    queryOptions,
  }: {
    queryOptions?: Omit<UseQueryOptions<User, Error, T>, "queryKey">;
  } = {},
  id: string | undefined,
): UseQueryResult<T, Error> => {
  const { SINGLE } = useUsersQueryKeys();
  return useQuery<User, Error, T>({
    queryKey: [SINGLE, id],
    queryFn: () => {
      if (!id) {
        throw new Error("User ID is undefined");
      }
      return getSingleUserInAdmin(id);
    },
    ...queryOptions,
  });
};
