import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  createUserInAdmin,
  updateUserInAdmin,
  User,
} from "../../../../pages/api/apiForUsers";

export const useCreateUser = () => {
  const navigate = useNavigate();

  return useMutation<void, Error, { email: string; phone: string }>({
    mutationFn: createUserInAdmin,

    onSuccess: () => {
      navigate("/admin/users");
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};

export const useUpdateUser = () => {
  const navigate = useNavigate();

  return useMutation<
    { user: User },
    Error,
    { id: string; values: { email: string; phone: string } }
  >({
    mutationFn: updateUserInAdmin,

    onSuccess: () => {
      navigate("/admin/users");
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};
