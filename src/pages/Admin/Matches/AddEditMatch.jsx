import {
   Button,
   Divider,
   FormControl,
   MenuItem,
   Select,
   TextField,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { matchesCollection, teamsCollection } from '../../../firebase';
import AdminLayout from '../../../HOC/AdminLayout';
import {
   errorToast,
   isSelectError,
   selectErrorHelper,
   textErrorHelper,
   successToast,
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
   const navigate = useNavigate();

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
         submitForm(values);
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

   const submitForm = (values) => {
      let dataToSubmit = values;

      teams.forEach((team) => {
         if (team.shortName === dataToSubmit.local) {
            dataToSubmit['localThmb'] = team.thmb;
         }
         if (team.shortName === dataToSubmit.away) {
            dataToSubmit['awayThmb'] = team.thmb;
         }
      });

      setLoading(true);
      if (formType === 'add') {
         matchesCollection
            .add(dataToSubmit)
            .then(() => {
               successToast('Match added :)');
               formik.resetForm();
               navigate('/admin_matches');
            })
            .catch((error) => {
               errorToast('Sorry, something went wrong', error);
            })
            .finally(() => {
               setLoading(false);
            });
      } else {
         matchesCollection
            .doc(matchID)
            .update(dataToSubmit)
            .then(() => {
               successToast('Match Updated');
               navigate('/admin_matches');
            })
            .catch((error) => {
               errorToast('Sorry, something went wrong', error);
            })
            .finally(() => {
               setLoading(false);
            });
      }
   };

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
      <AdminLayout title={formType === 'add' ? 'Add match' : 'Edit match'}>
         <EditMatchDialogWrapper>
            <div>
               <form onSubmit={formik.handleSubmit}>
                  <div>
                     <h4 style={{ marginBottom: '10px' }}>Select date</h4>
                     <FormControl style={{ marginBottom: '10px' }}>
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

                  <Divider style={{ marginBottom: '10px' }} />

                  <div>
                     <h4 style={{ marginBottom: '10px' }}>Result local</h4>
                     <FormControl
                        style={{ marginBottom: '10px' }}
                        error={isSelectError(formik, 'local')}
                     >
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

                     <FormControl
                        style={{ marginBottom: '10px', marginLeft: '10px' }}
                     >
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
                     <h4 style={{ marginBottom: '10px' }}>Result away</h4>
                     <FormControl
                        style={{ marginBottom: '10px' }}
                        error={isSelectError(formik, 'away')}
                     >
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

                     <FormControl
                        style={{ marginBottom: '10px', marginLeft: '10px' }}
                     >
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

                  <Divider style={{ marginBottom: '10px' }} />

                  <div>
                     <h4 style={{ marginBottom: '10px' }}>Match info</h4>
                     <div style={{ marginBottom: '5px' }}>
                        <FormControl>
                           <TextField
                              id="referee"
                              name="referee"
                              variant="outlined"
                              placeholder="Add the referee name"
                              {...formik.getFieldProps('referee')}
                              {...textErrorHelper(formik, 'referee')}
                           />
                        </FormControl>
                     </div>

                     <div style={{ marginBottom: '5px' }}>
                        <FormControl>
                           <TextField
                              id="stadium"
                              name="stadium"
                              variant="outlined"
                              placeholder="Add the stadium name"
                              {...formik.getFieldProps('stadium')}
                              {...textErrorHelper(formik, 'stadium')}
                           />
                        </FormControl>
                     </div>

                     <div style={{ marginBottom: '5px' }}>
                        <FormControl error={isSelectError(formik, 'result')}>
                           <Select
                              id="result"
                              name="result"
                              variant="outlined"
                              displayEmpty
                              {...formik.getFieldProps('result')}
                           >
                              <MenuItem value="" disabled>
                                 Select a result
                              </MenuItem>
                              <MenuItem value="W">Win</MenuItem>
                              <MenuItem value="D">Draw</MenuItem>
                              <MenuItem value="L">Lose</MenuItem>
                              <MenuItem value="n/a">Non available</MenuItem>
                           </Select>
                           {selectErrorHelper(formik, 'result')}
                        </FormControl>
                     </div>

                     <div style={{ marginBottom: '5px' }}>
                        <FormControl error={isSelectError(formik, 'final')}>
                           <Select
                              id="final"
                              name="final"
                              variant="outlined"
                              displayEmpty
                              {...formik.getFieldProps('final')}
                           >
                              <MenuItem value="" disabled>
                                 Was the game played ?
                              </MenuItem>
                              <MenuItem value="yes">Yes</MenuItem>
                              <MenuItem value="no">No</MenuItem>
                           </Select>
                           {selectErrorHelper(formik, 'final')}
                        </FormControl>
                     </div>

                     <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                     >
                        {formType === 'add' ? 'Add match' : 'Edit match'}
                     </Button>
                  </div>
               </form>
            </div>
         </EditMatchDialogWrapper>
      </AdminLayout>
   );
};

export default AddEditMatch;
