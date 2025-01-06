import { supabase } from "../../supabase";
import {
  UserMetadata,
  UserAppMetadata,
  UserIdentity,
} from "@supabase/supabase-js";

export const getUsersList = async () => {
  const List = await supabase.auth.admin.listUsers().then((res) => {
    return res.data.users as User[];
  });

  return List;
};

export const updateUserInAdmin = async ({
  id,
  values,
}: {
  id: string;
  values: { email: string; phone: string };
}): Promise<{ user: User }> => {
  const { data, error } = await supabase.auth.admin.updateUserById(id, {
    ...values,
  });
  if (error) {
    throw error;
  }
  return data;
};

export const getSingleUserInAdmin = async (id: string) => {
  const { data, error } = await supabase.auth.admin.getUserById(id);
  if (error) {
    throw error;
  }
  return data.user;
};

export const createUserInAdmin = async (values: {
  email: string;
  phone: string;
}): Promise<void> => {
  try {
    const { error } = await supabase.auth.admin.createUser({
      email: values.email,
      phone: values.phone,
      password: "temporaryPassword123!",
      email_confirm: true,
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

export type User = {
  id: string;
  aud: string;
  role?: string;
  email?: string;
  email_confirmed_at?: string;
  phone?: string;
  confirmed_at?: string;
  app_metadata: UserAppMetadata;
  user_metadata: UserMetadata;
  identities?: UserIdentity[] | null;
  created_at: string;
  updated_at?: string;
  is_anonymous?: boolean;
};
