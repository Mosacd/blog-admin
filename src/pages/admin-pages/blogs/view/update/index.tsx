import { useParams } from "react-router-dom";
import BlogsCreateUpdateFrom from "../../components/form/createUpdate";
import BlogsCreateUpdateFromSkeleton from "../../components/form/createUpdate/skeleton";
import { useGetSingleBlog } from "../../../../../reactQuery/query/admin/blogs";
import { mapSingleBLogForAdminUpdate } from "../../../../util/utils";
import { useUpdateBlog } from "../../../../../reactQuery/mutation/admin/blogs";

const BlogsUpdateView = () => {
  const { id } = useParams();

  console.log(id);

  const { data: blog, isLoading } = useGetSingleBlog(
    {
      queryOptions: {
        select: mapSingleBLogForAdminUpdate,
        enabled: !!id,
      },
    },
    id,
  );

  const { mutate: updateBlogInAdmin, isPending } = useUpdateBlog();

  const handleSubmit = (values: { title: string; description: string }) => {
    if (!id) {
      console.error("ID is undefined");
      return;
    }
    updateBlogInAdmin({ id, values });
  };

  return (
    <>
      <h1 className="font-bold mb-5 text-xl">Update Blog</h1>
      {isLoading ? (
        <BlogsCreateUpdateFromSkeleton />
      ) : (
        <BlogsCreateUpdateFrom
          initialValues={blog}
          submitCallbackFn={handleSubmit}
        />
      )}
      {isPending && <p>Updating blog...</p>}
    </>
  );
};

export default BlogsUpdateView;
