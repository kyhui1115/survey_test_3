import { Button, Form, FormProps } from "antd";
import TextArea from "antd/es/input/TextArea";

interface fieldType {
  text: string;
}

export default function ItemTextArea() {
  const onFinish: FormProps<fieldType>["onFinish"] = (values) => {
    console.log(values);
  };

  return (
    <Form
      style={{
        width: "18%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 16,
      }}
      onFinish={onFinish}
    >
      <Form.Item className="w-52 my-4" name="text">
        <TextArea className="h-40" />
      </Form.Item>
      <Form.Item>
        <Button className="w-16 h-8 text-xs" size="small" htmlType="submit">
          저장
        </Button>
      </Form.Item>
    </Form>
  );
}
