import { Button, Form } from "antd";

export default function SubmitButtonForm() {
  return (
    <Form.Item>
      <Button htmlType="submit" type="primary" className="w-96 h-10">
        로그인
      </Button>
    </Form.Item>
  );
}
