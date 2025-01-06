import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

type initialValues = { email: string; phone: string };

const { Item } = Form;

const UsersCreateUpdateFrom: React.FC<{
  initialValues?: initialValues;
  submitCallbackFn: (values: initialValues) => void;
}> = ({ initialValues, submitCallbackFn }) => {
  const [form] = useForm<initialValues>();

  return (
    <Form<initialValues>
      initialValues={initialValues}
      form={form}
      onFinish={submitCallbackFn}
      name="wrap"
      colon={false}
      style={{ maxWidth: 600 }}
    >
      <Item label="Phone Number" name="phone" rules={[{ required: true }]}>
        <Input placeholder="Enter Phone Number" />
      </Item>

      <Item label="Email" name="email" rules={[{ required: true }]}>
        <Input placeholder="Enter Email" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default UsersCreateUpdateFrom;
