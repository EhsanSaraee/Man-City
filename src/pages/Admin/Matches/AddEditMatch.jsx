import { FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { matchesCollection, teamsCollection } from '../../../firebase';
import AdminLayout from '../../../HOC/AdminLayout';
import {
   errorToast,
   isSelectError,
   selectErrorHelper,
   textErrorHelper,
} from '../../../utils/tools';
import { EditMatchDialogWrapper } from './styles';

const defaultValues = {
   date: '',
   local: '',
   resultLocal: '',
   away: '',
   resultAway: '',
   referee: '',
   stadium: '',
   result: '',
   final: '',
};

const AddEditMatch = () => {
   const [loading, setLoading] = useState(false);
   const [formType, setFormType] = useState('');
   const [teams, setTeams] = useState(null);
   const [values, setValues] = useState(defaultValues);

   const { matchID } = useParams();

   const formik = useFormik({
      enableReinitialize: true,
      initialValues: values,
      validationSchema: yup.object({
         date: yup.string().required('This input is required'),
         local: yup.string().required('This input is required'),
         resultLocal: yup
            .number()
            .required('This input is required')
            .min(0, 'The minimum is 0')
            .max(99, 'The maximum is 30'),
         away: yup.string().required('This input is required'),
         resultAway: yup
            .number()
            .required('This input is required')
            .min(0, 'The minimum is 0')
            .max(99, 'The maximum is 30'),
         referee: yup.string().required('This input is required'),
         stadium: yup.string().required('This input is required'),
         result: yup
            .mixed()
            .required('This input is required')
            .oneOf(['W', 'D', 'L', 'n/a']),
         final: yup
            .mixed()
            .required('This input is required')
            .oneOf(['yes', 'no']),
      }),
      onSubmit: (values) => {
         // submit form
         console.log(values);
      },
   });

   const showTeams = () =>
      teams
         ? teams.map((item) => (
              <MenuItem key={item.id} value={item.shortName}>
                 {item.shortName}
              </MenuItem>
           ))
         : null;

   useEffect(() => {
      if (!teams) {
         teamsCollection
            .get()
            .then((snapshot) => {
               const teams = snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
               }));
               setTeams(teams);
            })
            .catch((error) => {
               errorToast(error);
            });
      }
   }, [teams]);

   useEffect(() => {
      if (matchID) {
         /// edit
         matchesCollection
            .doc(matchID)
            .get()
            .then((snapshot) => {
               if (snapshot.data()) {
                  setFormType('edit');
                  setValues(snapshot.data());
               } else {
                  errorToast('No records found');
               }
            });
      } else {
         // add
         setFormType('add');
         setValues(defaultValues);
      }
   }, [matchID]);

   return (
      <AdminLayout title="undefined">
         <EditMatchDialogWrapper>
            <div>
               <form onSubmit={formik.handleSubmit}>
                  <div>
                     <h4>Select date</h4>
                     <FormControl>
                        <TextField
                           id="date"
                           name="date"
                           type="date"
                           variant="outlined"
                           {...formik.getFieldProps('date')}
                           {...textErrorHelper(formik, 'date')}
                        />
                     </FormControl>
                  </div>

                  <hr />

                  <div>
                     <h4>Result local</h4>
                     <FormControl error={isSelectError(formik, 'local')}>
                        <Select
                           id="local"
                           name="local"
                           variant="outlined"
                           displayEmpty
                           {...formik.getFieldProps('local')}
                        >
                           <MenuItem value="" disabled>
                              Select a team
                           </MenuItem>
                           {showTeams()}
                        </Select>
                        {selectErrorHelper(formik, 'local')}
                     </FormControl>

                     <FormControl style={{ marginLeft: '10px' }}>
                        <TextField
                           id="resultLocal"
                           name="resultLocal"
                           type="number"
                           variant="outlined"
                           {...formik.getFieldProps('resultLocal')}
                           {...textErrorHelper(formik, 'resultLocal')}
                        />
                     </FormControl>
                  </div>

                  <div>
                     <h4>Result away</h4>
                     <FormControl error={isSelectError(formik, 'away')}>
                        <Select
                           id="away"
                           name="away"
                           variant="outlined"
                           displayEmpty
                           {...formik.getFieldProps('away')}
                        >
                           <MenuItem value="" disabled>
                              Select a team
                           </MenuItem>
                           {showTeams()}
                        </Select>
                        {selectErrorHelper(formik, 'away')}
                     </FormControl>

                     <FormControl style={{ marginLeft: '10px' }}>
                        <TextField
                           id="resultAway"
                           name="resultAway"
                           type="number"
                           variant="outlined"
                           {...formik.getFieldProps('resultAway')}
                           {...textErrorHelper(formik, 'resultAway')}
                        />
                     </FormControl>
                  </div>
               </form>
            </div>
         </EditMatchDialogWrapper>
      </AdminLayout>
   );
};

export default AddEditMatch;
