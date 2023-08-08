import * as Yup from "yup";
export const validateLogin = Yup.object({
  username: Yup.string().required("*Required"),
  password: Yup.string().required("*Required"),
});
