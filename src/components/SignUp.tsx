import React, { useEffect } from "react";
import { Button, InputNumber, Form, Input } from "antd";
import axios from "axios";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import showError from "../utils/showError";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await api().post("/users/register", values);
      // navigate("/login", { newUser: true });
      navigate("/login", {
        state: {
          newUser: true,
        },
      });
    } catch (error) {
      showError((error as any).response.data.errorMessage);
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <Form.Item name="username" label="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!", min: 6 },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="full_name" label="full_name">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
