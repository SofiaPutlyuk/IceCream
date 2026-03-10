import style from "./_login.module.scss";
import { IoMdClose } from "react-icons/io";
import { Formik, Field, Form } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  type ErrorsType = Partial<FormValues>;
  const notify = () => toast.error("Please fill in all the fields in the form.")
  const confirm = () => toast.error("Passwords do not match.")
  const closeModal = useNavigate()
  return (
    <>
      <div className={style.backdrop}>
        <div className={style.backdrop_formContainer}>
          <h1 className={style.backdrop_formContainer_title}>Weloceme again to Ice cream shop</h1>
          <Formik<FormValues>
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validate={(values) => {
              const errors: ErrorsType = {};

              if (!values.firstName) {
                errors.firstName = "Це обов'язкове поле!";
                notify()
              }  else if(!values.lastName){
                errors.lastName = "Це обов'язкове поле!";
                notify()
              }else if(!values.email){
                errors.email = "Це обов'язкове поле!";
                notify()
              } else if (!values.password){
                errors.password = "Це обов'язкове поле!";
                notify()
              }else if (!values.confirmPassword){
                errors.confirmPassword = "Це обов'язкове поле!";
                notify()
              } else if (values.password !== values.confirmPassword){
                confirm()
              }
              return errors; 
            }}
            validateOnChange={false}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form className={style.backdrop_formContainer_form}>
                <Field name="firstName" placeholder="Write first name" className={style.backdrop_formContainer_form_input}/>

                <Field name="lastName" placeholder="Write last name" className={style.backdrop_formContainer_form_input} />

                <Field name="email" type="email" placeholder="Write email" className={style.backdrop_formContainer_form_input}/>

                <Field name="password" type="password" placeholder="Write password" className={style.backdrop_formContainer_form_input}/>
                
                <Field name="confirmPassword" type="password" placeholder="Confirm password" className={style.backdrop_formContainer_form_input}/>                

                <button type="submit" className={style.backdrop_formContainer_form_button}>Submit</button>
              </Form>
            )}
          </Formik>
          <p className={style.backdrop_formContainer_subTitle}>Don’t have an account? <Link to="/register" className={style.backdrop_formContainer_subTitle_link}>Create account</Link> </p> 
        </div>
        <button className={style.backdrop_closeBtn} onClick={() => closeModal(-1)}>
          <IoMdClose />
        </button>
        <ToastContainer position="top-left"/>
      </div>
    </>
  );
};
export default Login;
