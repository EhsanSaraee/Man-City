import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import AdminLayout from '../../../HOC/AdminLayout';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';

const defaultValues = {
   name: '',
   lastname: '',
   number: '',
   position: '',
};

const AddEditPlayers = () => {
   const { playerID } = useParams();

   const [formType, setFormType] = useState('');
   const [values, setValues] = useState(defaultValues);

   const formik = useFormik({
      enableReinitialize: true,
      initialValues: values,
      validationSchema: yup.object({
         name: yup.string().required('Name is required'),
         lastname: yup.string().required('Lastname is required'),
         number: yup
            .number()
            .required('Number is required')
            .min('0', 'Number must be greater than 0')
            .max('100', 'Number must be less than 100'),
         position: yup.string().required('Position is required'),
      }),
   });

   useEffect(() => {
      if (playerID) {
         setFormType('edit');
         setValues({ name: 'Simon' });
      } else {
         setFormType('add');
         setValues(defaultValues);
      }
   }, [playerID]);

   return (
      <AdminLayout title="Add Players">
         <h1>Add Players</h1>
      </AdminLayout>
   );
};

export default AddEditPlayers;
