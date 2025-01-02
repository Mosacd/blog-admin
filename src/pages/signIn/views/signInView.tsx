import React from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/signIn";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../supabase/auth";

export type LoginFormInputs = {
  email: string;
  password: string;
};

const SignInView: React.FC = () => {
  const navigate = useNavigate();

  
  const { mutate: handleLogIn, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/admin"); 
    },
    onError: (error: unknown) => {
      console.error("Login failed:", error); 
    },
  });



  const onSubmit = (data: LoginFormInputs) => {
    handleLogIn(data); 
  };

  return (
    <div>
      <SignIn onSubmit={onSubmit} />
      {isError && <p className="text-red-500">Login failed: {String(error)}</p>}
    </div>
  );
};

export default SignInView;
