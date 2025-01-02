import { useNavigate } from "react-router-dom";
import BlogsCreateUpdateFrom from "../../components/form/createUpdate";
import { createBlogInAdmin } from "../../../../api/apiForBlogs";
// import { useEffect } from "react";
// import { supabase } from "../../../../../supabase";

const BlogsCreateView:React.FC = () =>{


  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     console.log(session)
  //   })},[])
    
    const navigate = useNavigate();

  const handlCreate = async (values: { title: string; description: string; }) => {
    
    try {
      await createBlogInAdmin(values);
      navigate("/admin/blogs");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>

    <h1 className="font-bold mb-5 text-xl">Create User</h1>
    <BlogsCreateUpdateFrom
      initialValues={{ title: "", description: "" }}
      submitCallbackFn={handlCreate}
    />

    </>
  );
};



export default BlogsCreateView