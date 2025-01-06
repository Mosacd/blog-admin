import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  Blog,
  getBlogsList,
  getSingleBlogInAdmin,
} from "../../../../pages/api/apiForBlogs";
import { useBlogsQueryKeys } from "./hooks/useBlogsQueryKeys";

export const useGetBlogsList = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Blog[], Error, T>, "queryKey">;
} = {}): UseQueryResult<T, Error> => {
  const { LIST } = useBlogsQueryKeys();
  return useQuery<Blog[], Error, T>({
    queryKey: [LIST],
    queryFn: getBlogsList,
    ...queryOptions,
  });
};

export const useGetSingleBlog = <T>(
  {
    queryOptions,
  }: {
    queryOptions?: Omit<UseQueryOptions<Blog, Error, T>, "queryKey">;
  } = {},
  id: string | undefined,
): UseQueryResult<T, Error> => {
  const { SINGLE } = useBlogsQueryKeys();
  return useQuery<Blog, Error, T>({
    queryKey: [SINGLE, id],
    queryFn: () => {
      if (!id) {
        throw new Error("User ID is undefined");
      }
      return getSingleBlogInAdmin(id);
    },
    ...queryOptions,
  });
};
