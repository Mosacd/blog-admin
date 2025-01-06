import BlogsList from "../../components/list";
import { useGetBlogsList } from "../../../../../reactQuery/query/admin/blogs";
import { mapBlogsListForAdmin } from "../../../../util/utils";

const BlogsListView = () => {
  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useGetBlogsList({ queryOptions: { select: mapBlogsListForAdmin } });

  console.log(blogs);
  if (isError) {
    console.log(error.message);
  }

  return <BlogsList isLoading={isLoading} blogs={blogs || []} />;
};

export default BlogsListView;
