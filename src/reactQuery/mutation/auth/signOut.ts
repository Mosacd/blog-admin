import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../supabase/auth";
import { AuthError } from "@supabase/supabase-js";

export const useSignOut = () => {
  const navigate = useNavigate();

  return useMutation<{ error: AuthError | null }, Error, void>({
    mutationKey: ["logout"],
    mutationFn: logout,

    onSuccess: () => {
      navigate("/auth/signin");
    },

    onError: (error: Error) => {
      console.error("Logout failed:", error);
      throw error;
    },
  });
};
