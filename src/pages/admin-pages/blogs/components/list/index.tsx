import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
const { Column } = Table;
import { Blog } from "../../../../api/apiForBlogs";

const BlogsList: React.FC<{ isLoading: boolean; blogs: Blog[] }> = ({
  blogs,
  isLoading,
}) => {
  const navigate = useNavigate();

  const handleNavigateToUserEdit = (id: string | number) => {
    navigate(`/admin/blogs/update/${id}`);
  };
  const handleNavigateToUserCreate = () => {
    navigate("/admin/blogs/create");
  };

  return (
    <Table
      loading={isLoading}
      title={() => (
        <Button
          type="default"
          icon={<PlusOutlined />}
          className=" text-amber-500 cursor-pointer"
          onClick={handleNavigateToUserCreate}
        >
          Create Blog
        </Button>
      )}
      bordered
      dataSource={blogs}
    >
      <Column<Blog> title="Title" dataIndex="title"></Column>
      <Column<Blog> title="Created At" dataIndex="created_at"></Column>
      <Column<Blog> title="Description" dataIndex="description"></Column>
      <Column<Blog>
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined
              className="text-xl text-amber-500 cursor-pointer"
              onClick={() => handleNavigateToUserEdit(row.id)}
            />
          );
        }}
      ></Column>
    </Table>
  );
};

export default BlogsList;
