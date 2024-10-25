import { UnlockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

export default function PasswordInputForm() {
  return (
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: "비밀번호를 입력하세요",
        },
      ]}
      className="mt-2.5"
    >
      <Input.Password
        className="w-96 h-10"
        placeholder="비밀번호를 입력하세요"
        prefix={<UnlockOutlined />}
      />
    </Form.Item>
  );
}
