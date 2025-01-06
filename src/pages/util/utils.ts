import { Blog } from "../api/apiForBlogs";
import { User } from "../api/apiForUsers";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const formatDate = (created_at: string) => {
  const creationDate = dayjs(created_at);
  const formattedDate = creationDate.format("YYYY-MM-DD HH:mm");
  return formattedDate;
};

export const mapUsersListForAdmin = (users: User[]) => {
  return users?.map((user) => ({
    email: user?.email,
    createdAt: formatDate(user?.created_at),
    phone: user?.phone,
    UpdatedAt: formatDate(user?.updated_at || ""),
    id: user?.id,
    key: user?.id,
  }));
};

// export const mapUsersListForAdmin = (data : User[]) => {
//   const mappedUsers = mapUsersListForAdmin(data);
//   return mappedUsers.map((user) => ({
//     ...user,
//     createdAt: formatDate(user.createdAt),
//     UpdatedAt: formatDate(user.UpdatedAt),
//   }));
// }

export const mapBlogsListForAdmin = (data: Blog[]) => {
  return data.map((blog) => ({
    ...blog,
    created_at: formatDate(blog.created_at),
  }));
};

export const mapSingleUserForAdminUpdate = (data: User) => ({
  email: data?.email || "",
  phone: data?.phone || "",
});

export const mapSingleBLogForAdminUpdate = (data: Blog) => ({
  title: data?.title || "",
  description: data?.description || "",
});
