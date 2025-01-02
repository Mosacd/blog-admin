import { Skeleton, Space, Form} from "antd";

const UsersCreateUpdateFromSkeleton:React.FC = () =>{
return(
    <Form>
        <Space direction="vertical" size="large">
            <Skeleton.Input active />
            <Skeleton.Input active />
            <Skeleton.Button active />
        </Space>
    </Form>
)
}

export default UsersCreateUpdateFromSkeleton;