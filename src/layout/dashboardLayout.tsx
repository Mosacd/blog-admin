import React from "react";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/auth/hooks/useAuthContext";
import { ADMIN_PATHS } from "../routes/admin/index.enum";
import { useSignOut } from "../reactQuery/mutation/auth/signOut";
const { Header, Content, Sider } = Layout;

const menuItems: MenuProps["items"] = [
  {
    key: "users",
    label: "Users",
    children: [
      {
        key: "users-list",
        label: <Link to={ADMIN_PATHS.USER_LIST}>Users</Link>,
      },
    ],
  },
  {
    key: "blogs",
    label: "Blogs",
    children: [
      {
        key: "blogs-list",
        label: <Link to={ADMIN_PATHS.BLOG_LIST}>Blogs</Link>,
      },
    ],
  },
];

const AdminLayout: React.FC = () => {
  const { user } = useAuthContext();

  const { mutate: logout, isPending } = useSignOut();

  const handlelogout = () => {
    logout();
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          {user ? <Button onClick={handlelogout}>Log Out</Button> : null}
        </Header>
        {isPending && (
          <h1 className="m-auto text-center text-lg">Signing you out...</h1>
        )}
        <Content style={{ padding: "0 48px" }}>
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                items={menuItems}
              />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: "80vh" }}>
              <Outlet />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default AdminLayout;
