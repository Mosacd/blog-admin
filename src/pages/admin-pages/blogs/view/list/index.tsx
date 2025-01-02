import { getBlogsList } from "../../../../api/apiForBlogs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useQuery } from "@tanstack/react-query";
import BlogsList from "../../components/list";


dayjs.extend(relativeTime);

const formatDate = (created_at: string) => {
    const creationDate = dayjs(created_at);
    const formattedDate = creationDate.format("YYYY-MM-DD HH:mm");
    return formattedDate;
}


const BlogsListView = () =>{

    const { data: blogs = [], isLoading, isError, error } = useQuery({
        queryKey: ["blogsList"],
        queryFn: getBlogsList,
        select: (data) => {
          return data.map((blog) => ({
            ...blog,
            created_at: formatDate(blog.created_at),
          }));
        },
      });
        
      console.log(blogs);
        if(isError){
            console.log(error.message);
        }

    return (
     <BlogsList isLoading={isLoading} blogs={blogs}/>
    );
}

export default BlogsListView;