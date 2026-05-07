import style from "./_login.module.scss";
import { IoMdClose } from "react-icons/io";
import { Formik, Field, Form } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import loginThunk from "../../../redux/thunks/loginThunk";
const Login = () => {
  type FormValues = {
    name: string;
    email: string;
    password: string;
  };
  type ErrorsType = Partial<FormValues>;
  const notify = () => toast.error("Please fill in all the fields in the form.")
  const closeModal = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <>
      <div className={style.backdrop}>
        <div className={style.backdrop_formContainer}>
          <button className={style.backdrop_closeBtn} onClick={() => closeModal("/")}>
            <IoMdClose />
          </button>
          <h1 className={style.backdrop_formContainer_title}>Weloceme again to Ice cream shop</h1>
          <Formik<FormValues>
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors: ErrorsType = {};

              if (!values.name) {
                errors.name = "Це обов'язкове поле!";
                notify()
              } else if (!values.email) {
                errors.email = "Це обов'язкове поле!";
                notify()
              } else if (!values.password) {
                errors.password = "Це обов'язкове поле!";
                notify()
              }
              return errors;
            }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values) => {
              console.log(values);
              dispatch(loginThunk(values))
            }}
          >
            {() => (
              <Form className={style.backdrop_formContainer_form}>
                <Field name="name" placeholder="Write name" className={style.backdrop_formContainer_form_input} />
                <Field name="email" type="email" placeholder="Write email" className={style.backdrop_formContainer_form_input} />
                <Field name="password" type="password" placeholder="Write password" className={style.backdrop_formContainer_form_input} />
                <button type="submit" className={style.backdrop_formContainer_form_button}>Submit</button>
              </Form>
            )}
          </Formik>
          <p className={style.backdrop_formContainer_subTitle}>Don’t have an account? <Link to="/register" className={style.backdrop_formContainer_subTitle_link}>Create account</Link> </p>
        </div>
        <ToastContainer position="top-left" />
      </div>
    </>
  );
};
export default Login;
