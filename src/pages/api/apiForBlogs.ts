import { supabase } from "../../supabase";

export const getBlogsList = async () => {
  const { data, error } = await supabase.from("blogs").select("*"); // Replace "*" with specific columns if needed

  if (error) {
    console.error("Error fetching blogs list:", error.message);
    throw new Error(error.message); // Handle or propagate the error
  }

  return data as Blog[];
};

export const getSingleBlogInAdmin = async (id:string) => {

    const { data, error } = await supabase
    .from("blogs")
    .select("title,description") // Specify the fields to retrieve
    .eq("id", Number(id)) // Match the `id` column
    .single(); // Expect a single record


    if (error) {
        console.error("Error fetching blogs list:", error.message);
        throw new Error(error.message); // Handle or propagate the error
      }
   
    return data as { title: string; description: string;};
};

export const updateBlogInAdmin = (
    id:string, 
    payload: {title: string; description:string},
 ) => {
    return  supabase
    .from("blogs")
    .update(payload)
    .eq("id", Number(id));
}

export const createBlogInAdmin = async (values: {title: string; description:string;}) => {

    try {
        // const userId = uuidv4();
        
        const { data, error } = await supabase.from("blogs").insert({
            title: values.title,
            description: values.description,
           
        });
    
        if (error) {
            console.error("Supabase Error:", error.message);
            throw new Error(error.message);
        }
        return data;
    } catch (err) {
        console.error("Error occurred:", err);
    }
    

};

export type Blog = {
  created_at: string;
  description: string;
  id: number;
  image_url: string;
  title: string;
  user_id: string;
};
