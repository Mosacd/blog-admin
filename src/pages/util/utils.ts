import {User} from "../api/apiForUsers"

export const mapUsersListForAdmin = (users:User[]) =>{
    return users?.map((user) => ({
        email: user?.email,
        createdAt: user?.created_at,
        phone:user?.phone,
        UpdatedAt: user?.updated_at,
        id: user?.id,
        key: user?.id
    }))
}