import React from 'react';
import { Button, Form, Input } from 'antd';
import { LoginFormInputs } from '../views/signInView';
import { useForm } from 'antd/es/form/Form';

// type FieldType = {
//   email?: string;
//   password?: string;
// };

const { Item } = Form;


const SignIn: React.FC<{onSubmit: (data: LoginFormInputs) => void}> = ({ onSubmit }) => {
  const [form] = useForm<LoginFormInputs>();
  return(
  <div className="bg-blue-300 min-h-screen flex justify-center items-center">
    <div className="bg-white p-9 flex flex-col items-center gap-10 rounded-xl w-full max-w-xl">
      <h1 className="font-bold text-xl">Sign In</h1>
      
      <Form
        name="basic"
        style={{ width: '100%' }}
         onFinish={onSubmit}
         form={form}
      >
        <Item<LoginFormInputs>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Item>

        <Item<LoginFormInputs>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Item>

        <Item label={null} className="flex justify-center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
      
    </div>
  </div>
  )
};

export default SignIn;
