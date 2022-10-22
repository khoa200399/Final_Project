import React, { useEffect } from "react";
import backgroundImg from "assets/img/bg.jpg";
import { Input, Spin } from "antd";
import s from "./styles.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLoginMutation } from "modules/features/Login/authApi";
import { useNavigate } from "react-router-dom";

const validateSchema = yup.object().shape({
  email: yup.string().required("*Require!"),
  password: yup.string().required("*Require!"),
});

const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess, isLoading }] = useLoginMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      login({ email: values.email, password: values.password });
    },
  });

  useEffect(() => {
    if (isSuccess) navigate(-1);
  }, [isSuccess, navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");
    if (token && userInfo) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex">
      <div className="w-[65%]">
        <img
          className="w-full h-screen object-cover"
          src={backgroundImg}
          alt="background"
        />
      </div>
      <div className="w-[35%]">
        <div className="px-10 h-full flex flex-col justify-center">
          <h1 className="text-[30px] font-light text-center">
            Login to continue
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3">
              <Input
                disabled={isLoading}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={s.userName}
                placeholder="Email"
                size="large"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="font-bold text-[red]">
                  {formik.errors.email}
                </div>
              ) : null}
              <Input.Password
                disabled={isLoading}
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={s.passwordInput}
                size="large"
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="font-bold text-[red]">
                  {formik.errors.password}
                </div>
              ) : null}
              <div className="flex flex-row-reverse">
                <h1 className="cursor-pointer hover:text-[blue] !font-light">
                  Forgot Password?
                </h1>
              </div>
              <button type="submit" className={s.loginBtn}>
                LOGIN
                {isLoading ? <Spin className="!ml-4" /> : null}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
