import React, { useEffect } from "react";
import backgroundImg from "assets/img/bg.jpg";
import { DatePicker, Input, Select, Spin } from "antd";
import s from "./styles.module.scss";
import "./styles.scss";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  HomeOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRegisterMutation } from "modules/features/Authentication/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

const validateSchema = yup.object().shape({
  email: yup.string().required("*Require!"),
  password: yup.string().required("*Require!"),
  name: yup.string().required("*Require!"),
  phone: yup.string().required("*Require!"),
  birthday: yup.string().required("*Require!"),
  gender: yup.string().required("*Require!"),
  role: yup.string().required("*Require!"),
});

const Register = () => {
  const navigate = useNavigate();
  const [register, { isSuccess, isLoading, isError, error }] = useRegisterMutation();
  const formik = useFormik({
    initialValues: {
      id: 1,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: false,
      role: "USER",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      register(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Sign up successfully!");
      navigate("/auth/login");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) toast.error(error?.data.content);
  }, [error, isError, navigate]);

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
      <div className="w-[35%] relative">
        <div className="absolute right-0">
          <button
            className="p-3 hover:bg-slate-300 rounded-[50%] transition-all duration-500"
            onClick={() => navigate("/")}
          >
            <HomeOutlined className="text-[25px]" />
          </button>
          <button
            className="p-3 hover:bg-slate-300 rounded-[50%] transition-all duration-500"
            onClick={() => navigate(-1)}
          >
            <RollbackOutlined className="text-[25px]" />
          </button>
        </div>

        <div className="px-10 h-full flex flex-col justify-center">
          <h1 className="text-[30px] font-light text-center">Register</h1>
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
                <div className="font-bold text-[red]">{formik.errors.email}</div>
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
                <div className="font-bold text-[red]">{formik.errors.password}</div>
              ) : null}

              <Input
                disabled={isLoading}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className={s.userName}
                placeholder="Full name"
                size="large"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="font-bold text-[red]">{formik.errors.name}</div>
              ) : null}

              <Input
                disabled={isLoading}
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className={s.userName}
                placeholder="Phone"
                size="large"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="font-bold text-[red]">{formik.errors.phone}</div>
              ) : null}

              <DatePicker
                format="DD/MM/YYYY"
                className="datePicker"
                placeholder="Birthday"
                onChange={(val) => {
                  if (val)
                    formik.setFieldValue("birthday", moment(val).format("DD/MM/YYYY"));
                  else formik.setFieldValue("birthday", "");
                }}
                value={
                  formik.values.birthday
                    ? moment(formik.values.birthday, "DD/MM/YYYY")
                    : null
                }
              />
              {formik.touched.birthday && formik.errors.birthday ? (
                <div className="font-bold text-[red]">{formik.errors.birthday}</div>
              ) : null}

              <Select
                className="customSelect"
                defaultValue={true}
                style={{ width: 120 }}
                onChange={(e) => formik.setFieldValue("gender", e)}
              >
                <Select.Option value={true}>Male</Select.Option>
                <Select.Option value={false}>Female</Select.Option>
              </Select>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="font-bold text-[red]">{formik.errors.gender}</div>
              ) : null}

              <Select
                className="customSelect"
                defaultValue={"USER"}
                style={{ width: 120 }}
                onChange={(e) => formik.setFieldValue("role", e)}
              >
                <Select.Option value={"USER"}>User</Select.Option>
                <Select.Option value={"ADMIN"}>Admin</Select.Option>
              </Select>
              {formik.touched.role && formik.errors.role ? (
                <div className="font-bold text-[red]">{formik.errors.role}</div>
              ) : null}
              {/* Button */}
              <div className="flex flex-row-reverse">
                <Link to="/auth/login">
                  <h1 className="cursor-pointer hover:text-[blue] !font-light">
                    You have an account? Login!
                  </h1>
                </Link>
              </div>
              <button type="submit" className={s.loginBtn}>
                SIGN UP
                {isLoading ? <Spin className="!ml-4" /> : null}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
