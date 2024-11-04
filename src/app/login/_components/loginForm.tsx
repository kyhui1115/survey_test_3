"use client";

import { Form } from "antd";
import { useRouter } from "next/navigation";
import UserIdInputForm from "./userIdInputForm";
import PasswordInputForm from "./passwordInputForm";
import RememberCheckForm from "./rememberCheckForm";
import SubmitButtonForm from "./submitButtonForm";

interface LoginFormValues {
  userId: string;
  password: string;
  remember: boolean;
}

export default function LoginForm() {
  const router = useRouter();

  const onFinish = (values: LoginFormValues) => {
    console.log(values);
    router.push("/survey/reports");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="flex flex-col items-center"
    >
      <UserIdInputForm />
      <PasswordInputForm />
      <RememberCheckForm />
      <SubmitButtonForm />
    </Form>
  );
}
