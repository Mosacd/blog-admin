import { supabase } from "../../supabase";

export const getBlogsList = async () => {
  const { data, error } = await supabase.from("blogs").select("*"); // Replace "*" with specific columns if needed

  if (error) {
    console.error("Error fetching blogs list:", error.message);
    throw new Error(error.message); // Handle or propagate the error
  }

  return data as Blog[];
};

export const getSingleBlogInAdmin = async (id: string) => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*") // Specify the fields to retrieve
    .eq("id", Number(id)) // Match the `id` column
    .single(); // Expect a single record

  if (error) {
    console.error("Error fetching blogs list:", error.message);
    throw new Error(error.message); // Handle or propagate the error
  }

  return data;
};

// export const updateBlogInAdmin = (
//   id: string,
//   payload: { title: string; description: string },
// ) => {
//   return supabase.from("blogs").update(payload).eq("id", Number(id));
// };

export const updateBlogInAdmin = async ({
  id,
  values,
}: {
  id: string;
  values: { title: string; description: string };
}): Promise<void> => {
  const { error } = await supabase
    .from("blogs")
    .update(values)
    .eq("id", Number(id));
  if (error) {
    throw error;
  }
};

export const createBlogInAdmin = async (values: {
  title: string;
  description: string;
}): Promise<void> => {
  try {
    const { error } = await supabase.from("blogs").insert({
      title: values.title,
      description: values.description,
    });

    if (error) {
      console.error("Supabase Error:", error.message);
      throw new Error(error.message);
    }
  } catch (err) {
    console.error("Error occurred:", err);
    throw err;
  }
};

export type Blog = {
  created_at: string;
  description: string | null;
  id: number;
  image_url: string | null;
  title: string | null;
  user_id: string | null;
};
