import { Checkbox, Form } from "antd";

export default function RememberCheckForm() {
  return (
    <Form.Item
      name="remember"
      valuePropName="checked"
      className="w-full flex justify-start"
    >
      <Checkbox>아이디 저장</Checkbox>
    </Form.Item>
  );
}
