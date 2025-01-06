import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../../supabase/auth";

export const useSignIn = () => {
  const navigate = useNavigate();

  return useMutation<void, Error, { email: string; password: string }>({
    mutationKey: ["login"],
    mutationFn: login,

    onSuccess: () => {
      navigate("/admin");
    },
    onError: (error: Error) => {
      console.error("Login failed:", error);
      throw error;
    },
  });
};
