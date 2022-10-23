import { DatePicker, Divider, Input, Select } from "antd";
import { useFormik } from "formik";
import moment from "moment/moment";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useEditUserInfoMutation, useGetUserInfoByIdQuery } from "store/locationApi";
import * as yup from "yup";
import "./styles.scss";

const validateSchema = yup.object().shape({
  email: yup.string().required("*Require!"),
  name: yup.string().required("*Require!"),
  phone: yup
    .string()
    .required("*Require!")
    .matches(/^[0-9]*$/, "Phone is invalid")
    .min(10, "Phone is invalid")
    .max(11, "Phone is invalid"),
  birthday: yup.string().required("*Require!"),
  gender: yup.string().required("*Require!"),
  role: yup.string().required("*Require!"),
});

const EditInfo = ({ userID }) => {
  const { data: fetchInfo } = useGetUserInfoByIdQuery(userID);
  const [editUser, { isLoading, isSuccess, isError, error }] = useEditUserInfoMutation();
  const [isShowEdit, setIsShowEdit] = useState({
    name: false,
    email: false,
    phone: false,
    birthday: false,
    gender: false,
    role: false,
  });

  const userInfo = useMemo(() => {
    return fetchInfo?.content;
  }, [fetchInfo]);
  const formik = useFormik({
    initialValues: {
      id: userInfo?.id,
      name: userInfo?.name,
      email: userInfo?.email,
      phone: userInfo?.phone,
      birthday: userInfo?.birthday,
      gender: userInfo?.gender,
      role: userInfo?.role,
    },
    validationSchema: validateSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      editUser({ id: userInfo?.id, body: values });
    },
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success("Edit user infomation successfully!");
      window.location.reload();
    }
    if (isError) {
      toast.error("Edit user infomation failed!");
    }
  }, [isSuccess, isError]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* name */}
        <div className="itemWrapper">
          <div className="flex justify-between">
            <div className="userItem">
              <h2>Legal name</h2>
              <p>{userInfo?.name}</p>
            </div>
            <div className="text-[16px] underline cursor-pointer hover:text-[blue]">
              {!isShowEdit.name && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, name: true }))}
                >
                  Edit
                </h2>
              )}
              {isShowEdit.name && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, name: false }))}
                >
                  Cancel
                </h2>
              )}
            </div>
          </div>
          {isShowEdit.name && (
            <div className="flex gap-x-2">
              <Input
                style={{
                  borderRadius: "10px",
                  height: "50px",
                  fontSize: "18px",
                }}
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <button type="submit" className="saveBtn">
                Save
              </button>
            </div>
          )}
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div className="font-bold text-[red]">{formik.errors.name}</div>
        ) : null}
        <Divider />
        {/* email */}
        <div className="itemWrapper">
          <div className="flex justify-between">
            <div className="userItem">
              <h2>Email</h2>
              <p>{userInfo?.email}</p>
            </div>
            <div className="text-[16px] underline cursor-pointer hover:text-[blue]">
              {!isShowEdit.email && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, email: true }))}
                >
                  Edit
                </h2>
              )}
              {isShowEdit.email && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, email: false }))}
                >
                  Cancel
                </h2>
              )}
            </div>
          </div>
          {isShowEdit.email && (
            <div className="flex gap-x-2">
              <Input
                style={{
                  borderRadius: "10px",
                  height: "50px",
                  fontSize: "18px",
                }}
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <button type="submit" className="saveBtn">
                Save
              </button>
            </div>
          )}
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="font-bold text-[red]">{formik.errors.email}</div>
        ) : null}
        <Divider />
        {/* phone */}
        <div className="itemWrapper">
          <div className="flex justify-between">
            <div className="userItem">
              <h2>phone</h2>
              <p>{userInfo?.phone}</p>
            </div>
            <div className="text-[16px] underline cursor-pointer hover:text-[blue]">
              {!isShowEdit.phone && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, phone: true }))}
                >
                  Edit
                </h2>
              )}
              {isShowEdit.phone && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, phone: false }))}
                >
                  Cancel
                </h2>
              )}
            </div>
          </div>
          {isShowEdit.phone && (
            <div className="flex gap-x-2">
              <Input
                style={{
                  borderRadius: "10px",
                  height: "50px",
                  fontSize: "18px",
                }}
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <button type="submit" className="saveBtn">
                Save
              </button>
            </div>
          )}
        </div>
        {formik.touched.phone && formik.errors.phone ? (
          <div className="font-bold text-[red]">{formik.errors.phone}</div>
        ) : null}
        <Divider />
        {/* birthday */}
        <div className="itemWrapper">
          <div className="flex justify-between">
            <div className="userItem">
              <h2>Birthday</h2>
              <p>{userInfo?.birthday}</p>
            </div>
            <div className="text-[16px] underline cursor-pointer hover:text-[blue]">
              {!isShowEdit.birthday && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, birthday: true }))}
                >
                  Edit
                </h2>
              )}
              {isShowEdit.birthday && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, birthday: false }))}
                >
                  Cancel
                </h2>
              )}
            </div>
          </div>
          {isShowEdit.birthday && (
            <div className="flex gap-x-2">
              <DatePicker
                format="DD/MM/YYYY"
                className="datePicker"
                onChange={(val) => {
                  if (val)
                    formik.setFieldValue("birthday", moment(val).format("DD/MM/YYYY"));
                  else formik.setFieldValue("birthday", null);
                }}
                value={
                  formik.values.birthday
                    ? moment(formik.values.birthday, "DD/MM/YYYY")
                    : null
                }
              />
              <button type="submit" className="saveBtn">
                Save
              </button>
            </div>
          )}
        </div>
        {formik.touched.birthday && formik.errors.birthday ? (
          <div className="font-bold text-[red]">{formik.errors.birthday}</div>
        ) : null}
        <Divider />
        {/* gender */}
        <div className="itemWrapper">
          <div className="flex justify-between">
            <div className="userItem">
              <h2>Gender</h2>
              <p>{userInfo?.gender === true ? "Male" : "Female"}</p>
            </div>
            <div className="text-[16px] underline cursor-pointer hover:text-[blue]">
              {!isShowEdit.gender && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, gender: true }))}
                >
                  Edit
                </h2>
              )}
              {isShowEdit.gender && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, gender: false }))}
                >
                  Cancel
                </h2>
              )}
            </div>
          </div>
          {isShowEdit.gender && (
            <div className="flex gap-x-2">
              <Select
                className="customSelect"
                defaultValue={formik.values.gender}
                style={{ width: 120 }}
                onChange={(e) => formik.setFieldValue("gender", e)}
              >
                <Select.Option value={true}>Male</Select.Option>
                <Select.Option value={false}>Female</Select.Option>
              </Select>
              <button type="submit" className="saveBtn">
                Save
              </button>
            </div>
          )}
        </div>
        {formik.touched.gender && formik.errors.gender ? (
          <div className="font-bold text-[red]">{formik.errors.gender}</div>
        ) : null}
        <Divider />
        {/* role */}
        <div className="itemWrapper">
          <div className="flex justify-between">
            <div className="userItem">
              <h2>Role</h2>
              <p>{userInfo?.role}</p>
            </div>
            <div className="text-[16px] underline cursor-pointer hover:text-[blue]">
              {!isShowEdit.role && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, role: true }))}
                >
                  Edit
                </h2>
              )}
              {isShowEdit.role && (
                <h2
                  className="hover:text-[blue]"
                  onClick={() => setIsShowEdit((prev) => ({ ...prev, role: false }))}
                >
                  Cancel
                </h2>
              )}
            </div>
          </div>
          {isShowEdit.role && (
            <div className="flex gap-x-2">
              <Select
                className="customSelect"
                defaultValue={formik.values.role}
                style={{ width: 120 }}
                onChange={(e) => formik.setFieldValue("role", e)}
              >
                <Select.Option value={"USER"}>User</Select.Option>
                <Select.Option value={"ADMIN"}>Admin</Select.Option>
              </Select>
              <button type="submit" className="saveBtn">
                Save
              </button>
            </div>
          )}
        </div>
        {formik.touched.role && formik.errors.role ? (
          <div className="font-bold text-[red]">{formik.errors.role}</div>
        ) : null}
        <Divider />
      </form>
    </div>
  );
};

export default EditInfo;
