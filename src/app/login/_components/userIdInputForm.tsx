import { UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

export default function UserIdInputForm() {
  return (
    <Form.Item
      name="userId"
      rules={[
        {
          required: true,
          message: "아이디를 입력하세요",
        },
      ]}
      className="m-0"
    >
      <Input
        className="w-96 h-10"
        placeholder="아이디를 입력하세요"
        prefix={<UserOutlined />}
      />
    </Form.Item>
  );
}
