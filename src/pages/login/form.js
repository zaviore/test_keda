import React, { useCallback } from "react";
import { validateLogin } from "./validate";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validateLogin,
    initialErrors: {
      password: "*Required",
      username: "*Required",
    },
    onSubmit(values) {
      navigate("/dashboard");
    },
  });

  const handleSubmitting = useCallback((e) => {
    e.preventDefault();
    formik.setSubmitting(true);
  }, []);

  return (
    <div>
      <h1 className='text-xl mb-5'>Login</h1>
      <form onSubmit={formik.isValid ? formik.handleSubmit : handleSubmitting}>
        <div className='mt-10'>
          <div className='text-red-500'>
            {formik.isSubmitting &&
              formik.errors.username &&
              ` ( ${formik.errors.username} )`}
          </div>
          <input
            className='border border-gray-400 rounded-lg p-2 w-full '
            placeholder='username'
            id='username'
            {...formik.getFieldProps("username")}
          />
        </div>
        <div className='mt-7 mb-10'>
          <div className='text-red-500'>
            {formik.isSubmitting &&
              formik.errors.password &&
              ` ( ${formik.errors.password} )`}
          </div>
          <input
            className='border border-gray-400 rounded-lg p-2 w-full '
            placeholder='password'
            type='password'
            id='password'
            {...formik.getFieldProps("password")}
          />
        </div>
        <button className='bg-[#026ce0] font-bold rounded-lg text-white p-2 px-4 hover:bg-[#234f7e] w-full'>
          Login
        </button>
      </form>
      <a
        href='/'
        className='border-[#026ce0] border-2 font-bold rounded-lg text-[#026ce0] p-2 px-4 hover:bg-[#234f7e] w-full mt-2 block text-center'
      >
        back
      </a>
    </div>
  );
}

export default FormLogin;
