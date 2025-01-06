import BlogsCreateUpdateFrom from "../../components/form/createUpdate";
import { useCreateBlog } from "../../../../../reactQuery/mutation/admin/blogs";

const BlogsCreateView: React.FC = () => {
  const { mutate: createBlogInAdmin, isPending } = useCreateBlog();

  const handleSubmit = (values: { title: string; description: string }) => {
    createBlogInAdmin(values);
  };

  return (
    <>
      <h1 className="font-bold mb-5 text-xl">Create User</h1>
      <BlogsCreateUpdateFrom
        initialValues={{ title: "", description: "" }}
        submitCallbackFn={handleSubmit}
      />
      {isPending && <p>Creating blog...</p>}
    </>
  );
};

export default BlogsCreateView;
