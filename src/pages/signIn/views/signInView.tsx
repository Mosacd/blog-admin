import React from "react";
import SignIn from "../components/signIn";
import { useSignIn } from "../../../reactQuery/mutation/auth/signIn";

export type LoginFormInputs = {
  email: string;
  password: string;
};

const SignInView: React.FC = () => {
  const { mutate: handleLogIn, isError, error, isPending } = useSignIn();

  const handleSubmit = (data: LoginFormInputs) => {
    handleLogIn(data);
  };

  return (
    <>
      {isPending && (
        <h1 className="m-auto text-center text-lg">Signing you in...</h1>
      )}
      <SignIn onSubmit={handleSubmit} />
      {isError && <p className="text-red-500">Login failed: {String(error)}</p>}
    </>
  );
};

export default SignInView;
