import { Button, Form, Input, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import { NextPage } from "next";
import { useEffect } from "react";
import { InputCommandProps } from "../utils";

const openNotification = (errorMessage: string) => {
  notification.open({
    message: "Error",
    description: errorMessage,
    placement: "topLeft",
    type: "error",
    duration: 3,
  });
};

const InputCommand: NextPage<InputCommandProps> = ({
  error,
  validateCommand,
}) => {
  const [form] = useForm();
  const onFinish = (values: { command: string }) => {
    const { command } = values;
    validateCommand(command);
    form.resetFields();
  };

  useEffect(() => {
    if (!error || error.length == 0) return;

    openNotification(error);
  }, [error]);

  return (
    <Form
      form={form}
      name="command"
      initialValues={{ command: "" }}
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        label="Command"
        name="command"
        rules={[
          { required: true, message: "Please enter a command" },
          { min: 4, message: "Please enter a command" },
          { max: 15, message: "Maximum of 15 characters" },
        ]}
        normalize={(value) => value.toUpperCase()}
      >
        <Input style={{ width: 200 }} autoFocus />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          RUN
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputCommand;
