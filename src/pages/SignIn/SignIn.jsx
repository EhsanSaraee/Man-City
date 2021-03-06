import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { Container, ErrorLabel, Progress, SignInWrapper } from './styles';
import { app } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../utils/tools';

const SignIn = ({ user }) => {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
      useFormik({
         initialValues: {
            email: '',
            password: '',
         },
         validationSchema: yup.object({
            email: yup
               .string()
               .email('Invalid email address')
               .required('The email is required'),
            password: yup.string().required('The password is required'),
         }),
         onSubmit: (values) => {
            setLoading(true);
            submitForm(values);
         },
      });

   const submitForm = (values) => {
      app.auth()
         .signInWithEmailAndPassword(values.email, values.password)
         .then(() => {
            successToast('Welcome back!');
            navigate('/dashboard');
         })
         .catch((error) => {
            setLoading(false);
            errorToast(error.message);
         });
   };

   return (
      <>
         {!user ? (
            <Container>
               <SignInWrapper>
                  <form onSubmit={handleSubmit}>
                     <h2>Please login</h2>
                     <input
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                     />
                     {touched.email && errors.email && (
                        <ErrorLabel>{errors.email}</ErrorLabel>
                     )}

                     <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                     />
                     {touched.password && errors.password && (
                        <ErrorLabel>{errors.password}</ErrorLabel>
                     )}

                     {loading ? (
                        <Progress color="secondary" />
                     ) : (
                        <button type="submit">Login</button>
                     )}
                  </form>
               </SignInWrapper>
            </Container>
         ) : (
            <Navigate to="/dashboard" />
         )}
      </>
   );
};

export default SignIn;
