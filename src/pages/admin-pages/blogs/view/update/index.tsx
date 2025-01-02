import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleBlogInAdmin, updateBlogInAdmin } from "../../../../api/apiForBlogs";
import BlogsCreateUpdateFrom from "../../components/form/createUpdate";
import BlogsCreateUpdateFromSkeleton from "../../components/form/createUpdate/skeleton";

const BlogsUpdateView = () =>{
    const {id} = useParams();
    
console.log(id);

    const { data: blog, isLoading } = useQuery(
        {
            queryKey: ["singleBlog",id],
            queryFn: () => getSingleBlogInAdmin(id as string),

        }
      );

    const navigate = useNavigate();

const handleUpdate = (values: {title:string; description:string}) => {
    console.log(values)
    updateBlogInAdmin(id as string, values);
    navigate("/admin/blogs");
}

    return( 
    <>
    <h1 className="font-bold mb-5 text-xl">Update Blog</h1>
    {
isLoading ? <BlogsCreateUpdateFromSkeleton/>:
<BlogsCreateUpdateFrom initialValues={blog} submitCallbackFn={handleUpdate}/>
}</>
    )
}

export default BlogsUpdateView;