import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import showError from "../utils/showError";
import api from "../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "../types/user";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useSelector } from "react-redux";
const Login = () => {
  interface LocationState {
    state: {
      newUser?: boolean;
    };
  }

  // const dispatch = useDispatch<AppDispatch>()

  const showMsg = (Message: string) => {
    message.success(Message);
  };
  const location = useLocation() as LocationState;

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (location.state?.newUser) {
  //     showMsg("Succesfully signup. SignIn with ut certain info");
  //   }
  // }, []);

  const dispatch = useAppDispatch();
  const onFinish = (values: LoginForm) => {
    dispatch(login(values));
  };
  const user = useAppSelector((state) => console.log(state.user));
  // const dispatch: AppDispatch = useDispatch();

  // const onFinish = async (values: any) => {
  //   console.log("Success:", values);
  //   navigate("/home");
  //   try {
  //     await api.post("/users/login", values);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", { errorInfo });
  //   showError(errorInfo);
  // };
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>
          {/* {location.state?.newUser && location.state.newUser ? "var" : "yoxdu"} */}
        </h1>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
