import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
const {Column} = Table;

type User = {
    email:string;
    createdAt:string;
    phone:string;
    UpdatedAt:string;
    id: string;
}

const UsersList:React.FC<{users: User[], isLoading:boolean}> = ({users, isLoading}) =>{

        const navigate = useNavigate();

        const handleNavigateToUserEdit = (id:string|number) => {
                navigate(`/admin/users/update/${id}`)
        }
        const handleNavigateToUserCreate = () => {
            navigate('/admin/users/create');
        }

    return(
     <Table loading={isLoading} title={() => <Button type="default" icon={<PlusOutlined/>}
      className=" text-amber-500 cursor-pointer" onClick={handleNavigateToUserCreate}>Create User</Button>}  bordered dataSource={users}>
        <Column<User> title="Email" dataIndex="email"></Column>
        <Column<User> title="Created At" dataIndex="createdAt"></Column>
        <Column<User> title="Phone" dataIndex="phone"></Column>
        <Column<User> title="Updated At" dataIndex="UpdatedAt"></Column>
        <Column<User> title="Actions" render={(_, row) => {
            return (<EditOutlined className="text-xl text-amber-500 cursor-pointer" onClick={() =>
                handleNavigateToUserEdit(row.id)}/>)
    }} ></Column>
     </Table>
    )
}

export default UsersList;