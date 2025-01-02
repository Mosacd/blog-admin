// import { useEffect, useState } from "react";
import UsersList from "../../components/list"
import { getUsersList } from "../../../../api/apiForUsers";
import { mapUsersListForAdmin } from "../../../../util/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useQuery } from "@tanstack/react-query";


dayjs.extend(relativeTime);

const formatDate = (created_at: string) => {
    const creationDate = dayjs(created_at);
    const formattedDate = creationDate.format("YYYY-MM-DD HH:mm");
    return formattedDate;
}


const UsersListView = () =>{

    const { data: users = [], isLoading, isError, error } = useQuery({
        queryKey: ["usersList"],
        queryFn: getUsersList,
        select: (data) => {
          const mappedUsers = mapUsersListForAdmin(data);
          return mappedUsers.map((user) => ({
            ...user,
            createdAt: formatDate(user.createdAt),
            UpdatedAt: formatDate(user.UpdatedAt),
          }));
        },
      });
        
        if(isError){
            console.log(error.message);
        }

    return (
     <UsersList users={users} isLoading={isLoading}/>
    );
}

export default UsersListView;