import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { promotionsCollection } from '../../../firebase';
import { successToast, errorToast } from '../../../utils/tools';
import {
   EnrollWrapper,
   EnrollInput,
   EnrollTitle,
   ErrorLabel,
   Progress,
   EnrollDescL,
} from './styles';

const Enroll = () => {
   const [loading, setLoading] = useState(false);

   const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
      useFormik({
         initialValues: { email: '' },
         validationSchema: yup.object({
            email: yup
               .string()
               .email('Invalid email')
               .required('The email is required'),
         }),
         onSubmit: (values) => {
            setLoading(true);
         },
      });

   return (
      <Fade>
         <EnrollWrapper>
            <form onSubmit={handleSubmit}>
               <EnrollTitle>Enter your email</EnrollTitle>
               <EnrollInput>
                  <input
                     type="email"
                     name="email"
                     onChange={handleChange}
                     value={values.email}
                     onBlur={handleBlur}
                     placeholder="Enter your email"
                  />
                  {touched.email && errors.email && (
                     <ErrorLabel>{errors.email}</ErrorLabel>
                  )}
                  {loading ? (
                     <Progress color="secondary" />
                  ) : (
                     <button type="submit">Enroll</button>
                  )}
                  <EnrollDescL>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Eum nemo quo voluptate magni, dolor eveniet ipsum quae
                     mollitia velit? Molestias.
                  </EnrollDescL>
               </EnrollInput>
            </form>
         </EnrollWrapper>
      </Fade>
   );
};

export default Enroll;
