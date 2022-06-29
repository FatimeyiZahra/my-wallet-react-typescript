import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import showError from "../utils/showError";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "../types/user";
import { login } from "../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store/store";
import showSuccess from "../utils/showSucces";

const Login = () => {
  interface LocationState {
    state: {
      newUser?: boolean;
    };
  }
 
  const showMsg = (Message: string) => {
    message.success(Message);
  };
  const location = useLocation() as LocationState;
  console.log(location);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const onFinish = (values: LoginForm) => {
    dispatch(login(values, navigate));
  };
  const user = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (location.state) {
      if (location.state.newUser) {
        showSuccess("enter ur credentials");
      }
    }
  }, [location]);

  useEffect(() => {
    user.data.username && showSuccess("You have successfully logged in!");
  }, [user.data.username]);

  useEffect(() => {
    user.error && showError(user.error);
  }, [user.error]);

  const loading = () => {
    return user.loading ? (
      <>
        <div
          style={{ height: "100vh", width: "100%", backgroundColor: "black" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              color: "white"
            }}
          >
            <h1>Loading...</h1>
          </div>
        </div>
      </>
    ) : null;
  };
  
  return (
    <>
      {loading()}
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
          <Input defaultValue="zaxra" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password defaultValue="zaxra123"/>
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
