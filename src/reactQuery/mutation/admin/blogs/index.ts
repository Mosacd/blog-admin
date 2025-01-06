import { useNavigate } from "react-router-dom";
import {
  createBlogInAdmin,
  updateBlogInAdmin,
} from "../../../../pages/api/apiForBlogs";
import { useMutation } from "@tanstack/react-query";

export const useUpdateBlog = () => {
  const navigate = useNavigate();

  return useMutation<
    void,
    Error,
    { id: string; values: { title: string; description: string } }
  >({
    mutationFn: updateBlogInAdmin,

    onSuccess: () => {
      navigate("/admin/blogs");
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};

export const useCreateBlog = () => {
  const navigate = useNavigate();

  return useMutation<void, Error, { title: string; description: string }>({
    mutationFn: createBlogInAdmin,

    onSuccess: () => {
      navigate("/admin/blogs");
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};
