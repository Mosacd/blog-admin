import { Button, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";

type initialValues = {title:string; description:string};

const { Item } = Form;

const BlogsCreateUpdateFrom:React.FC<{
  initialValues?: initialValues;
  submitCallbackFn: (values: initialValues) => void;}> = ({
  initialValues,submitCallbackFn
}) =>{

const [form] = useForm<initialValues>();



    return(
        <Form<initialValues>
        initialValues={initialValues}
        form={form}
        onFinish={submitCallbackFn}
    name="wrap"
    colon={false}
    style={{ maxWidth: 600 }}
  >
    <Item label="Title" name="title" rules={[{ required: true }]}>
      <Input placeholder="Enter Title" />
    </Item>

    <Item label="Description" name="description" rules={[{ required: true }]}>
      <TextArea placeholder="Enter Decription" />
    </Item>

    <Item label=" ">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Item>
  </Form>
    )
}

export default BlogsCreateUpdateFrom;