import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { logout } from '../supabase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/auth/hooks/useAuthContext';
const { Header, Content, Sider } = Layout;



const menuItems: MenuProps['items'] = [
  {
    key: 'users',
    label: 'Users',
    children: [
      {
        key: 'users-list',
        label: <Link to="users">Users</Link>,
      },
    ],
  },
  {
    key: 'blogs',
    label: 'Blogs',
    children: [
      {
        key: 'blogs-list',
        label: <Link to="blogs">Blogs</Link>,
      },
    ],
  },
];

const AdminLayout:React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const{mutate:logoutfn} = useMutation({mutationKey:['logout'], mutationFn:logout, onSuccess: () => {
    navigate("/auth/signin"); 
    console.log("success")
  },})

const handlelogout = () =>{
 logoutfn()
 
}

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

    return(
         <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
       {user ? (<Button onClick={handlelogout}>Log Out</Button>) : null} 
      </Header>
      <Content style={{ padding: '0 48px' }}>
        
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={menuItems}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: '80vh' }}>
            <Outlet/>
          </Content>
        </Layout>
      </Content>
    </Layout>
    )
}

export default AdminLayout;